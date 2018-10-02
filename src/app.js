import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './stores/configureStore';
import { addExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import './firebase/firebase';
import './components/promises';


const store = configureStore();

store.dispatch(addExpenses({ description: 'Water Bill', amount:'4500' }));
store.dispatch(addExpenses({ description: 'Gas Bill', amount: '6000' }));
store.dispatch(setTextFilter('Water'));


// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000);

//console.log(store.getState());

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = (
    <div>xyz</div>
);

ReactDOM.render(jsx, document.getElementById('app'));