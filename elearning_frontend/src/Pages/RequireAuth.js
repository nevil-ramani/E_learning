

import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import loginStore from '../stores/loginStore'


const RequireAuth = (props) => {

    const store = loginStore();

    // useEffect(()=>{
    //   if(store.loggedIn === null){
    //     // store.checkAuth();
    //   }
    // },[])
    
    console.log(store.loggedIn)
    // console.log(store)

    if(!store.loggedIn){
        return ( <div className="mt-3 space-y-2 lg:hidden md:hidden">
        <Link
            to="/Login"
            className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
        >
            Sign in
        </Link>
        <Link
            to="/Registration"
            className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
        >
            Sign up
        </Link>
    </div>)
    }else{return (
      <div>store.email</div>
    )}

  
}

export default RequireAuth