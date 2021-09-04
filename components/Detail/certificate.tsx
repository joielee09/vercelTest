import { IProduct } from '../ProductList';
import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
	display: flex;
	justify-content: center;
`;
const CertificationContainer = styled.div`
	margin: 50px;
	padding: 30px;
	justify-content: center;
	border: 1px solid lightgray;
`;
const CertificationInfo = styled.div`
	display: flex;
	flex-direction: row;
	flex-flow: row wrap;
	max-width: 100%;
	justify-content: center;

	img {
		max-width: 100%;
		height: 100%;
		max-height: 60vh;
		margin: auto;
	}

	p.certification-name {
		font-size: 20px;
		color: green;
	}
`;

const Image = styled.img`
	width: 100px;
	height: 100px;
`;

type Props = {
	products?: IProduct;
};

/**
 * 친환경 인증 컴포넌트
 */
const Certificate = ({ products }: Props) => {
	return (
		<Content>
			{products.is_eco_friendly ? (
				// 친환경 제품일 경우
				<Content>
					<CertificationContainer>
						<CertificationInfo>
							<Image
								src="https://image.edaily.co.kr/images/Photo/files/NP/S/2020/01/PS20012800634.jpg"
								alt="친환경마크"
							/>
							<div>
								<p className="certification-name">저탄소 인증 제품</p>
								<p>
									이 상품은 탄소가 적게 배출되는 상품으로 친환경적인 상품입니다.
									<br />
									저탄소제품은 환경성적표지 인증을 받은 제품 중 ‘저탄소 제품
									기준’ 고시에 적합한 제품을 말합니다.
								</p>
							</div>
						</CertificationInfo>
					</CertificationContainer>
				</Content>
			) : (
				// 친환경 제품이 아닐 경우
				<Content />
			)}
		</Content>
	);
};

export default Certificate;
