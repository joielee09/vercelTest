// @flow
import * as React from 'react';
import styled from 'styled-components';
import { Button, FormControlLabel, FormLabel, InputAdornment, Radio, TextField, RadioGroup } from '@material-ui/core';
import dynamic from 'next/dynamic';

export const ProductSubmitWithNoSSR = dynamic(() => import('../../components/ProductSubmit'), {
	ssr: false,
});

const SubmitProduct = () => {
	return (
		<ProductSubmitWithNoSSR />
	);
};

export default SubmitProduct
