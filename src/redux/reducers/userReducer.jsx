const initialState = {
	userList: [
		{
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
		},
	],
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_USER': {
			console.log(action.payload);
			return state;
		}
		case 'DELETE_USER': {
			return state;
		}
		case 'UPDATE_USER': {
			return state;
		}
		default:
			return state;
	}
};
