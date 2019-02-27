import React from 'react'
import PropTypes from 'prop-types'
import FixedFooter from '../../components/FixedFooter/FixedFooter'
import { FaMapMarkerAlt, FaClipboardCheck } from 'react-icons/fa'
import connect from 'react-redux/es/connect/connect'
import './styles.css'

class Cart extends React.Component{
	static contextTypes = {
		router: PropTypes.object,
	};

	state = {
		useCashPoints: true,
		paymentType: 'card'
	};

	onCashPointsChange = () => this.setState(prevState => ({
		useCashPoints: !prevState.useCashPoints
	}));

	setPaymentType = (type) => this.setState({ paymentType: type });

	render() {
		const { selectedProduct } = this.props;
		return (
			<div className="cartContainer">
				<div className="cartTitle">Checkout</div>
				<div className="restTitle">Restaurant</div>
				<div className="addressField">
					<FaMapMarkerAlt color='#d60005' />
					<span className="fieldTxt">Sumo Solli Plass, Oslo</span>
				</div>
				<div className="tableField">
					<FaClipboardCheck color='#d60005'/>
					<span className="fieldTxt">Table 7</span>
				</div>
				<div className="fieldTitle">Order</div>
				<div className="fieldTitle">Laksemeny</div>
				<div className="fieldStyle">8,-</div>
				<div className="fieldTitle">Laksemeny</div>
				<div className="fieldSubTitle">Sake (+14,-), Rice +12,-</div>
				<div className="fieldStyle">8,-</div>
				<div className="fieldTitle">Laksemeny</div>
				<div className="fieldStyle">8,-</div>
				<div className="fieldTitle">Cutlery</div>
				<div className="fieldStyle">8,-</div>
				<div className="fieldTitle">Delivery</div>
				<div className="fieldStyle">10,-</div>
				<div className="fieldTitle">Total discount</div>
				<div className="fieldStyle">-208,-</div>
				<div className="sectionTitle">Cash points</div>
				<div className="inputContainer">
					<label className="container">
						<span className="checkBoxField">Do you want to use your 54 Cash Points?</span>
						<input
							type="checkbox"
							checked={this.state.useCashPoints}
							onChange={this.onCashPointsChange}
						/>
							<span className="checkmark"/>
					</label>
				</div>
				<div className="sectionTitleBold">Payment</div>
				<div className="inputContainer">
					<label className="container">
						<span className="checkBoxField">Credit Card</span>
						<input
							type="checkbox"
							onChange={() => this.setPaymentType('card')}
							checked={this.state.paymentType === 'card'}
						/>
						<span className="checkmark"/>
					</label>
				</div>
				<div className="inputContainer">
					<label className="container">
						<span className="checkBoxField">VippsGo</span>
						<input
							type="checkbox"
							onChange={() => this.setPaymentType('vippsGo')}
							checked={this.state.paymentType === 'vippsGo'}
						/>
						<span className="checkmark"/>
					</label>
				</div>
				<FixedFooter
					goBack={this.context.router.history.goBack}
					cost={selectedProduct ? selectedProduct.price : null}
				/>
			</div>
			)
	}
}

Cart.propTypes = {
	selectedProduct: PropTypes.object,
	cartProducts: PropTypes.array,
};

const mapStateToProps = state => ({
	cartProducts: state.cartProducts,
	selectedProduct: state.selectedProduct
});

export default connect(
  mapStateToProps,
  null
)(Cart);
