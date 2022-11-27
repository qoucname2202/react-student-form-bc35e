import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';

const initialState = {
	values: {
		id: '',
		fullName: '',
		phone: '',
		email: '',
	},
	errors: {
		id: '',
		fullName: '',
		phone: '',
		email: '',
	},
	valid: false,
};
class StudentForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			values: {
				id: '',
				fullName: '',
				phone: '',
				email: '',
			},
			errors: {
				id: '',
				fullName: '',
				phone: '',
				email: '',
			},
			valid: false,
		};
	}
	handelOnInputChange = e => {
		let newValue = this.state.values;
		let { id, value } = e.target;
		newValue[id] = value;
		// Get data-type input
		let type = e.target.getAttribute('data-type');
		// Errors
		let newErrors = this.state.errors;
		let messageError = '';
		if (value.trim() === '') {
			messageError = `Please enter input !`;
		} else {
			if (type === 'number') {
				let regex = /^[0-9]+$/;
				if (!regex.test(value) || value.length < 10 || value.length >= 11) {
					messageError = `Please enter a valid phone number.`;
				}
			} else if (type === 'email') {
				let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
				if (!regex.test(value)) {
					messageError = `Please enter a valid email address!`;
				}
			} else if (type === 'fullName') {
				let regex =
					/^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$/;
				if (!regex.test(value)) {
					messageError = `Please enter a valid FullName!`;
				}
			} else if (type === 'id') {
				let regex = /^[a-zA-Z0-9_ ]*$/;
				if (!regex.test(value)) {
					messageError = `Please enter a valid student code!`;
				}
			}
		}
		newErrors[id] = messageError;
		this.setState(
			{
				values: newValue,
				errors: newErrors,
			},
			() => {
				this.setState({
					valid: this.checkValid(),
				});
			},
		);
	};
	checkValid = () => {
		let { values, errors } = this.state;
		for (const key in errors) {
			if (errors[key] !== '' || values[key] === '') {
				return false;
			}
		}
		return true;
	};
	handelSubmit = e => {
		e.preventDefault();
		const id = document.getElementById('id').value;
		const name = document.getElementById('fullName').value;
		const phone = document.getElementById('phone').value;
		const email = document.getElementById('email').value;
		if (
			id.length === 0 ||
			name.length === 0 ||
			phone.length === 0 ||
			email.length === 0
		) {
			Swal.fire({
				position: 'center',
				icon: 'error',
				title: 'Please Fill All Required Field',
				showConfirmButton: false,
				timer: 1500,
			});
		}
		if (!this.checkValid()) {
			return;
		}
		const action = {
			type: 'ADD_USER',
			payload: this.state,
		};
		this.setState({
			...initialState,
		});
		this.props.dispatch(action);
	};
	render() {
		// console.log(this.props.user);
		return (
			<>
				<form onSubmit={this.handelSubmit}>
					<div className='card'>
						<div className='card-header bg-dark'>
							<h4 className='text-white'>Thông tin sinh viên</h4>
						</div>
						<div className='card-body'>
							<div className='row'>
								<div className='col-6'>
									<div className='form-group'>
										<label htmlFor='id' className='form-label'>
											Student code
										</label>
										<input
											type='text'
											data-type='id'
											id='id'
											className='form-control'
											placeholder='Eg. 18DTHB2'
											autoComplete='off'
											onInput={this.handelOnInputChange}
											value={this.state.values.id}
										></input>
										{this.state.errors.id !== '' && (
											<div className='alert alert-danger mt-2'>
												{this.state.errors.id}
											</div>
										)}
									</div>
								</div>
								<div className='col-6'>
									<div className='form-group'>
										<label htmlFor='fullName' className='form-label'>
											Fullname
										</label>
										<input
											type='text'
											data-type='fullName'
											id='fullName'
											className='form-control'
											placeholder='Eg. Nguyễn Văn A'
											autoComplete='off'
											onInput={this.handelOnInputChange}
											value={this.state.values.fullName}
										></input>
										{this.state.errors.fullName !== '' && (
											<div className='alert alert-danger mt-2'>
												{this.state.errors.fullName}
											</div>
										)}
									</div>
								</div>
								<div className='col-6'>
									<div className='form-group mt-3'>
										<label htmlFor='phone' className='form-label'>
											Phone number
										</label>
										<input
											data-type='number'
											type='text'
											id='phone'
											className='form-control'
											placeholder='Eg. 0917565841'
											autoComplete='off'
											onInput={this.handelOnInputChange}
											value={this.state.values.phone}
										></input>
										{this.state.errors.phone !== '' && (
											<div className='alert alert-danger mt-2'>
												{this.state.errors.phone}
											</div>
										)}
									</div>
								</div>
								<div className='col-6'>
									<div className='form-group mt-3'>
										<label htmlFor='email' className='form-label'>
											Email
										</label>
										<input
											type='text'
											data-type='email'
											id='email'
											className='form-control'
											placeholder='Eg. nguyenvana@gmail.com'
											autoComplete='off'
											onInput={this.handelOnInputChange}
											value={this.state.values.email}
										></input>
										{this.state.errors.email !== '' && (
											<div className='alert alert-danger mt-2'>
												{this.state.errors.email}
											</div>
										)}
									</div>
								</div>
							</div>
							<div className='row mt-4'>
								<div className='col-12'>
									<button
										type='submit'
										className='btn btn-success'
										id='btnAddStudent'
										disabled={!this.state.valid}
									>
										<i className='fa-solid fa-plus me-2'></i>
										Add Student
									</button>
								</div>
							</div>
						</div>
					</div>
				</form>
			</>
		);
	}
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(StudentForm);
