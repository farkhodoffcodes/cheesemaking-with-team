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
        <AboutNavbar>
            <div className="about-navbar">
                <div className="container">
                    <Link className='link about-top-link1' to="/glavniy"><p>Главная <i class="fa-solid fa-chevron-right"></i></p></Link>
                    <Link className='link about-top-link2' to="/o-kampaniya"><p>О нашей компании</p></Link>
                </div>
            </div>
        </AboutNavbar>

        <CompanyHero>
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
        </CompanyHero>

        <Result>
            <section className='result-client'>
                <ol className='result-client-list'>
                    <li className='client-item'>
                        <h2 className='client-heading'>Клиент всегда прав</h2>
                        <p className='client-desc'>Мы стремимся обеспечить обслуживание клиентов таким образом, чтобы на всех этапах сотрудничества клиент ощущал комфорт и удовлетворение. Наивысшей оценка нашей деятельности являются положительные отзывы о нашей компании.</p>
                        <button className='client-btn'>Оставить отзыв</button>

                        <img className='client-img1' src="../images/about-client-img1.svg" alt="rasm" />
                        <img className='client-img2' src="../images/about-client-img2.svg" alt="rasm" />
                        <img className='client-img3' src="../images/about-client-img3.svg" alt="rasm" />
                        <img className='client-img4' src="../images/about-client-img4.svg" alt="rasm" />
                        <img className='client-img5' src="../images/about-client-img5.svg" alt="rasm" />
                    </li>

                    <li className='result-item'>
                        <h2 className='result-heading'>лучший результат</h2>
                        <p className='result-desc'>Наши товары, помогут Вам достичь лучших результатов</p>
                        <img className='result-img1' src="../images/about-result-img1.png" alt="rasm" />
                        <img className='result-img2' src="../images/about-result-img2.png" alt="rasm" />
                        <img className='result-img3' src="../images/about-result-img3.svg" alt="rasm" />
                        <img className='result-img4' src="../images/about-result-img4.svg" alt="rasm" />
                        <img className='result-img5' src="../images/about-result-img5.svg" alt="rasm" />
                        <img className='result-img6' src="../images/about-result-img6.svg" alt="rasm" />
                    </li>
                </ol>
            </section>
        </Result>

        <Shop>
            <section className='shop'>
                <div className="container">
                    <div className="shop-left">
                        <h2>о нашем магазине</h2>
                        <p>Интернет-магазин «ЛяЧиз» предлагает своим покупателям широчайший ассортимент оборудования, ингредиентов и аксессуаров для домашнего сыроделия.
                        <br />
                        <br />
                        С нашей продукцией у Вас появится возможность приготовить любой сыр в домашних условиях и насладиться всеми его оттенками и разнообразием, а также Вы окунётесь в мир сыроделия и узнаете всё о приготовлении любого вида сыра своими руками.
                        <br />
                        <br />
                        С нашим оборудованием у вас появится возможность расширить свои способности, а также приготовить вкусный и качественный сыр.
                        <br />
                        <br />  
                        "ЛяЧиз" за качество, надёжность, технологичность и презентабельность! Будем и дальше радовать вас большим ассортиментом и новинками,  а вы нас - своими заказами!</p>
                    </div>
                    <div className="shop-right">
                        <img src="../images/about-shop-img1.png" alt="rasm" />
                        <img src="../images/about-shop-img1.png" alt="rasm" />
                        <img src="../images/about-shop-img1.png" alt="rasm" />
                        <img src="../images/about-shop-img1.png" alt="rasm" />
                    </div>
                </div>
            </section>
        </Shop>
      </section>
      <Footer/>
    </div>
  )
}


const Shop = styled.div`

    .shop{
        margin-bottom:108px;
        .container{
            display:flex;
            align-items:center;
            flex-direction:row;
            justify-content:space-between;

            .shop-left{
                width:500px;
                height:auto;

                h2{
                    font-size:28px;
                    line-height:40px;
                    color:#4E2D2D;
                    margin-bottom:24px;
                }

                p{
                    font-size:16px;
                    line-height:24px;
                    color:#666666;
                    font-weight:500;
                }
            }

            .shop-right{
                width:580px;
                height:auto;
                border-radius:5px;
                display:flex;
                align-items:center;
                flex-wrap:wrap;
                gap:20px;
            }
        }
    }
`

const Result = styled.div`
    .result-client{
        margin-bottom:127px;
        ol{
            display:flex;
            justify-content:space-between;
            list-style:none;
            gap:20px;

            li{
                width:830px;
                height:420px;
            }

            .client-item{
                position:relative;
                padding-left:200px;
                background-color:#FEE9A5;
                padding-top:94px;
                padding-right:102px;

                .client-heading{
                    font-size:28px;
                    line-height:40px;
                    color:#4E2D2D;
                }

                .client-desc{
                    font-size:16px;
                    line-height:24px;
                    color:#666666;
                    font-weight:500;
                    margin-bottom:6px;
                }

                .client-btn{
                    width:212px;
                    height:56px;
                    border-radius:5px;
                    background-color:#FD9339;
                    border:none;
                    font-size:16px;
                    line-height:24px;
                    color:#fff;
                    cursor:pointer;
                    transition:all 0.3s ease-in-out;


                    &:hover{
                        border:3px solid #FD9339;
                        background-color: #fff;
                        color:#FD9339;
                        font-weight:bold;
                        transition:all 0.3s ease-in;
                    }

                    &:active{
                        opacity:0.6;
                        transition:all 0.3s ease-in;
                    }
                }

                .client-img1{
                    position:absolute;
                    right:40px;
                    bottom:40px;
                }

                .client-img2{
                    position:absolute;
                    right:151px;
                    bottom:20px;
                }

                .client-img3{
                    position:absolute;
                    top:0px;
                    left:0px;
                }

                .client-img4{
                    position:absolute;
                    right:0px;
                    top:0px;
                }

                .client-img5{
                    position:absolute;
                    left:68px;
                    bottom:45px;
                }
            }

            .result-item{
                position:relative;
                padding: 94px 283px 224px 80px !important;
                background: rgb(210,210,211);
                background: linear-gradient(90deg, rgba(210,210,211,1) 50%, rgba(223,223,224,1) 75%);

                .result-heading{
                    font-size:28px;
                    line-height:40px;
                    color:#4E2D2D;
                }

                .result-desc{
                    font-size:16px;
                    line-height:24px;
                    color:#666666;
                    font-weight:500;
                }

                .result-img1{
                    position:absolute;
                    top:38px;
                    right:0px;
                }

                .result-img2{
                    position:absolute;
                    top:0px;
                    right:144px;
                }

                .result-img3{
                    position:absolute;
                    bottom:48px;
                    left:80px;
                }

                .result-img4{
                    position:absolute;
                    bottom:0px;
                    left:170px;
                }

                .result-img5{
                    position:absolute;
                    bottom:161px;
                    left:0px;
                }

                .result-img6{
                    position:absolute;
                    bottom:161px;
                    right:0px;
                }
            }
        }

    }

`

const AboutNavbar = styled.div`

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

const CompanyHero = styled.div`

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