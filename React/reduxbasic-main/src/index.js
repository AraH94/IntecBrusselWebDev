import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		{/* Components using Redux have to be wrapped in the Redux Provider (the purple cloud in HTML/CSS) and pass the {store} as a prop */}
		{/* NOTE: 
		import { Provider } from 'react-redux';
		import store from './Store'; 
		*/}
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode >
);

reportWebVitals();
