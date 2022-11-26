import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import FormExercise from './components/FormExercise/index.jsx';
import { store } from './redux/configStore.jsx';
import 'normalize.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<FormExercise />
		</Provider>
	</React.StrictMode>,
);
