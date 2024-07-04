import { createStore } from "redux";
import comBinReducer from "./mainReducers/rootReducer";


const store = createStore(comBinReducer)

export default store