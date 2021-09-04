import DisplayInformation from './displayInformation';
import { IProduct } from '../ProductList';
import React from 'react';
import styled from 'styled-components';

const Contents = styled.div`
	display: flex;
	flex-direction: row;
	flex-flow: row wrap;
	margin: 100px;
	max-width: 100%;
	justify-content: space-evenly;

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
 * Display: 상품의 이미지와 구매와 관련된 설명
 */
const DisplayLayout = ({ products }: Props) => {
	return (
		<>
			<Contents className="layout_container">
				<img src={products.image_link[0]} alt="상품 이미지" />
				<DisplayInformation products={products} />
			</Contents>
		</>
	);
};

export default DisplayLayout;
