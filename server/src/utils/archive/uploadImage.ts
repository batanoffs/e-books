// import { Request, Response } from 'express'
// import { saveCover } from './saveCover'

// export const validateAndUploadImage = async (req: Request, res: Response) => {
// 	try {
// 		if (req.method === 'POST' || req.method === 'PUT') {
// 			const { file, title } = req.body
//             console.log('file', file);
//             console.log('title', title);
            
// 			if (!file) return new Error('No image file provided')

// 			const response = await saveCover(file, title)
// 			console.log(response)

// 			if (response instanceof Error) {
// 				throw response
// 			}

// 			const { url, publicId } = response

// 			console.log('url', url)
// 			console.log('publicId', publicId)

// 			req.body.picture = url
// 		}
// 	} catch (error) {
// 		return error
// 	}
// }
