import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from '../redux/reducers'

const initialStore = {}
export const store = createStore(
    rootReducer,
    initialStore,
    composeWithDevTools(applyMiddleware(logger, thunk))
)