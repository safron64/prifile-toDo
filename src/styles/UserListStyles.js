import styled from 'styled-components'

export const Container = styled.div`
	max-width: 600px;
	margin: 0 auto;
	padding: 20px;
`

export const UserCardContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
	border: 1px solid #ccc;
	margin-bottom: 10px;
	border-radius: 5px;
`

export const UserDetails = styled.div`
	display: flex;
	flex-direction: column;
`

export const Button = styled.button`
	background: #ff6347;
	color: white;
	border: none;
	padding: 5px 10px;
	cursor: pointer;
	border-radius: 5px;

	&:hover {
		background: #ff4500;
	}
`

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
`

export const Input = styled.input`
	margin-bottom: 10px;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
`

export const PaginationContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: 20px 0;
`

export const PageButton = styled.button`
	background: #ddd;
	color: #333;
	border: none;
	padding: 5px 10px;
	cursor: pointer;
	border-radius: 5px;
	margin: 0 5px;

	&:hover {
		background: #ccc;
	}

	&[disabled] {
		cursor: not-allowed;
		background: #eee;
	}
`

export const ErrorMessage = styled.p`
	color: red;
`

export const FlexBtn = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
`

