import axios from 'axios';
import { Product } from 'shopify-buy';
import useSWR from 'swr';

export default function useDisplayProducts() {
	const fetcher = (args: any) => axios.get(args).then((res) => res.data);
	return useSWR<Product[], any, any>('/api/display', fetcher);
}
