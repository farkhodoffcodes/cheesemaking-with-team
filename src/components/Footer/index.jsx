import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Footer = () => {
  return (
    <>
      <Footerinner>
          <Container>
              <div className="footer-wrapper">
                <div className="footer-logo">
                    <img src="./images/icons/Logo.svg" alt="Logo" />
                    <p>Все материалы данного сайта 
                    <br /> являются объектами авторского 
                    <br />  права.</p>
                    <br />
                    <span>Разработка сайта: ЛяЧиз</span>
                </div>
                  <div className="footer-company">
                    <h3>Компания</h3>
                    <ul>
                      <li>
                        <a href="#">О компании</a>
                      </li>
                      <li>
                        <a href="#">Акции и скидки</a>
                      </li>
                      <li>
                        <a href="#">Доставка и оплата</a>
                      </li>
                      <li>
                        <a href="#">Отзывы</a>
                      </li>
                      <li>
                        <a href="#">Гарантия и возврат</a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-help">
                    <h3>Поддержка</h3>
                    <ul>
                      <li>
                        <a href="#">Вопрос-ответ</a>
                      </li>
                      <li>
                        <a href="#">Бонусная программа</a>
                      </li>
                      <li>
                        <a href="#">Политика конфиденциальности</a>
                      </li>
                      <li>
                        <a href="#">Персональные данных</a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-pay">
                  <h3>Способы оплаты</h3>
                  <div className="footer-icons">
                  <img src="./images/icons/Ruble.svg" alt="Logo" /> 
                  <img src="./images/icons/Worls.svg" alt="Logo" /> 
                  <img src="./images/icons/Sberbank.svg" alt="Logo" /> 
                  <img src="./images/icons/Yandex.svg" alt="Logo" /> 
                  <br />
                  <img src="./images/icons/Mastercard.svg" alt="Logo" /> 
                  <img src="./images/icons/Visa.svg" alt="Logo" /> 
                  </div>
                  </div>
                  <div className="footer-phone">
                    <span>+7 495 120-00-00</span>
                    <br />
                    <span>Пн-пт 9:00 - 19:00</span>
                    <br />
                    <span>г. Москва,  улица Свободы 1/7</span>
                    <div className="footer-medias">
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-vk"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-youtube"></i>
                    </div>
                  </div>   
              </div>
          </Container>
      </Footerinner>
    </>
  )
}

const Container = styled.div`
    width: 85%;
    margin: 0 auto;

`

const Footerinner = styled.div`
  .footer-wrapper{
    display:flex;
    align-items: center;
    margin-top: 50px;
    gap: 80px;
    .footer-logo {
      p {
        color: gray;
        font-size: 12px;
        margin-top:10px;
      }
      span {
        color: black;

        font-size: 12px;
      }
    }
    .footer-company {
      ul {
        margin-top: 20px;
        list-style: none;
        li {
          a {
            text-decoration:none;
            font-size:12px;
            color: black;
          }
        }
      }
    }
    .footer-help {
      margin-top: -20px;
      ul {
        margin-top: 20px;
        list-style: none;
        li {
          a {
            text-decoration:none;
            font-size:12px;
            color: black;
          }
        }
      }
    }
    .footer-pay {
      margin-top: -20px;
      .footer-icons {
        img {
          margin-left: 10px;
          margin-top: 10px;
        }
      }
    }
    .footer-phone {
      margin-top: -20px;
      .footer-medias {
        margin-top: 20px;
        display: flex;
        gap:10px;
      }
    }
  }
`

export default Footer