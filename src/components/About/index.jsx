import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
import Sidebar from '../SideBar/Sidebar'
import styled from 'styled-components'

const About = () => {
  return (
    <div>
        <Header/>
      <section className='about'>
        <About_navbar>
            <div className="about-navbar">
                <div className="container">
                    <Link className='link about-top-link1' to="/glavniy"><p>Главная <i class="fa-solid fa-chevron-right"></i></p></Link>
                    <Link className='link about-top-link2' to="/o-kampaniya"><p>О нашей компании</p></Link>
                </div>
            </div>
        </About_navbar>

        <Company_hero>
        <div className="company-hero">
            <div className="container">
                <Sidebar/>
                <div className="company-hero-right">
                    <h2>О нашей компании</h2>

                    <div className="cheese-wrapper">
                        <h3>Сыроделие</h3>
                        <img className='cheese-img' src="../images/about-cheese-img.png" alt="cheese" />
                    </div>
                    <hr />

                    <div className="our-masters">
                        <h3>Наши мастера</h3>
                        <ol className='masters-list'>
                            <li className='masters-list-item'>
                                <img className='masters-img' src="../images/masters-img1.svg" alt="" />
                                <h3 className='masters-heading'>Ирина</h3>
                                <p className='masters-desc1'>«По-рижский фермер»</p>
                                <p className='masters-desc2'>При заказе я всегда уверена в качестве товара – компания не скрывает сертификаты качества, эпидемиологические заключения и другую информацию.</p>

                            </li>

                            <li className='masters-list-item'>
                                <img className='masters-img' src="../images/masters-img2.svg" alt="" />
                                <h3 className='masters-heading'>Алексей</h3>
                                <p className='masters-desc1'>«Cыроварня Ильиных»</p>
                                <p className='masters-desc2'>Мне нравится, что в любой момент я могупозвонить своему менеджеру и получить пол-ноценную профессиональную консультацию.</p>

                            </li>

                            <li className='masters-list-item'>
                                <img className='masters-img' src="../images/masters-img3.svg" alt="" />
                                <h3 className='masters-heading'>Сергей Иванович</h3>
                                <p className='masters-desc1'>КФХ Елизаровых</p>
                                <p className='masters-desc2'>Программа лояльности, бонусы, акции – ну согласитесь же приятно, когда тебе дают персональную скидку за объем?»</p>

                            </li>

                            
                        </ol>
                    </div>


                    <hr />

                    <div className="advantages">
                        <h3>Преимущества работы с нашим магазином</h3>

                        <ol className='advantages-list'>
                            <li className='advantages-list-item'>
                                <img src="../images/icons/advantages-icon1.svg" alt="icon" />
                                <p>Профессиональная информационная поддержка, вы можете в любой момент связаться с нами</p>
                            </li>

                            <li className='advantages-list-item'>
                                <img src="../images/icons/advantages-icon2.svg" alt="icon" />
                                <p>Гарантия качества всей продукции, при заказе товара вы можете увидеть сертификат</p>
                            </li>

                            <li className='advantages-list-item'>
                                <img src="../images/icons/advantages-icon3.svg" alt="icon" />
                                <p>Программа лояльности, бонусы, акции, лучшие предложения только у нас</p>
                            </li>

                            <li className='advantages-list-item'>
                                <img src="../images/icons/advantages-icon4.svg" alt="icon" />
                                <p>Вы покупаете всё в одном месте или оставить запрос и мы превезем под заказ</p>
                            </li>
                        </ol>
                    </div>

                </div>
            </div>
        </div>
        </Company_hero>
      </section>
      <Footer/>
    </div>
  )
}

const About_navbar = styled.div`

    .about-navbar{
        margin-bottom:20px;
        .container{
            display:flex;
            align-items:center;
            gap:19.17px;
            .about-top-link1{
                p{
                    display:flex;
                    align-items:center;
                    gap:9.17px;
                    font-size:14px;
                    line-height:22px;
                    color:#808080;
                    

                    i{
                        margin-top:-5px;
                        width:3.67px;
                        height:7.33px;
                        color:#808080;
                    }
                }
            }

            .about-top-link2{
                p{
                    font-size:14px;
                    line-height:22px;
                    color:#FD9339;
                }
            }
        }
    }
    
`

const Company_hero = styled.div`

    .company-hero{
        .container{
            display:flex;
            // align-items:center;
            flex-direction:row;
            gap:80px;

            .company-hero-right{
                h2{
                    font-size:28px;
                    line-height:40px;
                    color:#4E2D2D;
                    margin-bottom:30px;

                }

                .cheese-wrapper{
                    display:flex;
                    align-items:center:
                    flex-direction: row;
                    justify-content: space-between;
                    width:920px;

                    h3{
                        font-size:24px;
                        line-height:32px;
                        color:#4E2D2D;
                    }

                    .cheese-img{
                        width:400px;
                        height:280px;
                        margin-bottom:40px;
                    }
                    
                }
                
                hr{
                    margin-bottom:50px;
                }

                .our-masters{
                    margin-bottom:40px;

                    h3{
                        font-size:24px;
                        line-height:32px;
                        color:#4E2D2D;
                        margin-bottom:20px;
                    }
                    .masters-list{
                        display:flex;
                        // align-items:center;
                        list-style:none;
                        justify-content:space-between;

                        .masters-list-item{
                            width:260px;
                            height:481px;
                            border-radiu:5px;

                            &:hover{
                                cursor:pointer; 
                            }

                            .masters-img{
                                width:260px;
                                height:260px;
                                border-radius:5px;
                                margin-bottom:20px;
                            }

                            .masters-heading{
                                font-size:24px;
                                // line-height:32px;
                                color:#4E2D2D;
                            }

                            .masters-desc1{
                                font-size:16px;
                                line-height:24px;
                                color:#4E2D2D;
                                margin-top:-20px;
                                margin-bottom:10px;
                            }

                            .masters-desc2{
                                font-size:16px;
                                line-height:24px;
                                color:#666666;
                                font-weight:600;
                            }
                        }
                    }

                    hr{
                        margin-bottom:40px;
                    }
                }

                .advantages{

                    margin-bottom:100px;

                    h3{
                        font-size:24px;
                        line-height:32px;
                        color:#4E2D2D;
                        margin-bottom:20px;
                    }

                    .advantages-list{
                        width:920px;
                        list-style:none;
                        display:flex;
                        alig-items:center;
                        gap:20px;
                        flex-wrap:wrap;

                        .advantages-list-item{
                            width:400px;
                            height:170px;
                            background-color:#fff;
                            padding-top:20px;
                            padding-left:30px;
                            padding-right:20px;
                            border:1px solid #e7e7e7;
                            border-radius:5px;

                            img{
                                width:48px;
                                height:48px;
                                margin-bottom:20px;
                            }

                            p{
                                font-size:16px;
                                line-height:24px;
                                color:#808080;
                                font-weight:600;
                            }
                        }
                    }
                }
                
            }

        }

    }

`

export default About
