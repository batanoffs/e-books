export default function formatImageBase64(type: string, image: string) {
	return `data:${type};charset=utf-8;base64,${image}`
}
