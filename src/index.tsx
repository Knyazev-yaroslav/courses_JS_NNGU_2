import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { store } from './store/rootReducer';

// const initialState = {
//   data: [],
//   info: 'My Store',
// };

// const myReducer = (state: any = initialState, action: any) => {
//   switch (action.type) {
//     case 'SET_DATA':
//       return { ...state, data: action.payload };
//     default:
//       return state;
//   }
// };

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
