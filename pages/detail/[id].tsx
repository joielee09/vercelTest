import React from 'react';
import dynamic from 'next/dynamic';
import { productsListState } from '../../recoil/atoms';
import { useRecoilValue } from 'recoil';
import { withRouter } from 'next/router';

export const HeaderWithNoSSR = dynamic(
	() => import('../../components/Header'),
	{
		ssr: false,
	},
);
export const LayoutWithNoSSR = dynamic(
	() => import('../../components/Detail'),
	{
		ssr: false,
	},
);

/**
 * 상품 상세 페이지
 */

function Detail({ router, res }) {
	// 상품 API 가져올 때
	// const item = res.data;

	// 더미 데이터를 사용할 때
	const products = useRecoilValue(productsListState);
	const ditem = products[`${router.query.id - 1}`];

	return (
		<div>
			<HeaderWithNoSSR />
			<LayoutWithNoSSR products={ditem} />
		</div>
	);
}

/**
 * 상품 하나의 정보를 가져온다 (axios로 통신할 때 사용)
 * @returns product: object
 */
// Detail.getInitialProps = async function () {
// 	const res = await axios.get('http://3.37.43.224:8080/products/3');
// 	return { res };
// };

export default withRouter(Detail);
