import { stringify } from 'query-string';
import { fetchUtils, DataProvider } from 'ra-core';

// const apiUrl = 'http://localhost:5001/api';

const httpClient = async (
    url: string,
    options: { headers?: Record<string, string>; method?: string; body?: string } = {}
) => {
    const headers = new Headers(options.headers);
    const token = document.cookie
        .split(';')
        .map((cookie) => cookie.trim())
        .find((cookie) => cookie.startsWith('token='))
        ?.split('=')[1];
    // set the token only if available in cookie
    if (token !== undefined) {
        //TODO set token in cookies
        headers.set('Cookie', `token=${token}`);
    }
    return fetchUtils.fetchJson(url, { ...options, headers });
};

export default (apiUrl: string): DataProvider => ({
    getList: (
        resource: string,
        params: {
            pagination: { page: number; perPage: number };
            sort: { field: string; order: string };
            filter: any;
        }
    ) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            ...fetchUtils.flattenObject(params.filter),
            _sort: field,
            _order: order,
            _start: (page - 1) * perPage,
            _end: page * perPage,
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url).then(({ headers, json }) => {
            if (!headers.has('x-total-count')) {
                throw new Error(
                    'The X-Total-Count header is missing in the HTTP Response. The jsonServer Data Provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare X-Total-Count in the Access-Control-Expose-Headers header?'
                );
            }
            return {
                data: json,
                total: parseInt(headers.get('X-Total-Count').split('/').pop(), 10),
            };
        });
    },

    getOne: (resource: string, params: { id: string }) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
            data: json,
        })),

    getMany: (resource: string, params: { ids: string[] }) => {
        const query = {
            filter: JSON.stringify({ id: params.ids }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        return httpClient(url).then(({ json }) => ({ data: json }));
    },

    getManyReference: (
        resource: string,
        params: {
            pagination: { page: number; perPage: number };
            sort: { field: string; order: string };
            target: string;
            id: string;
            filter: any;
        }
    ) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify({
                ...params.filter,
                [params.target]: params.id,
            }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url).then(({ headers, json }) => ({
            data: json,
            total: parseInt(headers.get('x-total-count').split('/').pop(), 10),
        }));
    },

    update: (resource: string, params: { id: string; data: any }) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json })),

    updateMany: (resource: string, params: { ids: string[]; data: any }) => {
        const query = {
            filter: JSON.stringify({ id: params.ids }),
        };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json }));
    },

    create: (resource: string, params: { data: any }) =>
        httpClient(`${apiUrl}/${resource}`, {
            method: 'POST',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({
            data: { ...params.data, id: json.id },
        })),

    delete: (resource: string, params: { id: string }) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'DELETE',
        }).then(({ json }) => ({ data: json })),

    deleteMany: (resource: string, params: { ids: string[] }) => {
        const query = {
            filter: JSON.stringify({ id: params.ids }),
        };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'DELETE',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json }));
    },
});
