import React from 'react'
import { Switch, Route } from "react-router-dom";
import MainPage from './modules/Main/MainPage'
import ProductsList from "./modules/ProductsList/ProductsList";
import ProductPage from "./modules/ProductPage/ProductPage"
import Cart from './modules/Cart/Cart'

export default () => (
	<Switch>
		<Route exact path="/" component={MainPage} />
		<Route path="/productsList" component={ProductsList} />
		<Route path="/product/:id" component={ProductPage} />
		<Route path="/cart" component={Cart} />
	</Switch>
);
