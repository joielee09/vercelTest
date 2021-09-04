import { IProduct } from '../components/ProductList';
import { atom } from 'recoil';

export const productsListState = atom<IProduct[]>({
	key: 'productsListState',
	default: [
		{
			id: 1,
			name: '제주 삼다수',
			category: '식품 > 생수/음료',
			brand: '광동제약(주)',
			description: '청정제주의 깔끔한 화산암반수 그대로!',
			price: 500,
			image_link: [
				'http://th3.tmon.kr/thumbs/image/970/460/75a/c64474fd4_700x700_95_FIT.jpg',
			],
			is_eco_friendly: true,
			carbon_emissions: 1.5,
			recommendations: [
				{
					id: 1,
					name: '캡슐 생수 오호',
					image:
						'http://th3.tmon.kr/thumbs/image/970/460/75a/c64474fd4_700x700_95_FIT.jpg',
					price: 1500,
				},
				{
					id: 2,
					name: '종이로 만든 친환경 물병 추스 워터',
					image:
						'http://th3.tmon.kr/thumbs/image/970/460/75a/c64474fd4_700x700_95_FIT.jpg',
					price: 1500,
				},
				{
					id: 3,
					name: '라벨 없는 생수 오아시스',
					image:
						'http://th3.tmon.kr/thumbs/image/970/460/75a/c64474fd4_700x700_95_FIT.jpg',
					price: 1500,
				},
				{
					id: 4,
					name: '분해성분으로 구성된 페트병 생수',
					image:
						'http://th3.tmon.kr/thumbs/image/970/460/75a/c64474fd4_700x700_95_FIT.jpg',
					price: 1500,
				},
				{
					id: 5,
					name: '분해성분으로 구성된 페트병 생수',
					image:
						'http://th3.tmon.kr/thumbs/image/970/460/75a/c64474fd4_700x700_95_FIT.jpg',
					price: 1500,
				},
			],
		},
		{
			id: 2,
			name: '미쟝센 퍼펙트 세럼 오리지널',
			category: '생활용품 > 헤어/바디/시안',
			brand: '(주)아모레퍼시픽',
			description: '퍼펙트 세럼의 영양성분을 그대로 담은 세럼샴푸',
			price: 50000,
			image_link: [
				'http://image.auction.co.kr/itemimage/1b/8a/d8/1b8ad89696.jpg',
			],
			is_eco_friendly: false,
			carbon_emissions: 2.5,
			recommendations: [
				{
					id: 1,
					name: '캡슐 생수 오호',
					image:
						'http://th3.tmon.kr/thumbs/image/970/460/75a/c64474fd4_700x700_95_FIT.jpg',
					price: 1500,
				},
				{
					id: 2,
					name: '종이로 만든 친환경 물병 추스 워터',
					image:
						'http://th3.tmon.kr/thumbs/image/970/460/75a/c64474fd4_700x700_95_FIT.jpg',
					price: 1500,
				},
				{
					id: 3,
					name: '라벨 없는 생수 오아시스',
					image:
						'http://th3.tmon.kr/thumbs/image/970/460/75a/c64474fd4_700x700_95_FIT.jpg',
					price: 1500,
				},
			],
		},
		{
			id: 3,
			name: '코카콜라',
			category: '식품 > 생수/음료',
			brand: '코카-콜라 음료(주)',
			description: '코카콜라 맛있어, 맛있으면 또먹어',
			price: 1000,
			image_link: [
				'http://img.danawa.com/prod_img/500000/840/156/img/3156840_1.jpg?shrink=360:360&_v=20200326113047',
			],
			is_eco_friendly: true,
			carbon_emissions: 4.5,
			recommendations: [
				{
					id: 1,
					name: '캡슐 생수 오호',
					image:
						'http://th3.tmon.kr/thumbs/image/970/460/75a/c64474fd4_700x700_95_FIT.jpg',
					price: 1500,
				},
				{
					id: 2,
					name: '종이로 만든 친환경 물병 추스 워터',
					price: 1300,
					image:
						'http://th3.tmon.kr/thumbs/image/970/460/75a/c64474fd4_700x700_95_FIT.jpg',
				},
			],
		},
		{
			id: 4,
			name: '광동 V라인 옥수수 수염차',
			category: '식품 > 생수/음료',
			brand: '광동제약(주)',
			description:
				'예로부터, 민간으로 전해 내려온 옥미수인 옥수수 수염을 구수한 옥수수차에 넣은 액상차입니다.',
			price: 2000,
			image_link: [
				'http://img.danawa.com/prod_img/500000/141/500/img/2500141_1.jpg?shrink=360:360&_v=20180518174656',
			],
			is_eco_friendly: true,
			carbon_emissions: 0.2,
			recommendations: [
				{
					id: 1,
					name: '캡슐 생수 오호',
					price: 1500,
					image:
						'http://th3.tmon.kr/thumbs/image/970/460/75a/c64474fd4_700x700_95_FIT.jpg',
				},
				{
					id: 2,
					name: '종이로 만든 친환경 물병 추스 워터',
					price: 2500,
					image:
						'http://th3.tmon.kr/thumbs/image/970/460/75a/c64474fd4_700x700_95_FIT.jpg',
				},
			],
		},
	],
});
