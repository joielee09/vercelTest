// @flow

import * as React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo.png';
import styled from 'styled-components';

// theme color: 3C9D46 8DC3A7
const HeaderContainer = styled.div`
	width: calc(100% - 40px);
	height: 80px;
	background-color: #8dc3a7;
	color: black;
	padding: 20px;
	text-align: center;
	//box-sizing: border-box;

	h1 {
		margin: 0 0 10px;
	}

	h3 {
		margin: 0;
	}
`;

const Header = () => {
	return (
		<HeaderContainer>
			<h1>탄소노노</h1>
			<h3>여러분의 선택으로 지구를 살릴 수 있습니다.</h3>
		</HeaderContainer>
	);
};

export default Header;
