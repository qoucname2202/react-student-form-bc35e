import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import StudentForm from './StudentForm';
import StudentTable from './StudentTable';
class FormExercise extends Component {
	render() {
		return (
			<Fragment>
				<Header />
				<div className='container mt-4'>
					<StudentForm />
					<StudentTable />
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(FormExercise);
