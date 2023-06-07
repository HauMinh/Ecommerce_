import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../views/Cart/CartSlice';
// import userReducer from '../components/Form/Login/LoginForm/userSlice';

const rootReducer = {
    cart: cartReducer
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;