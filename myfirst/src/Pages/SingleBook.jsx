import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BookCard from "../Components/BookCard" 
import { getBooks } from '../Redux/AppReducer/actions';
const SingleBook = () => {
  const {id} = useParams()
  console.log("id =>",id);
  const books = useSelector((store) =>  store.AppData.books)
  const [currentData,setCurrentData] = useState({})
  console.log("books",books);
  const dispatch = useDispatch()
  useEffect(() => {
    if(id){
      const book = books.find((ele) =>  ele.id === Number(id))
      // console.log("books",book)
      book && setCurrentData(book)
    }
  },[id,books])

  useEffect(() => {
    if(books.length === 0){
      dispatch(getBooks())
    }
  },[books.length,dispatch])


  console.log("currentData =>",currentData)
  return (
    <div style={{width:"400px",margin:"10px 40px 0 30%"}}>
      <BookCard bookData={currentData}/>
    </div>
  )
}

export default SingleBook