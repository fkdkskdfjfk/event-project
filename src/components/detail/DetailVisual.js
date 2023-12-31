import React, { useEffect } from 'react';
import styled from 'styled-components';
import eximage2 from "../../images/eximage2.jpg";


const DetailVisualWrapper = styled.div`
	width: 100%;
	height: 500px;
	background-image: url(${eximage2});
	background-position: center;
	background-size: cover;
	opacity: 0.7;
	background-attachment: fixed;
	filter: brightness(90%);

	@media screen and (max-width: 768px){
		height: 300px;
	}
`;

function DetailVisual(props) {
	// const { festival: { image } } = props; 
	return (
		<DetailVisualWrapper>
		</DetailVisualWrapper>
	);
}

export default DetailVisual;