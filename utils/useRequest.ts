import useSWR from "swr"

const fetcher = url => fetch(url).then(res => res.json())
const baseUrl = process.env.CARBONZERO_API_DOMAIN || 'http://3.38.95.104:8080';

type Option = {
	page: number;
	size: number
}

export const useGetProducts = (path: string, option: Option) => {
	if (!path) {
		throw new Error("Path is required")
	}
	const url = baseUrl + path + `?page=${option.page}&size=${option.size}`

	const { data, error } = useSWR(url, fetcher)
	const products = data?._embedded?.product_response_data_list || [];
	return { products, error }
}
