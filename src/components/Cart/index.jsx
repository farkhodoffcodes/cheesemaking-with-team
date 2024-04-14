import React from "react";
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Header from "../Header";
import Footer from "../Footer";

const Cart = () => {
    return (
        <div>
            <Header/>
            <div className="cart--order">
                <h2>Оформление заказа</h2>
                <div className="cart--container">
                    <div className="cart--container-inner">
                        <div className="cart--contact">
                        <h2>Контактные данные:</h2>
                        <br />
                        <hr />
                        <br />
                        <div className="cart--wrapper">
                                <div className="cart-inp-one">
                                <p>Имя и фамилия</p>
                                <input type="text" placeholder="Иванов Андрей"/>
                                </div>
                                <div className="cart-inp-two">
                                <p>Электронный адрес</p>
                                <input type="text" placeholder="ivan.services@gmail.com"/>
                                </div>
                        </div>
                        
                        </div>
                        <div className="cart--order--name">
                            <h2>Заказ (4)</h2>
                            <span>на сумму 2350 руб.</span>
                            <br />
                            <hr />
                            <br />
                            <div className="cart--order--name--one">
                                <img src="./img/Rectangle 68.png" alt="" />
                                <div className="cart-inner-one">
                                    <p>Универсальная форма 1 кг для приг отов
                                        <br /> ления сыра
                                        <br />
                                    Артикул: 260521
                                    <br/>
                                    <br />  <b>Удалить</b> 
                                    </p>
                                </div>
                                <br />
                                <p>600 ₽</p>
                            </div>
                            <br />
                            <hr />
                            <br />
                            <div className="cart--order--name--one">
                                <img src="./img/Rectangle 68.png" alt="" />
                                <div className="cart-inner-one">
                                    <p>Универсальная форма 1 кг для приг отов
                                        <br /> ления сыра
                                        <br />
                                    Артикул: 260521
                                    <br/>
                                    <br />  <b>Удалить</b> 
                                    </p>
                                </div>
                                <br />
                                <p>1800 ₽</p>
                            </div>
                            <br />
                            <hr />
                            <br />
                            <div className="cart--order--name--one">
                                <img src="./img/Rectangle 68.png" alt="" />
                                <div className="cart-inner-one">
                                    <p>Универсальная форма 1 кг для приг отов
                                        <br /> ления сыра
                                        <br />
                                    Артикул: 260521
                                    <br/>
                                    <br />  <b>Удалить</b> 
                                    </p>
                                </div>
                                <br />
                                <p>950 ₽</p>
                            </div>
                        </div>
                        <div className="cart--order--select">
                            <h2>Выберите способ доставки:</h2>
                            <br />
                            <hr />
                            <br />
                            <div className="order--select">
                                <input type="radio" name="" id="" />
                                <span>Бесплатная доставка <b>(0 руб.)</b> </span>
                            </div>
                            <br />
                            <div className="order--select">
                                <input type="radio" name="" id="" />
                                <span>Курьер<b>(0 руб.)</b> </span>
                            </div>
                            <br />
                            <h2>Ваши данные для доставки:</h2>
                            <br />
                            <hr />
                            <br />
                            <div className="cart--pay--select">
                                <div className="cart-pay-one">
                                <p>Имя и фамилия</p>
                                <input type="text" placeholder="Иванов Андрей"/>
                                </div>
                                <div className="cart-pay-one">
                                <p>Номер телефона</p>
                                <input type="tel" placeholder="+7000000000"/>
                                </div>                
                            </div>
                            <br />
                            <div className="cart--pay--select">
                                <div className="cart-pay-one">
                                    <p>Выберите страну</p>
                                    <input type="text" name="" id="" placeholder="Российская Федерация" />
                                    </div>
                                <div className="cart-pay-one">
                                    <p>Выберите регион</p>
                                    <input type="text" name="" id="" placeholder="Нижний Новгород" />
                                    </div>
                            </div>
                            <br />
                            <div className="cart--pay--select">
                                <div className="cart-pay-one">
                                <p>Улица, дом и квартира</p>
                                <input type="text" placeholder="Ивановская 34, кв.12"/>
                                </div>
                                <div className="cart-pay-one">
                                <p>Индекс</p>
                                <input type="tel" placeholder="02100"/>
                                </div>                
                            </div>
                            <br />
                            <div className="cart--pay--select">
                                <div className="cart-pay-two">
                                    <input type="checkbox" name="" id="" />
                                    <p>Cогласен на обработку персональных данных в соответствии с <b>политикой конфиденциальности</b></p>
                                </div>
                            </div>
                        </div>
                        <div className="cart--order--cash--select">
                        <h2>Выберите способ оплаты:</h2>
                        <br />
                        <hr />
                        <br />
                        <div className="order--select--cash">
                            <input type="radio" name="" id="" />
                            <span>Онлайн оплата</span>
                        </div>
                        <br />
                        <div className="order--select--cash">
                            <input type="radio" name="" id="" />
                            <span>Оплата наличными</span>
                        </div>
                        <br />
                        <div className="order--select--cash">
                            <input type="radio" name="" id="" />
                            <span>Кредитные карты / Интернет банкинг / QIWI / Yandex</span>
                        </div>
                        </div>
                    </div>
                    <div className="cart--container--inner-two">
                        <h2>Итоги заказа</h2>
                        <br />
                        <hr />
                        <br />
                        <p>Есть промокод для скидки?</p>
                        <div className="cart-promokod">
                            <input type="text" name="" id="" placeholder="Cheese2021"/>
                            <p>Применить</p>
                        </div>
                        <br />
                        <div className="cart--sum">
                            <p>Сумма заказа</p>
                            <span>2350 руб.</span>
                        </div>
                        <br />
                        <div className="cart--sum-two">
                            <p>Доставка</p>
                            <span>0 руб.</span>
                        </div>
                        <br />
                        <div className="cart--sum-three">
                            <p>Промокод</p>
                            <span>-300 руб.</span>
                        </div>
                        <br />
                        <hr />
                        <br />
                        <div className="cart--sum-four">
                            <b>К оплате</b>
                            <span><b>2050 руб.</b></span>
                        </div>
                        <br />
                        <button>Подтвердить заказ</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Cart