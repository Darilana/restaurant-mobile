import React from 'react'
import { FaChevronCircleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import './styles.css'

const FixedFooter = ({ table, goBack, cost }) => (
	<div className="footer">
		<FaChevronCircleLeft color="#fff" size="25px" className="arrowIcon" onClick={goBack} />
		<div className="cost">{cost}</div>
		{table
		? <Link className="linkWithoutStyle" to='/cart'>
			<div className="footerTxt">Table {table} cart</div>
		</Link>
		: <div className="footerTxt">Checkout</div>}
	</div>
);

export default FixedFooter
