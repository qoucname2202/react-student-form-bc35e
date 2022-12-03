import _ from 'lodash';
import Swal from 'sweetalert2';
const initialState = {
	userList: [],
	newUserList: [],
};

const removeAccents = str => {
	var from =
			'àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñçýỳỹỵỷ',
		to =
			'aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyy';
	for (var i = 0, l = from.length; i < l; i++) {
		str = str.replace(RegExp(from[i], 'gi'), to[i]);
	}

	str = str
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9-]/g, '-')
		.replace(/-+/g, '-');
	return str;
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_USER': {
			let newState = { ...state };
			let newUser = [...newState.userList];
			let idx = newUser.findIndex(user => user.id === action.payload.id);
			if (idx === -1) {
				newUser.push(action.payload);
			} else {
				Swal.fire({
					position: 'center',
					icon: 'error',
					title: 'User id exits',
					showConfirmButton: false,
					timer: 1500,
				});
			}
			newState.userList = newUser;
			return { ...newState };
		}
		case 'DELETE_USER': {
			let newState = _.cloneDeep(state);
			let userClone = _.cloneDeep(newState.userList);

			let idx = userClone.findIndex(user => user.id === action.payload);
			if (idx !== -1) {
				userClone.splice(idx, 1);
			}
			newState.userList = userClone;
			return { ...newState };
		}
		case 'UPDATE_USER': {
			return state;
		}
		case 'FILTER_USER': {
			let newState = _.cloneDeep(state);
			newState.newUserList = _.cloneDeep(newState.userList);
			let userClone = _.cloneDeep(newState.userList);
			let userFilterByName = userClone.filter(user =>
				removeAccents(user.fullName).includes(removeAccents(action.payload)),
			);
			if (action.payload === '') {
				newState.userList = [...state.newUserList];
			} else {
				newState.userList = userFilterByName;
			}
			return { ...newState };
		}
		default:
			return { ...state };
	}
};
