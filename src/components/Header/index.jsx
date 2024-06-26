import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import Receipts from '../Receipts'


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
                        <Link title='about' to={'/about'}>О компании</Link>
                        <Link to={'/'}>Преимущества</Link>
                        <Link to={'/'}>Акционные товары</Link>
                    <div className='icon'>
                        <i class="fa-regular fa-user"></i>
                        <Link to='login' className='login'>Войти в аккаунт</Link>
                    </div>
                    </div>
                    
                        
                    </div>
                </Container>
                <hr />
            </HeaderTop>
            <HeaderMedium>
                <Container>
                    <div className='header-medium'>
                    <Link to={'/'}><img src="./images/icons/Logo.svg" alt="Logo" /> </Link>
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
                        <Link to={'/cart'} className='btn-link'><button className='btn'> <img src="./images/icons/call.svg" alt="" /> Заказать звонок</button></Link>
                    </div>
                 </div>
                 <div className='addToCart'>
                    <div>
                        <p>Ваша корзина</p>
                        <span>1680 руб. </span>
                    </div>
                   <Link to={'/cart'}><img src="./images/icons/cart.svg" alt="cart" /></Link>
                 </div>
                    </div>
                 
                </Container>
                <hr />
            </HeaderMedium>
            <HeaderBottom>
                <Container>
                    <div className='navbar'>
                    <Link to={'/receipts'} className='receipts-link'>  <p>Рецепты
                        <i class="fa-solid fa-chevron-down"></i>
                        </p></Link>
                    <Link to={'/delivery'} className='delivery-and-payment-link'><p className='delivery-and-payment-p'>Доставка и оплата</p></Link>
                        <Link to={'/calculator'} className='calculator-link'><p>Калькулятор Сыродела</p></Link>
                    <Link to={'/reviews'} className='reviews-link'><p>Отзывы</p></Link> 
                    <Link to={'/ansandquest'} className='ans-and-quest-link'><p>Вопросы и ответы</p></Link>
                        <p>Контакты</p>
                        <div className='input'>
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder='Введите название товара или артикул'/>
                        </div>
                    </div>
                </Container>
                <hr />
            </HeaderBottom>
            
        </>
    )
}

const Container = styled.div`
    width: 85%;
    margin: 0 auto;
    a{
        text-decoration: none;
        color: #000;
    }
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

            a {
                text-decoration: none;
                color: #000;
            }
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
        .btn-link {
            text-decoration: none;
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


export default Header