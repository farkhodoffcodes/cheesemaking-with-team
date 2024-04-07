import React from 'react'
// import { Link } from 'react-router-dom'
// import styled from 'styled-components'
import Header from '../Header'
import Sidebar from '../SideBar/Sidebar'
import Footer from '../Footer'


const Reviews = () => {
    return (
        <div>
            <Header/>
            <div className="reviews-wrapper">
                <Sidebar/>
                <h2>отзывы покупателей</h2>
                <div className="reviews-comment">
                    <img src="../images/Reviews Form.png" alt="" />
                    <img src="../images/Reviews Form.png" alt="" />
                </div>
                <div className="reviews-comment-two">
                    <img src="../images/Reviews Form.png" alt="" />
                    <img src="../images/Reviews Form.png" alt="" />
                </div>
                
            </div>
            <Footer/>
        </div>
    )
}

export default Reviews