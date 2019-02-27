import React from 'react';
import { getProducts, } from '../../redux/thunks/products'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import FixedFooter from '.././../components/FixedFooter/FixedFooter'
import './styles.css'

class ProductsList extends React.Component {
	static contextTypes = {
		router: PropTypes.object,
	};

	componentDidMount() {
		this.props.getProducts()
	}

	renderProduct = (product) => (
		<Link className="linkWithoutStyle" to={`/product/${product.id}`} key={product.id}>
			<div className="productContainer" >
				<div className="infoContainer">
					<div className="name">{product.name}</div>
					<div className="description">{product.description}</div>
					<div>
						<span className="price">{product.price},-</span>
					{product.soldOut && <span className="soldOut">Sold Out</span>}
					</div>
				</div>
				<div>
					<img src={product.image} className="imageContainer" alt={product.name} />
				</div>
			</div>
		</Link>
	);

	renderProductList = (products) => {
		return (
			<div>
				{products.map((item) => this.renderProduct(item))}
			</div>
		)
	};

	render() {
		const tableSaved = JSON.parse(localStorage.getItem('table'));
		return (
			<div>
				<div className="productListContainer">
					<div className="pageTitle">Starters</div>
					{this.renderProductList(this.props.products)}
				</div>
				<FixedFooter
					table={this.props.clientTable ? this.props.clientTable : tableSaved}
					goBack={this.context.router.history.goBack}
				/>
			</div>
		)
	}
}

ProductsList.propTypes = {
  getProducts: PropTypes.func,
  products: PropTypes.array,
};

const mapStateToProps = state => ({
	products: state.products,
  clientTable: state.clientTable
});

const mapDispatchToProps = dispatch => ({
	getProducts: () => dispatch(getProducts()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductsList);
