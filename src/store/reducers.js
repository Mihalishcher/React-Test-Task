import { combineReducers } from 'redux';
import employeesList from './employessList/reducers';

const rootReducer = combineReducers({ employeesList });

export default rootReducer;
