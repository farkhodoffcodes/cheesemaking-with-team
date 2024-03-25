import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// const country = [
//     {
//         id: 1,
//         name: "Аккурган",
//         link: "Аккурган"
//     }
// ]

const Header = () => {
    return (
        <>
            <HeaderTop>
                <Container>
                    <div className='headerTop__inner'>
                    <button>
                        <i class="fa-solid fa-location-dot"></i>
                        <p>Ваш город: <span> Москва
                        <i class="fa-solid fa-chevron-down"></i>
                        </span></p>
                    </button>
                    <div className='icon'>
                        <i class="fa-regular fa-clock"></i>
                        <p>Пн-Пт 9:00 - 19:00</p>
                    </div>
                    <div className='about'>
                    <p>О компании</p>
                    <p>Преимущества</p>
                    <p>Акционные товары</p>
                    <div className='icon'>
                        <i class="fa-regular fa-user"></i>
                        <Link to='login' className='login'>Войти в аккаунт</Link><p></p>
                    </div>
                    </div>
                    

                    </div>
                </Container>
                <hr />
            </HeaderTop>
            <HeaderMedium>
                <Container>
                    <div className='header-medium'>
                    <img src="./images/icons/Logo.svg" alt="Logo" /> 
                 <div className='icon'>
                    <img src="./images/icons/delivery.svg" alt="delivery" />
                 <p>Бесплатная доставка</p>
                 </div>
                 <div className='icon'>
                    <img src="./images/icons/credit-card.svg" alt="delivery" />
                 <p>Скидка при оплате на сайте</p>
                 </div>
                 <div className='icon'>
                    <img src="./images/icons/user-protection.svg" alt="delivery" />
                 <p>Защита покупателей</p>
                 </div>
                 <div className='social-media'>
                        <img src="./images/icons/Telegram.svg" alt="tg" />
                        <img src="./images/icons/WhatsUp.svg" alt="tg" />
                        <img src="./images/icons/Messenger.svg" alt="tg" />
                    <div>
                        <p>+8 916 460-19-60</p>
                        <button className='btn'> <img src="./images/icons/call.svg" alt="" /> Заказать звонок</button>
                    </div>
                 </div>
                 <div className='addToCart'>
                    <div>
                        <p>Ваша корзина</p>
                        <span>1680 руб. </span>
                    </div>
                    <img src="./images/icons/cart.svg" alt="cart" />
                 </div>
                    </div>
                 
                </Container>
                <hr />
            </HeaderMedium>
            <HeaderBottom>
                <Container>
                    <div className='navbar'>
                        <p>Рецепты
                        <i class="fa-solid fa-chevron-down"></i>
                        </p>
                        <p>Доставка и оплата</p>
                        <p>Калькулятор Сыродела</p>
                        <p>Отзывы</p>
                        <p>Вопросы и ответы</p>
                        <p>Контакты</p>
                        <div className='input'>
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder='Введите название товара или артикул'/>
                        </div>
                        
                    </div>
                </Container>
                <hr />
            </HeaderBottom>
            <HeaderContent>
                <Container>
                <div className='content-slider'>
                    <div className='kits'>
                        <img src="./images/slider1.png" alt="" />
                        <div className='text'>
                        <h1>Наборы для сыроделия</h1>
                        <h2>Все что вам нужно для приготовления сыра в домашних условиях</h2>
                        <button>Смотреть наборы</button>
                        </div>
                        
                    </div>
                    <div className='receipt'>
                    <img src="./images/slider2.png" alt="" />
                    <div className='text'>
                    <span>Рецепты</span>
                        <p>Сыры с плесенью</p>
                    </div>
                    </div>
                    <div className='sale'>
                    <img src="./images/slider3.png" alt="" />
                    <div className='text'>
                    <span>Акции</span>
                        <p>закваски для сыра</p>
                    </div>
                        
                    </div>
                </div>
                </Container>
                
            </HeaderContent>
        </>
    )
}

const Container = styled.div`
    width: 85%;
    margin: 0 auto;

`

const HeaderTop = styled.div`
    font-size: 14px;

    .headerTop__inner {
        display:flex;
        align-items:center;
        gap: 30px;
        margin: 10px 0px;
        span{
            i{
                padding: 5px;
            }
        }

        button {
            display:flex;
            gap:10px;
            align-items:center;
            border: none;
            background-color: #fffbed;

        }
        .icon{
            display: flex;
            gap: 10px;
        }
        .login {
            text-decoration: none;
            color: #000;
        }
        .about{
            display: flex;
            gap: 30px;
            margin-left: auto;
            cursor: pointer;
        }
    }
`
const HeaderMedium = styled.div`
    .header-medium{
        display: flex;
        justify-content: space-between;
    }
    .icon{
        display: flex;
        align-items: center;
        gap: 6px;
        width: 140px;
        p{
            color: #808080;
            font-size: 13px;
        }
        
    }
    .social-media{
        display: flex;
        align-items: center;
        gap: 10px;
        border-right: 1px solid #F4F0E6;
        border-left: 1px solid #F4F0E6;
        padding: 0px 20px;
        .btn {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-top: 6px;
            color: #FD9339;
            width: 136;
            height: 30px;
            font-size: 12px;
            border: 1px solid #FD9339;
            border-radius: 4px;
            padding: 10px;
            background-color: #fffbed;
            cursor: pointer;
        }
        .btn:hover{
            background-color: #FD9339;
            color: #fff;
            transition: 0.5s;
        }
    }
    .addToCart{
        display: flex;
        align-items: center;
        padding-left: 10px;
        p{
            font-size: 14px;
        }
        span{
            font-size: 14px;
            color: #FD9339;
        }
        img{
            max-width: 48px;
        }
    }
`
const HeaderBottom = styled.div`
    .navbar{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 30px;
        gap: 20px;
    }
    .input{
        display: flex;
        align-items: center;
        margin-left: auto;
        padding-left: 20px;
        
        border-left: 1px solid #F4F0E6;
        input{
            width: 252px;
            height: 24px;
            border: none;
            margin-left: 10px;
            background-color: #fffbed;
        }
        
    }
    p{
        font-size: 14px;
        i{
            padding-left: 10px;
        }
    }
`
const HeaderContent = styled.div`
        .content-slider{
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 300px;
            overflow: hidden;

            .kits{
                position: relative;
                width: calc(50% - 10px);
                height: 100%;
                
                
                img {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

               .text{
                position: relative;
                display: flex; 
                flex-direction: column;
                gap: 20px;
                padding: 40px;
                color: white;
                z-index: 2;
                h1{
                    font-size: 36px;
                    text-transform: uppercase;

                }
                h2{
                    font-weight: 400;
                    font-size: 18px;
                    line-height: 26px;
                    width: 380px;
                }
                button{
                    width: 200px;
                    height: 46px;
                    margin-top: 50px;
                    background-color: #FD9339;
                    border: none;
                    border-radius: 5px;
                    color: #fff;
                }
               }

            }
            .receipt{
                position: relative;
                width: 25%;
                height: 100%;

                img {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

               .text{
                position: relative;
                display: flex; 
                flex-direction: column;
                width: 100%;
                gap: 10px;
                top: 200px;
                padding: 20px;
                z-index: 2;
                span{
                    font-family: 'Circe Rounded';
                    font-size: 16px;
                    color: #FD9339;
                }
                p{
                    font-family: 'Circe Rounded';
                    font-size: 20px;
                    font-weight: 800;
                    color: #fff;
                    text-transform: uppercase;
                }
               }

            }
            .sale{
                position: relative;
                width: 25%;
                height: 100%;

                img {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

               .text{
                position: relative;
                display: flex; 
                flex-direction: column;
                gap: 10px;
                top: 200px;
                padding: 20px;
                z-index: 2;
                span{
                    font-family: 'Circe Rounded';
                    font-size: 16px;
                    color: #FD9339;
                } 
                 p{
                    font-family: 'Circe Rounded';
                    font-size: 20px;
                    font-weight: 800;
                    color: #fff;
                    text-transform: uppercase;
                }
               }
            }
        }
`

export default Header