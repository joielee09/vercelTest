import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { IProduct } from '../ProductList';
import IconButton from '@material-ui/core/IconButton';
import Link from 'next/link';
import React from 'react';
import RecommendationElement from './recommendationElement';
import RecommendationItemType from '../../types/recommendationItem';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const Contents = styled.div`
	display: flex;
	padding: 40px;
	justify-content: space-evenly;
`;
const ImageContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-flow: row wrap;
	max-width: 60%;
	min-width: 60%;
	justify-content: left;
`;
const LinkContainer = styled.a`
	text-decoration: none;
	color: black;
`;

type Props = {
	products: IProduct;
};

/**
 * 추천 상품
 */
const Recommendation = ({ products }: Props) => {
	// 추천상품 페이징 번호
	const [recommendPage, setRecommendPage] = React.useState(1);
	console.log(products);
	const recommendationList = products.recommendations.filter(
		elem => elem.id >= 1 && elem.id < 6,
	);

	/**
	 * 추천 상품 페이징 번호 바꾸는 함수
	 * @param action_type :string
	 * @return : null
	 */
	const handleRecommendationPage = (action_type: string) => {
		if (action_type === 'left') {
			setRecommendPage(recommendPage - 1);
		}
		if (action_type === 'right') {
			setRecommendPage(recommendPage + 1);
		}
	};

	return (
		<Contents>
			{/* 페이징 이동 화살표 아이콘 */}
			<IconButton className="" onClick={() => handleRecommendationPage('left')}>
				<ArrowLeftIcon style={{ fontSize: 70, color: '#E5E5E5' }} />
			</IconButton>
			{/* 추천 상품 나열 */}
			<ImageContainer>
				{recommendationList.map((elem: RecommendationItemType) => {
					return (
						<Link href={'/'} passHref key={elem.id}>
							<LinkContainer>
								<RecommendationElement props={elem} />
							</LinkContainer>
						</Link>
					);
				})}
			</ImageContainer>
			{/* 페이징 이동 화살표 아이콘 */}
			<IconButton
				className=""
				onClick={() => handleRecommendationPage('right')}
			>
				<ArrowRightIcon style={{ fontSize: 70, color: '#E5E5E5' }} />
			</IconButton>
		</Contents>
	);
};

export default Recommendation;
