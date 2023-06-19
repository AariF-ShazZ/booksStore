import React from 'react'
import { Link } from 'react-router-dom'

const Search = () => {
  return (
    <>
      <section className='search'>
        <div className="container c_flex">
          <div className="logo width">
            <h1><i>shopping</i><span><u>Hub</u></span></h1>
            {/* <img src="https://img.freepik.com/free-vector/flat-design-cross-country-design-logo_23-2149481837.jpg" alt="" /> */}
          </div>
          <div className="search-box f_flex">
            <i className='fa fa-search'></i>
            <input type="text" placeholder='Search......'/>
            <span>All Category</span>
          </div>
          
          <div className="icon f_flex width">
            <div className="cart">
            <i className="fa fa-user icon_circle"></i>
              <Link to={"/cart"}>
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span>0</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search