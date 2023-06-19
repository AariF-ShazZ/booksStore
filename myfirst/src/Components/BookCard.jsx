import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const BookCard = ({ bookData }) => {
  // console.log("props =>",bookData)
  const navigate = useNavigate()
  return (
    <div style={{ border: "3px solid red", margin: "5px", padding: "3px 5px" }}>
      <Link to={`/books/${bookData.id}`}>
        <div >
          <img style={{ width: "100%" }} src='https://img.etimg.com/thumb/width-1200,height-900,imgsize-38708,resizemode-75,msid-99822535/top-trending-products/books/best-psychology-books-to-enrich-your-learning-curve.jpg' alt='do not show' />
        </div>
      </Link>


      <div>{bookData.id}</div>
      <div>{bookData.book_name}</div>
      <div>{bookData.category}</div>
      <div>{bookData.release_year}</div>
      <button onClick={() => navigate(`/books/${bookData.id}/edit`)  }>Edit</button>
    </div>
  )
}

export default BookCard