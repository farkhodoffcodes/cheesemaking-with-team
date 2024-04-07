import React from "react";
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Header from "../Header";
import Sidebar from "../SideBar/Sidebar";
import Footer from "../Footer"



const Receipts = () => {
    return (
        <div><Header/>
            <ReceiptDetails>
            <Container>
                <ul>
                    <li>
                        <Link to={'/'}>Главная<i class="fa-solid fa-angle-right"></i></Link>
                    </li>
                    <li>
                        <Link to={'../receipts'}>Рецепты<i class="fa-solid fa-angle-right"></i></Link>
                    </li>
                    <li>
                        <Link to={'../receiptdetails'}>Рецепт сыра Бри<i class="fa-solid fa-angle-right"></i></Link>
                    </li>
                </ul>
            </Container>    
        </ReceiptDetails>
          <div className="receipts">
          <Sidebar/> 
           <h2>рецепты сыров</h2>
           <div className="receipts-type">
            <ol>
              <li>
                <img src="../images/Receipes Card (1).png" alt="" />
              </li>
              <li>
                <img src="../images/Receipes Card (2).png" alt="" />
              </li>
              <li>
                <img src="../images/Receipes Card.png" alt="" />
              </li>
            </ol>
            <ol className="receipts-type-two">
              <li>
                <img src="../images/Receipes Card.png" alt="" />
              </li>
              <li>
                <img src="../images/Receipes Card (1).png" alt="" />
              </li>
              <li>
                <img src="../images/Receipes Card (2).png" alt="" />
              </li>
            </ol>
            <div className="receipts-last-update">
            <h2>Последние добавленные</h2>
            <div className="receipts-last-wrapper">
              <div className="receipts-last-box">
                <img src="../images/image 4.png" alt="" />
                <br />
                <br />
                <h3>Сырная тарелка</h3>
                <br />
                <p>Особенно характерно наличие 
                  <br />дырочек разных размеров в 
                  <br />структуре швейцарских сортов...</p>
                  <br />
                  <button>Читать далее </button>
              </div>
              <div className="receipts-last-box">
                <img src="../images/image 4.png" alt="" />
                <br />
                <br />
                <h3>Сырная тарелка</h3>
                <br />
                <p>Особенно характерно наличие 
                  <br />дырочек разных размеров в 
                  <br />структуре швейцарских сортов...</p>
                  <br />
                  <button>Читать далее </button>
              </div>
              <div className="receipts-last-box">
                <img src="../images/image 4.png" alt="" />
                <br />
                <br />
                <h3>Сырная тарелка</h3>
                <br />
                <p>Особенно характерно наличие 
                  <br />дырочек разных размеров в 
                  <br />структуре швейцарских сортов...</p>
                  <br />
                  <button>Читать далее </button>
              </div>
            </div>
            <div className="receipts-last-wrapper">
              <div className="receipts-last-box">
                <img src="../images/image 4.png" alt="" />
                <br />
                <br />
                <h3>Сырная тарелка</h3>
                <br />
                <p>Особенно характерно наличие 
                  <br />дырочек разных размеров в 
                  <br />структуре швейцарских сортов...</p>
                  <br />
                  <button>Читать далее </button>
              </div>
              <div className="receipts-last-box">
                <img src="../images/image 4.png" alt="" />
                <br />
                <br />
                <h3>Сырная тарелка</h3>
                <br />
                <p>Особенно характерно наличие 
                  <br />дырочек разных размеров в 
                  <br />структуре швейцарских сортов...</p>
                  <br />
                  <button>Читать далее </button>
              </div>
              <div className="receipts-last-box">
                <img src="../images/image 4.png" alt="" />
                <br />
                <br />
                <h3>Сырная тарелка</h3>
                <br />
                <p>Особенно характерно наличие 
                  <br />дырочек разных размеров в 
                  <br />структуре швейцарских сортов...</p>
                  <br />
                  <button>Читать далее </button>
              </div>
            </div>
            <button className="receipts-type-button">Загрузить еще</button>
            </div>
           </div>
          </div>
         <Footer/>
        </div>
       
    )
}

export default Receipts

const Container = styled.div`
    width: 85%;
    margin: 0 auto;

`
const ReceiptDetails = styled.div`
  ul{
    display: flex;
    margin: 30px 0px;
    gap: 30px;
    li{
      list-style: none;
      a{
        text-decoration: none;
        color: #000000;
        i{
          padding-left: 10px;
        }
      }
    }
  }
`