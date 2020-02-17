import { createStore } from 'redux';
import { combineForms } from 'react-redux-form';

const initialUser = {
    firstName: '',
    lastName: '',
};

export const store = createStore(combineForms({
    user: initialUser,
}));
