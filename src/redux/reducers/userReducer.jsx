import _ from 'lodash';
import Swal from 'sweetalert2';
const initialState = {
	userList: [],
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_USER': {
			let newState = _.cloneDeep(state);

			let userClone = _.cloneDeep(newState.userList);

			let idx = userClone.findIndex(
				user => user.values.id === action.payload.values.id,
			);
			if (idx === -1) {
				userClone.push(action.payload);
			} else {
				Swal.fire({
					position: 'center',
					icon: 'error',
					title: 'User id exits',
					showConfirmButton: false,
					timer: 1500,
				});
			}
			newState.userList = userClone;
			return { ...newState };
		}
		case 'DELETE_USER': {
			return state;
		}
		case 'UPDATE_USER': {
			return state;
		}
		default:
			return { ...state };
	}
};
