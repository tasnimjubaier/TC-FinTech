 import globalHook from 'use-global-hook';

const initialState = {
    token: localStorage.getItem('user')
}
  
const actions = {
    save: (store, token) => {
        localStorage.setItem('user', JSON.stringify(token))
        store.setState({ token : JSON.stringify(token) });
    },
    delete: (store) => {
        localStorage.removeItem('user')
        store.setState({ token : null })
    }
}
  
export const useGlobal = globalHook(initialState, actions);