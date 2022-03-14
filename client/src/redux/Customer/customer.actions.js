import {
	SET_CUSTOMER,
	DELETE_CUSTOMER,
} from "../../redux/Customer/customer.types";

export const setCustomer = (customerId) => ({
	type: SET_CUSTOMER,
	payload: customerId,
});

export const deleteCustomer = () => ({
	type: DELETE_CUSTOMER,
});
