import React from 'react'
import Modal from 'react-modal'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import './styles.css'

Modal.setAppElement('#root')

const customStyles = {
	content : {
		top: '50%',
		left : '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform : 'translate(-50%, -50%)',
		borderRadius: 0,
		border: 'none',
	}
};

export default class ModalWindow extends React.Component {
	state = {
		tableNumber: null
	};

	onTableChange = (event) => this.setState({ tableNumber: event.target.value});

	onFormSubmit = () => this.props.setTable(this.state.tableNumber);

	render() {
		const { modalIsOpen, closeModal } = this.props;

		return (
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        overlayClassName="overlay"
      >

        <div className="modalHeading">Table number</div>
        <div className="modalTxt">Can be found in the corner of your table</div>
        <div className="inputTxt">Table number</div>
        <form className="formContainer">
          <input className="modalInput" onChange={this.onTableChange} />
          <Link to='/productsList'>
            <button
				disabled={!this.state.tableNumber}
				onClick={this.onFormSubmit}
				className="modalButton"
			>
	            Submit
            </button>
          </Link>
        </form>
      </Modal>
		)
	}
}

ModalWindow.propTypes = {
	closeModal: PropTypes.func,
  setTable: PropTypes.func,
  modalIsOpen: PropTypes.bool
};
