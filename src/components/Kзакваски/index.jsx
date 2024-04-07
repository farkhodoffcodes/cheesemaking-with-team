import React, { useState } from 'react'
import Header from '../Header'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Nav_menu from '../Nav'
import Footer from '../Footer'
import Sidebar from '../SideBar/Sidebar'
import Card from '../Card/Card'




const Kзакваски = () => {
  const [state, setState] = useState(false);
  const [data, setData] = useState(false);

  const changeIcon = () =>{
    setState(!state)
  }

  const changeIcon2 = () =>{
    setData(!data)
  }
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

      <Category__main_top>
        <Container>
          <div className='category__main_top_wrapper1'>
            <h2>Кисломолочные закваски</h2>
            <button className='category__filter--btn'>
              <img src="../images/icons/interface-essential-274 1.svg" alt="filter" />
              Фильтр
            </button>
          </div>

          <div className="category__main_top_wrapper2">
            <ol>
              <li onClick={changeIcon}><span>От дорогих к дешевым</span> 
                
                {state ?  <img src="../images/icons/arrows-diagrams-04 1 (1).svg" alt="ico" /> : <img src="../images/icons/arrows-diagrams-04 1.svg
                " alt="icon" />}
                {state ? <Nav_menu/> : state}
              </li>
              <li onClick={changeIcon2}>Тип продукта 
              {data ?  <img src="../images/icons/arrows-diagrams-04 1 (1).svg" alt="ico" /> : <img src="../images/icons/arrows-diagrams-04 1.svg
                " alt="icon" />}  
                {data ? <Nav_menu/> : data}
              </li>
              <li onClick={changeIcon}>Производитель
              {state ?  <img src="../images/icons/arrows-diagrams-04 1 (1).svg" alt="ico" /> : <img src="../images/icons/arrows-diagrams-04 1.svg
                " alt="icon" />}
              </li>
              <li onClick={changeIcon}>Цена
              {state ?  <img src="../images/icons/arrows-diagrams-04 1 (1).svg" alt="ico" /> : <img src="../images/icons/arrows-diagrams-04 1.svg
                " alt="icon" />}
                {state ? <Nav_menu/> : state}
              </li>
            </ol>

            <span>
              <input type="checkbox" />
              Показывать только товар в наличии
            </span>
          </div>
        </Container>
      </Category__main_top>

      <Category__main>
        <Container>
          <section className='category__main'>
            <div className="category__main--left">
              <Sidebar/>
            </div>
            <div className="category__main--right">
              <Card/>
            </div>
          </section>
        </Container>
      </Category__main>
      <Footer/>

    </div>
  )
}

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

const Container = styled.div`
    width: 85%;
    margin: 0 auto;
`

const Category__main_top = styled.div`

  .category__main_top_wrapper1{
    width:100%;
    display:flex;
    margin-top:30px;
    align-items:center;
    flex-direction:row;
    justify-content: space-between;
    margin-bottom:24px;

    h2{
      font-size: 28px;
      line-height:40px;
      color:#4E2D2D;
    }

    button{
      width:144px;
      height:44px;
      border-radius:5px;
      display:flex;
      align-items:center;
      gap:8px;
      justify-content:center;
      font-size:16px;
      line-height:24px;
      background-color:#4E2D2D;
      color:#fff;
      cursor:pointer;
      border:none;
      transition:all .3s ease-in;

      &:active{
        opacity:0.8;
        transition:all .3s ease-in;
      }

      i{
        color:#fff !important;
      }
    }
  }


  .category__main_top_wrapper2{
    display:flex;
    align-items:center;
    flex-direction:row;
    justify-content:space-between;
    width:100%;
    height:56px;
    background-color:#fd94391a;
    padding-left:30px;
    padding-right:20px;
    border:1px solid #fd943936;
    border-radius:5px;
    margin-bottom:30px;


    span{
      display:flex;
      align-items:center;
      flex-direction:row;
      gap:8px;
      font-size:16px;
      line-height:24px;
      color:#292929;

      input{
        width:20px;
        height:20px;
      }
    }


    ol{
      display:flex;
      align-items:center;
      gap:30px;
      list-style:none;

      li{
        display:flex;
        align-items:center;
        gap:5px;
        font-size:16px;
        line-height:24px;
        color:#292929;
        transition:all .3s ease-in;

        &:active{
          color:#FD9339;
          transition:all .3s ease-in;
        }
      }
    }
  }


`

const Category__main = styled.div`
  .category__main{
    display:flex;
    gap:20px;
    flex-direction:row;
  }
`

export default Kзакваски
