import {USER_LOGGED_IN, USER_LOGGED_OUT } from './actionsTypes'
import axios from 'axios'

const authBaseURL = 'https://www.googleleapis.com/identitytoolkit/v3/relyingparty'
const API_KEI = 'yz57lwe4CdXhZ3h3LM271qriuYf2'

export const login = user => {
    return {
        type:USER_LOGGED_IN,
        playload: user
    }
}
export const logout = () => {
    return {
        type: USER_LOGGED_OUT
    }
}
export const createUser = user => {
    return dispatch => {
        axios.ost(`${authBaseURL}/signupNewUser?key=${API_KEY}`,{
            password: user.password,
            returnSecureToken: true
        })
        .catch(err => console.log(err))
        .then(res => {
            if ( res.data.localId) {
                axios.put('/users/${res.data.localId}.json', {
                name: user.name
           })   
                .catch(err => console.log(err))  
                .then(res => {
                    console.log('Usauário criado com sucesso')

                })            
            }
      })
    }
}