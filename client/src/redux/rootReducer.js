import { combineReducers } from "redux";

import orderReducer from "../redux/Order/order.reducer";
import customerReducer from "../redux/Customer/customer.reducer";
import vanReducer from "../redux/Van/van.reducer";
import vendorReducer from "../redux/Vendor/vendor.reducer";
import timerReducer from "../redux/EditTimer/editTimer.reducer";

const rootReducer = combineReducers({
	orderState: orderReducer,
	customerState: customerReducer,
	vanState: vanReducer,
	vendorState: vendorReducer,
	timerState: timerReducer,
});

export default rootReducer;
