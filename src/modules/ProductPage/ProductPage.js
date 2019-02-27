import React from 'react'
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import FixedFooter from '../../components/FixedFooter/FixedFooter'
import { FaInfoCircle } from 'react-icons/fa'
import Loader from '../../components/Loader/Loader'
import { getProduct } from '../../redux/thunks/products'
import { addToCart } from '../../redux/actions/products'
import './styles.css'

class ProductPage extends React.Component{
	static contextTypes = {
		router: PropTypes.object,
	}

	componentDidMount() {
		this.props.getProduct(this.props.match.params.id);
	}

	addProductToCart = () => this.props.addToCart(this.props.product);

	render() {
		const { product } = this.props;
		const tableSaved = JSON.parse(localStorage.getItem('table'));

		return (product
			? <div className="productPage">
				<div>
					<div>
						<img className="imageProd" src={product.image} alt={product.name} />
					</div>
					<div className="infoBlock">
					<div className="descriptionBlock">
						<div className="prodName">{product.name}</div>
						<div className="prodDescription">{product.description}</div>
					</div>
					<div>
						<div className="infoTitle">Meat type</div>
						<input disabled value={product.meatType} className="inputStyle" />
						<div className="infoTitle">Add extra</div>
						<select className="selectStyle">
							<option defaultValue>Select</option>
							{product.extra.map((item, idx) => <option key={idx} value={item}>{item}</option>)}
						</select>
					</div>
					<div className="bottomInfo">
						{product.allergens && <div className="healthInfo">
							<FaInfoCircle color='#7c7c7c' size={14} />
							<div className="tooltip">
								<span>Allergens</span>
								<span className="tooltiptext">{product.allergens}</span>
							</div>
						</div>}
						<div className="price">{product.price},-</div>
					</div>
					<button
						className="addToCartBtn"
						onClick={this.addProductToCart}
					>
						Add to table {this.props.clientTable} cart
					</button>
					</div>
				</div>
				<FixedFooter
					goBack={this.context.router.history.goBack}
					table={this.props.clientTable ? this.props.clientTable : tableSaved}
					cost={product.price}
				/>
			</div>
			:<Loader />
		)
	}
}

ProductPage.propTypes = {
  getProduct: PropTypes.func,
  addToCart: PropTypes.func,
  product: PropTypes.object,
}

const mapStateToProps = state => ({
	product: state.selectedProduct,
  clientTable: state.clientTable
});

const mapDispatchToProps = dispatch => ({
  getProduct: (id) => dispatch(getProduct(id)),
  addToCart: (product) => dispatch(addToCart(product))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductPage);

