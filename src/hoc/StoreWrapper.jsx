import React from 'react';
import store from '../context/Store';

const StoreWrapper = Component => props => <Component store={store} {...props} />;
export default StoreWrapper;