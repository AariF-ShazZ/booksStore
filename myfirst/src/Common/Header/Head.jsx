import React from 'react'
import './Header.css'

const Head = () => {
  return (
    <>
        <section className='head'>
            <div className="container d_flex">
                <div className="left row">
                    <i className='fa fa-phone'></i>
                    <label >+1000 502 487</label>
                    <i className='fa fa-envelope'></i>
                    <label >india@gmail.com</label>
                </div>
                <div className="right row RText">
                    <label>Theme FAQ's</label>
                    <label>Need Helps</label>
                    <span></span>
                </div>
            </div>
        </section>
    </>
  )
}

export default Head
