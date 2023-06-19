import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const RequireAuth = ({children}) => {
    console.log("children =>",children);
    const isAuth = useSelector((store) => store.AuthData.isAuth)
    const location  = useLocation()
    console.log("Location in RequireAuth",location);
    if(false){
        return <Navigate to={"/login"} replace state={{data:location.pathname}}/>
    }

  return children
}

export default RequireAuth