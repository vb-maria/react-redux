import firebase from "../../firebase/firebase_config"

export const loginUser = (email, password) => {
 
    return async function(dispatch){
        const user = await firebase.login(email, password).catch(err => console.log(err));
        
        if(user){
            
            dispatch({type: "LOGIN_USER", payload: user});
            return user;
        }        
    }
 

}