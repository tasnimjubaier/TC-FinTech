 import globalHook from 'use-global-hook';

const initialState = {
    token: localStorage.getItem('user')
}
  
const actions = {
    save: (store, token) => {
        localStorage.setItem('user', token)
        store.setState({ token : token });
    },
    delete: (store) => {
        localStorage.removeItem('user')
        store.setState({ token : null })
    }
}
  
export const useGlobal = globalHook(initialState, actions);