import React, { Component } from 'react';

export default class Header extends Component {
	render() {
		return (
			<>
				<nav
					className='navbar navbar-expand-lg'
					style={{ backgroundColor: '#000' }}
				>
					<div className='container-fluid'>
						<a className='navbar-brand' href='#logo'>
							<img src='./img/logo.png' alt='' style={{ height: 50 }} />
						</a>
						<button
							className='navbar-toggler'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#navbarSupportedContent'
							aria-controls='navbarSupportedContent'
							aria-expanded='false'
							aria-label='Toggle navigation'
						>
							<span className='navbar-toggler-icon' />
						</button>
						<div
							className='collapse navbar-collapse'
							id='navbarSupportedContent'
						>
							<div className='navbar-nav me-auto mb-2 mb-lg-0'></div>
							<form className='d-flex' role='search'>
								<input
									className='form-control me-2'
									type='search'
									placeholder='Search'
									aria-label='Search'
								/>
								<button
									className='btn btn-outline-secondary text-white'
									type='submit'
								>
									Search
								</button>
							</form>
						</div>
					</div>
				</nav>
			</>
		);
	}
}
