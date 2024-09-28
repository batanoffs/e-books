import { stringify } from 'query-string'
import { fetchUtils, DataProvider } from 'ra-core'
import { getToken } from '../../utils/helpers/auth'

type Identifier = string | number

const httpClient = async (
	url: string,
	options: { headers?: Record<string, string>; method?: string; body?: any } = {}
) => {
	const headers = new Headers(options.headers)

	const token = getToken()
	if (token) {
		// It's not necessary to manually set the 'Cookie' header if you're using credentials: 'include'
		headers.set('Cookie', `token=${token}`)
	}

	return fetchUtils.fetchJson(url, { ...options, headers, credentials: 'include' })
}

export default (apiUrl: string): DataProvider => ({
	create: async (resource: string, params: { data: any }) => {
		console.log('DataProvider create params: ', params.data)
		console.log('apiUrl:', apiUrl)
		console.log('create url: ', apiUrl + resource)
		console.log('resource: ', resource)

		const { json } = await httpClient(apiUrl + resource, {
			method: 'POST',
			body: JSON.stringify(params.data),
		})

		return { data: { ...params.data, id: json.id } }
	},

	getList: async (
		resource: string,
		params: {
			pagination?: { page: number; perPage: number }
			sort?: { field: string; order: string }
			filter?: Record<string, any>
		}
	) => {
		const { page, perPage } = params.pagination || { page: 0, perPage: 0 }
		const { field = '', order = '' } = params.sort || {}
		const query = {
			...fetchUtils.flattenObject(params.filter),
			_sort: field,
			_order: order,
			_start: (page - 1) * perPage,
			_end: page * perPage,
		}
		const url = apiUrl + resource + `/?` + stringify(query)
		const { headers, json } = await httpClient(url)
		if (!headers.has('x-total-count')) {
			throw new Error(
				'The X-Total-Count header is missing in the HTTP Response. ' +
					'The jsonServer Data Provider expects responses for lists of resources ' +
					'to contain this header with the total number of results to build the pagination. ' +
					'If you are using CORS, did you declare X-Total-Count in the Access-Control-Expose-Headers header?'
			)
		}

		console.log('getList json: ', json)

		return {
			data: json,
			total: parseInt(headers.get('x-total-count')!.split('/').pop()!, 10),
		}
	},

	getOne: async (resource: string, params: { id: Identifier }) => {
		const url = apiUrl + resource + '/' + params.id
		const { json } = await httpClient(url)
		return { data: json }
	},

	getMany: async (resource: string, params: { ids: Identifier[] }) => {
		const query = {
			filter: JSON.stringify({ id: params.ids }),
		}
		const url = apiUrl + resource + `?` + stringify(query)
		const { json } = await httpClient(url)
		return { data: json }
	},

	getManyReference: async (
		resource: string,
		params: {
			pagination: { page: number; perPage: number }
			sort: { field: string; order: string }
			target: string
			id: Identifier
			filter: Record<string, any>
		}
	) => {
		const { page, perPage } = params.pagination
		const { field = '', order = '' } = params.sort || {}
		const query = {
			_sort: field,
			_order: order,
			_start: (page - 1) * perPage,
			_end: page * perPage,
			[params.target]: params.id,
			...fetchUtils.flattenObject(params.filter),
		}
		const url = apiUrl + resource + `/?` + stringify(query)
		const { headers, json } = await httpClient(url)
		if (!headers.has('x-total-count')) {
			throw new Error(
				'The X-Total-Count header is missing in the HTTP Response. ' +
					'The jsonServer Data Provider expects responses for lists of resources ' +
					'to contain this header with the total number of results to build the pagination. ' +
					'If you are using CORS, did you declare X-Total-Count in the Access-Control-Expose-Headers header?'
			)
		}

		return {
			data: json,
			total: parseInt(headers.get('x-total-count')!.split('/').pop()!, 10),
		}
	},

	update: async (resource: string, params: { id: string; data: any }) => {
		const url = apiUrl + resource + '/' + params.id

		const { json } = await httpClient(url, {
			method: 'PUT',
			body: JSON.stringify(params.data),
		})
		return { data: json }
	},

	updateMany: async (resource: string, params: { ids: Identifier[]; data: any }) => {
		const query = {
			filter: JSON.stringify({ id: params.ids }),
		}
		const url = apiUrl + resource + `/?` + stringify(query)
		const { json } = await httpClient(url, {
			method: 'PUT',
			body: JSON.stringify(params.data),
		})
		return { data: json }
	},

	delete: async (resource: string, params: { id: Identifier }) => {
		const url = apiUrl + resource + '/' + params.id
		const { json } = await httpClient(url, {
			method: 'DELETE',
		})
		return { data: json }
	},

	deleteMany: async (resource: string, params: { ids: Identifier[] }) => {
		const query = {
			filter: JSON.stringify({ id: params.ids }),
		}
		const url = apiUrl + resource + `/?` + stringify(query)
		const { json } = await httpClient(url, {
			method: 'DELETE',
		})
		return { data: json }
	},
})
