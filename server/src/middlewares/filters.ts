export const parseFilter = (req, res, next) => {
	if (req.query.filter) {
		try {
			req.query.filter = JSON.parse(req.query.filter) // Parse the filter string into an object
		} catch (e) {
			return res.status(400).send({ error: 'Invalid filter format' })
		}
	}
	next()
}

export const castFilter = (filter, model, allowedRegexFields, regexFlags) => {
	const modifiedFilter = { ...filter }

	// Example: If the filter has an array for _id, apply the MongoDB $in operator
	Object.keys(modifiedFilter).forEach(key => {
		if (Array.isArray(modifiedFilter[key])) {
			modifiedFilter[key] = { $in: modifiedFilter[key] }
		}
	})

	return modifiedFilter
}

export const filterGetList = queryParams => {
	const { filter = {} } = queryParams

	// Other logic here...
	return filter
}
