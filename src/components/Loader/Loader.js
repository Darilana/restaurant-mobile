import React from 'react'
import Loader from 'react-loader-spinner'
import './styles.css'

const CustomLoader = () => (
	<div className="loaderContainer">
		<Loader
			type="ThreeDots"
			color="#d60005"
			height="300"
			width="50"
		/>
	</div>
);

export default CustomLoader
