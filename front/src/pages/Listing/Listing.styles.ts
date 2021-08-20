import styled from 'styled-components';

export const Container = styled.div`
	min-height: 100vh;
	background: #faf7f5;
`;

export const Banner = styled.section`
	position: relative;
	height: 0;
	padding-bottom: 23%;
	margin-bottom: 20px;

	img {
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: fill;
		opacity: 0.8;
	}
`;

export const Content = styled.section`
	width: calc(100% - 30px);
	margin: 15px;
	
	ul {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 16px;
		list-style: none;

		li {
			background: #fff;
			border-radius: 5px;
			border: 2px solid transparent;
			padding: 15px 15px 5px;
			cursor: pointer;
			box-shadow: 6px 4px 15px 2px #ccc;
			transition: all .3s ease;

			&:hover {
				transform: translateY(-5px);
				border-color: #d5b889;
			}
		}
	}
`;

export const Menu = styled.ul`
	list-style: none;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 20px;

	li {
		margin: 0 15px;
		position: relative;
		transition: all 0.3s;

		a {
			text-decoration: none;
			color: #363636;
			padding: 10px;
			z-index: 999;
			transition: all 0.3s;

			&::before{
				content: '';
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 1;
				opacity: 0;
				transition: all 0.3s;
				border-top: 1px solid transparent;
				border-bottom:1px solid transparent;
				transform: scale(0.1, 1);
			}

			&:hover{
				&::before{
					opacity: 1;	
					transform: scale(1, 1);
					border-color: #363636;
				}
			}
		}
	}
`;