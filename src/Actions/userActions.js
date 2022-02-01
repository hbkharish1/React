import axios from "axios"
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS } from "./userTypes"

export const fetchUsersRequest = () => {
    return {
        type:FETCH_USERS_REQUEST
    }
}
export const fetchUsersSuccess = users => {
    return {
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
}
export const fetchUsersFailure = error => {
    return {
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}
export const fetchUsers = () => {
    return(dispatch) => {
        dispatch(fetchUsersRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users =response.data
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchUsersFailure(errorMsg))

        })
    }
}
export const UpdateUser =(id,name,email) =>{
    return() =>{
        axios('https://jsonplaceholder.typicode.com/users/',{id}, {
        method: 'PUT',
        body: JSON.stringify({
        id: {id},
        name: {name},
        email: {email},
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
    }
}
export const DeleteUser =(id) =>{
    return()=>{
        axios('https://jsonplaceholder.typicode.com/users/',{id}, {
        method: 'DELETE',
});
    }
}
export const CreateUser =(name,email) =>{
    return()=>{
        axios('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify({
        name: {name},
        email: {email},
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
    }
}