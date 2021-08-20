import styled from 'styled-components';

export const Container = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 15px;
	width: 100%;

	h1 {
		color: #363636;
		text-align: center;
		font-family: 'Lobster', cursive;
	}
`;

export const Search = styled.section`
	margin: 20px 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;

	form {
		width: 50%;
    margin-right: 10px;
		position: relative;
		display: flex;
		align-items: center;
		
		div {
			margin: 0;
		}

		svg {
			position: absolute;
			right: 10px;
		}
	}
` 