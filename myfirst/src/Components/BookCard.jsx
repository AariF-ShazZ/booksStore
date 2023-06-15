import React from 'react'

const BookCard = ({bookData}) => {
    // console.log("props =>",bookData)
  return (
    <div style={{border:"3px solid red",margin:"5px",padding:"3px 5px"}}>
        <div >
            <img  style={{width:"100%"}} src='https://img.etimg.com/thumb/width-1200,height-900,imgsize-38708,resizemode-75,msid-99822535/top-trending-products/books/best-psychology-books-to-enrich-your-learning-curve.jpg' alt='do not show'/>
        </div>

        <div>{bookData.id}</div>
        <div>{bookData.book_name}</div>
        <div>{bookData.category}</div>
        <div>{bookData.release_year}</div>
    </div>
  )
}

export default BookCard