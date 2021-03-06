import { combineReducers } from "redux";

import userReduser from "./user/user.reducer";
import cartReduser from "./cart/cart.reducer";
import directoryReduser from "./directory/directory.reducer";
import shopReducer from "./collection/shop.reducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReduser,
  cart: cartReduser,
  directory: directoryReduser,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
