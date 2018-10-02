'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _AppRouter = require('./routers/AppRouter');

var _AppRouter2 = _interopRequireDefault(_AppRouter);

var _configureStore = require('./stores/configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

var _expenses = require('./actions/expenses');

var _filters = require('./actions/filters');

var _expenses2 = require('./selectors/expenses');

var _expenses3 = _interopRequireDefault(_expenses2);

require('normalize.css/normalize.css');

require('./styles/styles.scss');

require('./firebase/firebase');

require('./components/promises');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _configureStore2.default)();

store.dispatch((0, _expenses.addExpenses)({ description: 'Water Bill', amount: '4500' }));
store.dispatch((0, _expenses.addExpenses)({ description: 'Gas Bill', amount: '6000' }));
store.dispatch((0, _filters.setTextFilter)('Water'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000);

//console.log(store.getState());

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

var jsx = _react2.default.createElement(
    'div',
    null,
    'xyz'
);

_reactDom2.default.render(jsx, document.getElementById('app'));
