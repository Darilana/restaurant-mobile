import React, { Component } from 'react';
import { FiBell } from 'react-icons/fi';
import { FaFish, FaRegCalendarCheck, FaReceipt, FaRegClock, FaUser } from 'react-icons/fa';
import ModalWindow from '../../components/Modal/ModalWindow'
import { setClientTableAction } from '../../redux/actions/products'
import connect from 'react-redux/es/connect/connect'
import PropTypes from 'prop-types'
import './styles.css';


class MainPage extends Component {
  state = {
    isModalOpen: false
  };

  onDineInClick = () => this.setState({ isModalOpen: true });

  onModalClose = () => this.setState({ isModalOpen: false });

  setClientTable = (value) => {
  	this.props.setClientTable(value);
	  localStorage.setItem('table', JSON.stringify(value));
  }

  render() {
    return (
      <div className="App">
        <header className="header">
	        <FaUser color='#000' size={20} className="userIcon" />
        </header>
        <div className="infoBlockContainer">
          <div className="titleBlock">
            <span className="title">Sumo Restaurant</span>
            <span className="info">Info</span>
          </div>
          <div className="titleBlock">
            <div className="hours">
              <FaRegClock color="#fff" size="20px" className="iconInfoBlock" />
              <span className="hours">Today 10:30 - 21:00</span>
            </div>
            <div className="hours">
              <FiBell color="#fff" size="16px" className="iconInfoBlock" />
              <span className="hours">30 min</span>
            </div>
          </div>
        </div>
        <div className="btnContainer">
		<button className="mainBtn" onClick={this.onDineInClick}>
		  <FaFish size={30} className="btnIcon"/>
		  <span className="btnText">Dine-in</span>
		</button>
          <button className="mainBtn">
            <FaRegCalendarCheck size={30} className="btnIcon" />
            <span className="btnText">Booking</span>
          </button>
          <button className="mainBtn">
            <FaReceipt size={30} className="btnIcon" />
            <span className="btnText">Orders</span>
          </button>
        </div>
        <ModalWindow
	        modalIsOpen={this.state.isModalOpen}
            closeModal={this.onModalClose}
            setTable={this.setClientTable}
        />
      </div>
    );
  }
}

MainPage.propTypes = {
  setClientTable: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  setClientTable: tableNum => dispatch(setClientTableAction(tableNum)),
});

export default connect(
  null,
  mapDispatchToProps
)(MainPage);
