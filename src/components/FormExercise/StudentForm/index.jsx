import React, { Component } from 'react';
import { connect } from 'react-redux';

class StudentForm extends Component {
	render() {
		return (
			<>
				<form>
					<div className='card'>
						<div className='card-header bg-dark'>
							<h4 className='text-white'>Thông tin sinh viên</h4>
						</div>
						<div className='card-body'>
							<div className='row'>
								<div className='col-6'>
									<div className='form-group'>
										<label htmlFor='id' className='form-label'>
											Mã SV
										</label>
										<input
											type='text'
											id='id'
											className='form-control'
											placeholder='Eg. 1234'
											autoComplete='off'
										></input>
										{/* <div className='alert alert-danger mt-2'></div> */}
									</div>
								</div>
								<div className='col-6'>
									<div className='form-group'>
										<label htmlFor='fullName' className='form-label'>
											Họ tên
										</label>
										<input
											type='text'
											id='fullName'
											className='form-control'
											placeholder='Eg. Nguyễn Văn A'
											autoComplete='off'
										></input>
										{/* <div className='alert alert-danger mt-2'></div> */}
									</div>
								</div>
								<div className='col-6'>
									<div className='form-group mt-3'>
										<label htmlFor='phone' className='form-label'>
											Số điện thoại
										</label>
										<input
											data-regex='^[0-9]+$'
											data-type='number'
											type='text'
											id='phone'
											className='form-control'
											placeholder='Eg. 0917565841'
											autoComplete='off'
										></input>
										{/* <div className='alert alert-danger mt-2'></div> */}
									</div>
								</div>
								<div className='col-6'>
									<div className='form-group mt-3'>
										<label htmlFor='email' className='form-label'>
											Email
										</label>
										<input
											type='text'
											id='email'
											className='form-control'
											placeholder='Eg. nguyenvana@gmail.com'
											autoComplete='off'
										></input>
										{/* <div className='alert alert-danger mt-2'></div> */}
									</div>
								</div>
							</div>
							<div className='row mt-4'>
								<div className='col-12'>
									<button
										type='submit'
										className='btn btn-success'
										id='btnAddStudent'
									>
										Thêm sinh viên
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
