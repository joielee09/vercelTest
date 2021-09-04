import { productsListState } from './atoms';
import { selector } from 'recoil';
import { IProduct } from '../components/ProductList';

export const productListSelector = selector<IProduct[]>({
	key: "productListSelector",
	get: ({ get }) => {
		return get(productsListState);
	},
	set: ({set}, newValue) => set(productsListState, newValue)
})

export const productListSumSelector = selector({
	key: "productListSumSelector",
	get: ({ get }) => {
		const itemList = get(productsListState)
		return itemList.length;
	}
})
