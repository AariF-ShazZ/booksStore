import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Books from './Books'
import SingleBook from "./SingleBook"
import EditBook from "./EditBook"
import Login from "./Login"
import RequireAuth from '../Components/RequireAuth'

const MainRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Books />} />
                <Route path="/books/:id" element={<RequireAuth>
                    <SingleBook />
                    </RequireAuth>} />
                <Route path="/books/:id/edit" element={<RequireAuth>
                    <EditBook />
                    </RequireAuth>}/>
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<h3>Page Not Found</h3>} />
            </Routes>
        </div>
    )
}

export default MainRoutes