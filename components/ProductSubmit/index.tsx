// @flow
import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import {
	Button,
	FormControl,
	FormControlLabel,
	FormLabel,
	InputAdornment,
	InputLabel,
	MenuItem,
	Radio,
	RadioGroup,
	Select,
	TextField,
} from '@material-ui/core';
import { useRouter } from 'next/router';

const ProductSubmitForm = styled.form`
	width: ${innerWidth > 450 ? '80%' : 'calc(100% - 40px)'};
	align-items: center;
	text-align: center;
	border: 2px solid #207567;
	border-radius: 10px;
	margin: ${innerWidth > 450 ? '20px auto' : '20px'};
	display: flex;
	flex-direction: column;
	padding: 40px;
	box-sizing: border-box;
`

const TextFieldInput = styled(TextField)`
	width: ${innerWidth > 450 ? '40%' : '80%'};
	margin: 20px auto;
`

const FormControlContainer = styled(FormControl)`
	width: ${innerWidth > 450 ? '40%' : '80%'};
	margin: 20px auto;
`

const ProductSubmit = () => {
	const [formValue, setFormValue] = useState({
		name: '',
		brand: '',
		category: '',
		description: '',
		price: 0,
		carbon_emission: 0,
		is_eco_friendly: true
	});

	const router = useRouter();

	const handleChange = name => event => {
		if(name === 'is_eco_friendly') setFormValue({ ...formValue, [name]: Boolean(event.target.value) });
		else if(name === 'price' || name === 'carbon_emission') setFormValue({ ...formValue, [name]: Number(event.target.value) });
		else setFormValue({ ...formValue, [name]: event.target.value });
	};

	const validationCheck = (name: string) => {
		if(name === 'name') {
			return formValue.name.length >= 2 && formValue.name.length <= 20
		} else if(name === 'brand') {
			return formValue.brand !== ''
		} else if(name === 'category') {
			return formValue.category !== ''
		} else if(name === 'price') {
			return formValue.price !== 0
		}
	}

	const productValidationCheck = () => {
		alert('제품이 등록되었습니다!');
		router.push({pathname: '/'});
	}
	return (
		<ProductSubmitForm noValidate autoComplete="off">
			<h1>프로덕트 정보를<br /> 입력해주세요.</h1>
			<TextFieldInput id="standard-basic" label="name" error={formValue.name.length !== 0 && !validationCheck('name')} onChange={handleChange('name')} helperText="제품 이름은 2자~20자 이내로 입력해주세요." />
			<TextFieldInput id="standard-basic" label="brand" onChange={handleChange('brand')} />
			<FormControlContainer>
			<InputLabel>category</InputLabel>
			<Select
				label="category"
				id="standard-basic"
				value={formValue.category}
				onChange={handleChange('category')}
			>
				<MenuItem value='식품 > 생수/음료'>{`식품 > 생수/음료`}</MenuItem>
				<MenuItem value='생활용품 > 헤어/바디/시안'>{`생활용품 > 헤어/바디/시안`}</MenuItem>
			</Select>
			</FormControlContainer>
			<TextFieldInput id="standard-basic" label="description (option)" onChange={handleChange('description')}/>
			<TextFieldInput id="standard-basic" label="price" type="number" InputProps={{
				startAdornment: <InputAdornment position="start">₩</InputAdornment>,
			}} onChange={handleChange('price')}/>
			<TextFieldInput id="standard-basic" label="carbon_emission (option)" type="number" onChange={handleChange('carbon_emission')}/>
			<FormLabel style={{textAlign: 'left', marginTop: '20px'}}>is_eco</FormLabel>
			<RadioGroup aria-label="eco" name="is_eco_friendly" defaultValue="true" onChange={handleChange('is_eco_friendly')}>
				<FormControlLabel value="true" control={<Radio />} label="true" />
				<FormControlLabel value="false" control={<Radio />} label="false" />
			</RadioGroup>
			<Button variant="contained" type="submit" onClick={productValidationCheck} disabled={!validationCheck('name') || !validationCheck('brand') || !validationCheck('category') || !validationCheck('price')}>프로덕트 등록하기</Button>
		</ProductSubmitForm>
	);
};

export default ProductSubmit
