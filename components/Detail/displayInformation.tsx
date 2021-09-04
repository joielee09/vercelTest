import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

import AddIcon from '@material-ui/icons/Add';
import FormControl from '@material-ui/core/FormControl';
import { IProduct } from '../ProductList';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import RemoveIcon from '@material-ui/icons/Remove';
import Select from '@material-ui/core/Select';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import styled from 'styled-components';

const Contents = styled.div`
	border-left: 0.5px solid lightgray;
	padding-left: 35px;
	img {
		max-width: 100%;
		height: 100%;
		max-height: 20vh;
	}
`;

const ProductImage = styled.div`
	h3.price {
		text-align: right;
		color: #6b90dc;
		font-weight: bolder;
		font-size: 22px;
	}
`;

const ProductDetail = styled.div`
	height: 50px;
	background-color: #f7f8fa;
	display: flex;
	justify-content: center;
	text-align: center;

	span {
		font-weight: bolder;
		color: #52c974;
	}
`;

const ProductPoint = styled.div`
	border: 2.5px solid lightgray;
	margin-top: 20px;
	padding: 14px;

	p.title {
		font-weight: bolder;
		font-size: 16px;
	}
	p.basic-point {
		font-size: 12px;
		color: gray;
	}
`;

const ExtraProduct = styled.div`
	border-top: 0.5px solid lightgray;
	margin-top: 20px;
	padding: 14px;

	p.title {
		color: gray;
	}
`;

const AddDeleteProduct = styled.div`
	border-top: 0.5px solid lightgray;
	display: flex;
`;

const ProductTotal = styled.div`
	border-bottom: 0.5px solid lightgray;
	text-align: right;
	margin-top: 20px;
	margin-bottom: 20px;

	span.total_quantity {
		color: #bfbfbf;
	}
	h3.total_price {
		display: inline;
		color: #6b90dc;
	}
`;

const Stock = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 30px;
`;

type Props = {
	products?: IProduct;
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		formControl: {
			minWidth: 250,
		},
		selectEmpty: {},
	}),
);

/**
 * 구매와 관련된 설명
 */
const DisplayInformation = ({ products }: Props) => {
	const classes = useStyles();
	const [addition, setAddition] = React.useState('');
	const [quantity, setQuantity] = React.useState(1);

	/**
	 * 추가상품 추가
	 * @param value: string
	 * @return null
	 */
	const handleChange = (event: React.ChangeEvent<{ value: string }>) => {
		setAddition(event.target.value as string);
	};

	/**
	 * 구매 상품 개수 변화 함수
	 * @param action_type: string
	 * @return null
	 */
	const handleQuantity = (action_type: string) => {
		if (action_type == 'add') {
			setQuantity(quantity + 1);
		}
		if (action_type == 'delete') {
			setQuantity(quantity - 1);
		}
	};

	return (
		<Contents>
			{/* 상품 이미지 */}
			<ProductImage>
				<h2 className="title">{products.name}</h2>
				<h3 className="price">{products.price} 원</h3>
			</ProductImage>

			{/* 상품 상세 */}
			<ProductDetail>
				<p>
					<span>삼성카드 간편결제 시 5% 청구할인</span> (최대 2천원)
				</p>
			</ProductDetail>
			<ProductPoint>
				<p className="title">탄소 노노 유저만을 위한 혜택</p>
				<p className="max-point">최대 적립 포인트: {products.price * 0.01}원</p>
				<p className="basic-point"> ㄴ기본적립: {products.price * 0.004}원</p>
				<p className="extra-point">
					맴버십 추가 적립: {products.price * 0.006}원
				</p>
			</ProductPoint>

			{/* 추가 상품 선택 */}
			<ExtraProduct>
				<p className="title">추가상품</p>
				<FormControl variant="outlined" className={classes.formControl}>
					<InputLabel id="demo-simple-select-outlined-label">
						추가상품 1
					</InputLabel>
					<Select
						labelId="demo-simple-select-outlined-label"
						id="demo-simple-select-outlined"
						value={addition}
						onChange={handleChange}
						label="additional-product"
					>
						<MenuItem value="0">
							<em>선택안함</em>
						</MenuItem>
						<MenuItem value="1">소프넛 주머니</MenuItem>
					</Select>
				</FormControl>
			</ExtraProduct>

			{/* 총 주문 수량 */}
			<ProductTotal>
				<AddDeleteProduct>
					<IconButton
						aria-label="delete"
						className=""
						onClick={() => handleQuantity('delete')}
					>
						<RemoveIcon />
					</IconButton>
					<h4 className="quantity">{quantity}</h4>
					<IconButton
						aria-label="delete"
						className=""
						onClick={() => handleQuantity('add')}
					>
						<AddIcon />
					</IconButton>
				</AddDeleteProduct>

				<span className="total_quantity">{`총 수량:  ${quantity}개  |  `}</span>
				<h3 className="total_price">{`총 가격: ${
					quantity * products.price
				}원`}</h3>
			</ProductTotal>

			{/* 재고안내 */}
			<Stock>
				<ShoppingCartOutlinedIcon
					fontSize="large"
					style={{ width: 100, height: 100, color: '#E5E5E5' }}
				/>
				<p>이 상품은 현재 구매하실 수 없는 상품입니다.</p>
				<p>(재입고 시 구매가능)</p>
			</Stock>
		</Contents>
	);
};

export default DisplayInformation;
