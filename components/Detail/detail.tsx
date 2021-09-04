import { IProduct } from '../ProductList';
import React from 'react';
import styled from 'styled-components';

const Contents = styled.div`
	margin: 20px;
	text-align: center;
	margin-top: 200px;

	img {
		max-width: 100%;
		height: 100%;
		max-height: 60vh;
	}
`;

type Props = {
	products?: IProduct;
};

/**
 * 제품 상세 설명
 */
const DetailLayout = ({ products }: Props) => {
	return (
		<>
			<Contents>
				<p>{products.description}</p>
				<img src={products.image_link[0]} alt="제품 상세 이미지" />
				<p>{products.description}</p>
				<img src={products.image_link[0]} alt="제품 상세 이미지" />
				<p>{products.description}</p>
				<img src={products.image_link[0]} alt="제품 상세 이미지" />
			</Contents>
		</>
	);
};

export default DetailLayout;
