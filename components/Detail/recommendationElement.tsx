import React from 'react';
import RecommendationItemType from '../../types/recommendationItem';
import styled from 'styled-components';

const Contents = styled.div`
	margin: 20px;
	text-align: center;

	img {
		max-width: 150px;
		height: 150px;
		margin-right: 10px;
		margin-left: 10px;
	}
`;

type Props = {
	props: RecommendationItemType;
};

/**
 * 추천 상품 요소
 */
const RecommendationElemnet = ({ props }: Props) => {
	return (
		<Contents>
			<img src={props.image} alt="추천 상품 이미지" />
			<p>
				{props.name.length > 8 ? `${props.name.slice(0, 8)}...` : props.name}
			</p>
			<p>{props.price} 원</p>
		</Contents>
	);
};

export default RecommendationElemnet;
