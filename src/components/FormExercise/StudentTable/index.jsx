import React, { Component } from 'react';
import { connect } from 'react-redux';

class StudentTable extends Component {
	render() {
		let { userList } = this.props.userList;
		return (
			<div className='mt-2'>
				<table className='table'>
					<thead className='bg-dark text-white'>
						<tr>
							<th>Mã SV</th>
							<th>Họ tên</th>
							<th>Số điện thoại</th>
							<th>Email</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{userList && userList.length > 0 ? (
							userList.map((user, index) => {
								let { id, fullName, phone, email } = user.values;
								return (
									<tr key={index}>
										<th>{id}</th>
										<td>{fullName}</td>
										<td>{phone}</td>
										<td>{email}</td>
										<td>
											<button
												className='btn btn-danger mx-1'
												onClick={() => {
													const action = {
														type: 'DELETE_USER',
														payload: id,
													};
													this.props.dispatch(action);
												}}
											>
												<i className='fa-solid fa-trash'></i>
											</button>
											<button className='btn btn-warning mx-2'>
												<i className='fa-solid fa-user-pen'></i>
											</button>
										</td>
									</tr>
								);
							})
						) : (
							<tr>
								<th
									colSpan={5}
									className='text-center'
									style={{ color: 'gray' }}
								>
									Empty data
								</th>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	userList: state.userReducer,
});

export default connect(mapStateToProps)(StudentTable);
