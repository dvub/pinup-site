import axios from 'axios';
import useSWR from 'swr';

export default function useProducts() {
	const fetcher = (args: any) => axios.get(args).then((res) => res.data);
	return useSWR('/api/products', fetcher);
}
