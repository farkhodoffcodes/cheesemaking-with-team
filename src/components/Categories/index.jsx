import React from 'react'
import Header from '../Header'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import Sidebar from '../SideBar/Sidebar'
import Card from '../Card/Card'

const Category = () => {
  return (
    <div>
      <Header/>
      <Category_top>
        <Container>
            <ol className='category--top__menu'>
                <Link className='links' to={"/главная"}><li className='category--top__menu__item'>Главная <i class="fa-solid fa-chevron-right"></i></li></Link>
                <Link className='links' to={"/ингредиенты"}><li className='category--top__menu__item'>Ингредиенты <i class="fa-solid fa-chevron-right"></i></li></Link>
               <Link className='links' to={"/Кисломолочные закваски"}> <li className='category--top__menu__item' id='category--top__menu__item-active'>Кисломолочные закваски</li></Link>
            </ol>
        </Container>
      </Category_top>

      <Category_main>
        <Container>
            <section className='category__main'>
                <div className="category__main--left">
                    <Sidebar/>
                </div>
                <div className="category__main--right">
                    <div className="category__main--right--top">
                        <h2 className='category--rigth__heading'>Кисломолочные закваски</h2>

                        <button className='category__filter--btn'>
                            <img src="../images/icons/category-filter-icon.svg" alt="filter" />
                            Фильтр
                        </button>
                    </div>
                    <div className="category__main--right-product">
                        <Card/>
                    </div>
                </div>
            </section>
        </Container>
      </Category_main>
      <Footer/>
    </div>
  )
}

export default Category

const Container = styled.div`
    width: 85%;
    margin: 0 auto;
`

const Category_top = styled.div`

    .category--top__menu{
       display:flex; 
       list-style:none;
       align-items:center;
       margin-top:20px;
       gap:20.17px;

       .category--top__menu__item{
        display:flex;
        align-items:center;
        gap:8px;
        font-size:14px;
        line-height:22px;
        color:#808080;
        cursor:pointer;

            i{
                width:3.67px;
                height:7.33px;
                color:#808080;
                margin-top:-5px
            }
       }

       #category--top__menu__item-active{
        color:#FD9339;

            i{
                color:#FD9339;
            }
       }
    }
    
`


const Category_main = styled.div`
    .category__main{
        display:flex;
        gap:20px;
        margin-top:20px;

        .category__main--left{
            width:30%;
            height:797px;
        }


        .category__main--right{
            width:70%;
            height:1248px;
            margin-bottom:80px;
            .category__main--right--top{
                width:880px;
                display:flex;
                align-items:center;
                justify-content: space-between;

                .category--rigth__heading{
                    color:#4E2D2D;
                    font-size:28px;
                    line-height:40px;
                }

                .category__filter--btn{
                    display:flex;
                    align-items:center;
                    gap:8px;
                    padding:10px 20px 10px 12px; 
                    background-color:transparent;
                    border-radius:5px;
                    border:1px solid black;
                    cursor:pointer;
                    font-size:16px;
                    line-height:24px;
                    color:#000;
                }

            }
        }
    }

    
`
