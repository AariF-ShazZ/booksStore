import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const RequireAuth = ({children}) => {
    console.log("children =>",children);
    const isAuth = useSelector((store) => store.AuthData.isAuth)

    if(!isAuth){
        return <Navigate to={"/login"}/>
    }

  return children
}

export default RequireAuth