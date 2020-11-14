import {combineReducers, createStore,applyMiddleware} from "redux";
import ReduxThunk from "redux-thunk";
import {reducer as formReducer} from "redux-form" 
const reducers=combineReducers({
    form:formReducer
})

const store=createStore(reducers,{},applyMiddleware(ReduxThunk))


export default store