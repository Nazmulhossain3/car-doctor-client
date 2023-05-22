import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/Firebase.config";

 export const AuthContext = createContext()
 const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()


    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
        
    }

    const signIn = (email,password)=> {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn = ()=> {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const logOut = ()=> {
        setLoading(true)
        return signOut(auth)
    }

   
    useEffect(()=>{

   const unsubscribe = onAuthStateChanged(auth,currentUser =>{
    setUser(currentUser)
    setLoading(false)
    console.log('current use', currentUser)
        if(currentUser && currentUser.email){
            const loggedUser = {
                user : currentUser.email
            }
            fetch('https://car-doctor-server-nine-cyan.vercel.app/jwt',{
                method : 'POST',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(loggedUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log("jwt response",data)
                // set local storage not best option

                localStorage.setItem('car-access-token', data.token)
                
            })
        }
        else{
            localStorage.removeItem('car-access-token')

        }


   })

   return ()=> {
   return unsubscribe();
   }
   
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;