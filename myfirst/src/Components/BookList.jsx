import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getBooks } from '../Redux/AppReducer/actions'
import styled from 'styled-components'
import BookCard from './BookCard'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { Box, Pagination } from "@mui/material"
const BookList = () => {
    const books = useSelector((store) => store.AppData.books)
    const [products,setProducts] = useState([])
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()
    const location = useLocation()
    let pageSize = 6
    // console.log("location =>", location);
    // const [currentPage, setCurrentPage] = useState(1)
    const [currentPage, setCurrentPage] = useState({
        count:0,
        from:0,
        to:pageSize
    })
    // const recordPerPage = 6
    // const lastIndex = currentPage * recordPerPage
    // const firstIndex = lastIndex - recordPerPage
    // const record = books.slice(firstIndex, lastIndex)
    // const npage = Math.ceil(books.length / recordPerPage)
    // const numbers = [...Array(npage + 1).keys()].slice(1)
    useEffect(() => {
        if (location || books.length === 0) {
            const sortBy = searchParams.get("sort")
            const getBookParams = {
                params: {
                    category: searchParams.getAll("category"),
                    _sort: sortBy && "release_year",
                    _order: sortBy
                }
            }

            dispatch(getBooks(getBookParams))
        }
    }, [dispatch, books.length, location.search])

    // function prePage() {
    //     if (currentPage !== 1) {
    //         setCurrentPage(currentPage - 1)
    //     }
    // }
    // function changeCPage(n) {
    //     setCurrentPage(n)
    // }
    // function nextPage() {
    //     if (currentPage !== lastIndex) {
    //         setCurrentPage(currentPage + 1)
    //     }
    // }



    useEffect(() => {
        service.getData({from:currentPage.from,to:currentPage.to}).then(res => {
            // console.log(res);
            setCurrentPage({...currentPage,count:res.count})
            setProducts(res.data)
        })
    },[books,currentPage.from,currentPage.to])

    const service = {
        getData:({from,to}) => {
            const data = books.slice(from,to)
            return new Promise((res,rej) => {
                res({
                    count:books.length,
                    data:data
                })
            })
        }
    }

   const  hanldeChange = (e, page) => {
     const from = (page - 1)  * pageSize
     const to = (page - 1)  * pageSize+pageSize

     setCurrentPage({...currentPage, from:from, to:to})
   }
    return (
        <>
            {
                products.length > 0 && products.map((ele) => {
                    return <BookCardWrapper key={ele.id}>
                       
                        <BookCard bookData={ele} />
                    </BookCardWrapper>
                })
            }
            {/* <div styled={{display: "flex"}}>
                <ul styled={{display:"flex",flexDiraction:"row"}}>
                    <li >
                        <a href="#" onClick={prePage}>Prev</a>
                    </li>
                    {
                        numbers.map((n, i) => (
                            <li key={i}>
                                <a href="#" onClick={() => changeCPage(n)}>{n}</a>
                            </li>
                        ))
                    }
                    <li>
                        <a href="#" onClick={nextPage}>Next</a>
                    </li>
                </ul>
            </div> */}

            <Box display={"flex"} alignItems={"center"} justifyContent={"center"}  sx={{margin:"30px 0px"}}  >
              <Pagination count={Math.ceil(currentPage.count / pageSize)} color="secondary" onChange={hanldeChange} />
            </Box>
        </>
    )
}

const BookCardWrapper = styled.div`
width:300px
`

export default BookList