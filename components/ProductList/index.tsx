// @flow

import * as React from 'react';

import { Button, Modal } from '@material-ui/core';
import {
	productListSelector,
	productListSumSelector,
} from '../../recoil/selectors';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import Link from 'next/link';
import RecommendationItemType from '../../types/recommendationItem';
import { commafy } from '../../utils/numbers';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const colorArr = [
	'#DFEAE2',
	'#B4D6C1',
	'#8DC3A7',
	'#6BAF92',
	'#4E9C81',
	'#358873',
	'#207567',
];

const ProductContainer = styled.div`
	display: flex;
	padding: 10px;
	flex-wrap: wrap;
	margin: 0 auto;
`;

const ProductBoxPC = styled.div<{ color: string }>`
	border: 2px solid ${props => props.color};
	background-color: ${props => props.color};
	border-radius: 5px;
	text-align: center;
	padding: 10px;
	margin: 10px;
	width: 100%;
	max-width: 300px;
	height: fit-content;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

	h3 {
		margin: 3px 0 13px;
	}

	h4 {
		font-weight: normal;
		margin: 3px 0 13px;
	}

	img {
		max-width: 100%;
		height: 100%;
		max-height: 20vh;
	}
`;

const ProductBoxMobile = styled.div<{ color: string }>`
	border: 2px solid ${props => props.color};
	background-color: ${props => props.color};
	border-radius: 5px;
	text-align: left;
	padding: 10px;
	margin: 10px;
	width: 100%;
	display: flex;
	height: fit-content;
	justify-content: space-between;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

	div {
		min-width: calc(100% - 200px);
	}

	h2 {
		font-size: 12px;
		margin: 2px 0 2px;
	}

	h3 {
		font-size: 10px;
		margin: 2px 0 2px;
	}

	h4 {
		font-size: 8px;
		font-weight: normal;
		margin: 2px 0 2px;
	}

	img {
		max-width: 100%;
		height: 100%;
		max-height: 10vh;
		margin-right: 10px;
	}
`;

const ModalContainer = styled.div<{ width: number }>`
	width: ${props => (props.width > 450 ? '50vw' : '80vw')};
	height: 60vh;
	background-color: white;
	margin: 20vh auto;
	padding: 20px;
	box-sizing: border-box;
	border: 0;
	border-radius: 8px;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

	h2 {
		text-align: center;
	}
`;

const RecommendProductItem = styled.div<{ width: number; color: string }>`
	border: 2px solid ${props => props.color};
	background-color: ${props => props.color};
	border-radius: 4px;
	padding: ${props => (props.width > 450 ? '20px' : '10px')};
	margin: 10px;
	box-sizing: border-box;
	width: calc(100% - 20px);
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export interface IProduct {
	id: number;
	create_at?: string;
	update_at?: string;
	name: string;
	brand: string;
	price: number;
	description: string;
	image_link: string[];
	category: string;
	is_eco_friendly: boolean;
	carbon_emissions: number;
	recommendations: RecommendationItemType[];
}

type Props = {
	products: IProduct[];
};

const ProductList = ({ products }: Props) => {
	const [productList, setProductList] =
		useRecoilState<IProduct[]>(productListSelector);
	// const setItemList = useSetRecoilState(products);
	const sum = useRecoilValue(productListSumSelector);
	const router = useRouter();
	const [isOpenModal, setIsOpenModal] = useState(false);

	useEffect(() => {
		setProductList(products);
	}, [products]);

	return (
		<>
			<ProductContainer>
				{productList.map(product => {
					if (innerWidth > 450) {
						return (
							<ProductBoxPC
								key={product.id}
								color={colorArr[Math.floor(Math.random() * colorArr.length)]}
							>
								<h2>{product.name}</h2>
								<img src={product.image_link[0]} alt="이미지" />
								<h3>{product.category}</h3>
								<h4>{product.description}</h4>
								<h4>
									이 제품은 친환경 제품
									{product.is_eco_friendly ? '입니다.' : '이 아닙니다.'}
								</h4>
								{!product.is_eco_friendly && (
									<Button
										variant="contained"
										style={{ marginBottom: '10px' }}
										onClick={() => setIsOpenModal(true)}
									>
										친환경 제품으로 바꾸기
									</Button>
								)}
								<p>
									<Link
										as={`/detail/${product.id}`}
										href={{
											pathname: '/detail/[id]',
										}}
										passHref
										key={product.id}
									>
										<Button
											variant="contained"
											style={{ marginBottom: '10px' }}
										>
											제품 자세히
										</Button>
									</Link>
								</p>
								<h3>₩{commafy(product.price)}</h3>
							</ProductBoxPC>
						);
					} else {
						return (
							<ProductBoxMobile
								key={product.id}
								onClick={() => setIsOpenModal(true)}
								color={colorArr[Math.floor(Math.random() * colorArr.length)]}
							>
								<img src={product.image_link[0]} alt="이미지" />
								<div>
									<h2>{product.name}</h2>
									<h3>{product.category}</h3>
									<h4>{product.description}</h4>
									<h4>
										이 제품은 친환경 제품
										{product.is_eco_friendly ? '입니다.' : '이 아닙니다.'}
									</h4>
									<p>
										<Link
											as={`/detail/${product.id}`}
											href={{
												pathname: '/detail/[id]',
											}}
											passHref
											key={product.id}
										>
											<Button
												variant="contained"
												style={{ marginBottom: '10px' }}
											>
												제품 자세히
											</Button>
										</Link>
									</p>
									<h3>₩{commafy(product.price)}</h3>
								</div>
								{!product.is_eco_friendly && (
									<Button
										variant="contained"
										style={{
											marginBottom: '2px',
											fontSize: '10px',
											padding: '5px',
											width: '50px',
										}}
									>
										친환경 제품
										<br />
										으로 바꾸기
									</Button>
								)}
							</ProductBoxMobile>
						);
					}
				})}
			</ProductContainer>
			<p>sum : {sum}</p>
			<Button variant="contained" onClick={() => router.push('/submit')}>
				새로운 프로덕트 등록하기
			</Button>
			<Modal
				open={isOpenModal}
				onClose={() => setIsOpenModal(false)}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
			>
				<ModalContainer width={innerWidth}>
					<h2>
						이 물품들을 대신
						<br /> 사용해 보는 건 어떠세요?
					</h2>
					<RecommendProductItem
						width={innerWidth}
						color={colorArr[Math.floor(Math.random() * colorArr.length)]}
					>
						<div>아이템 1</div>
						<div>카테고리 1</div>
						<div>가격 1</div>
					</RecommendProductItem>
					<RecommendProductItem
						width={innerWidth}
						color={colorArr[Math.floor(Math.random() * colorArr.length)]}
					>
						<div>아이템 2</div>
						<div>카테고리 2</div>
						<div>가격 2</div>
					</RecommendProductItem>
					<RecommendProductItem
						width={innerWidth}
						color={colorArr[Math.floor(Math.random() * colorArr.length)]}
					>
						<div>아이템 3</div>
						<div>카테고리 3</div>
						<div>가격 3</div>
					</RecommendProductItem>
				</ModalContainer>
			</Modal>
		</>
	);
};

export default ProductList;
