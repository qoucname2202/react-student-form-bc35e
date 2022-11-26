import React, { Component } from 'react';
import { connect } from 'react-redux';

class StudentTable extends Component {
	render() {
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
						<tr>
							<th>1</th>
							<td>Larry the Bird</td>
							<td>0917565841</td>
							<td>nguyenvana@gmail</td>
							<td>
								<button className='btn btn-danger mx-1'>
									<i className='fa-solid fa-trash'></i>
								</button>
								<button className='btn btn-warning mx-2'>
									<i className='fa-solid fa-user-pen'></i>
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(StudentTable);
