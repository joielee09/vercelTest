import Certificate from './certificate';
import Detail from './detail';
import Display from './display';
import { IProduct } from '../ProductList';
import React from 'react';
import Recommendation from './recommendation';

type Props = {
	products: IProduct;
};

/**
 * 상세 페이지의 Layout
 * Display: 상품의 이미지와 구매와 관련된 설명
 * Recommendation: 추천 상품 목록
 * Certificate: 친환경 상품일 경우 친환경 인증 마크에 대한 설명
 * Detail: 제품의 상세 설명
 */
const DetailLayout = ({ products }: Props) => {
	return (
		<>
			<div className="layout_container">
				<Display products={products} />
				<Recommendation products={products} />
				<Certificate products={products} />
				<Detail products={products} />
			</div>
		</>
	);
};

export default DetailLayout;
