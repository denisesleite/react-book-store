import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	position: fixed;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	background: rgba(0,0,0,0.5);
	transition: all .3s linear;
`;

export const Content = styled.div`
	background: #fff;
	width: 70%;
	padding: 30px;
	border-radius: 4px;
	position: relative;
	transform: translate(-10px, -10px);
	transition: all .3s ease;

	h1 {
		text-align: center;
		margin: 12px 0 20px;
	}

	svg{
		width: 25px;
		height: 25px;
		position: absolute;
		right: 10px;
		top: 10px;
		cursor: pointer;
	}
`;