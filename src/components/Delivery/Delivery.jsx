import React from 'react'
import Header from '../Header'
import Sidebar from '../SideBar/Sidebar'
import Footer from '../Footer'

const Delivery = () => {
  return (
    <div className='delivery'>
        <Header/>
      <div className="delivery-and-sidebar">
        <Sidebar/>
        <div className="delivery-sidebar">
          <h2 className='first'>Доставка и оплата</h2>
          <hr className='second'/>
          <h3 className='third'>СПОСОБЫ ОПЛАТЫ:</h3>
          <div className="cards">
            <div className="first-card">
              <div className="oval-svg">
                <img className='first-oval-svg' src="./img/score.svg" alt=""/>
              </div>
              <h5 className='fourth'>Предоплата по счету</h5>
              <p className='fifth'>При оформлении заказа выберите в поле оплаты "счёт для юридических лиц" и введите реквизиты. Счет на оплату будет выслан на электронную почту.</p>
            </div>
            <div className="first-card">
              <div className="oval-svg">
                <img className='first-oval-svg' src="./img/payments-finance.svg" alt=""/>
              </div>
              <h5 className='fourth'>Он-лайн оплата</h5>
              <p className='fifth'>Вы можете оплатить товар в интернет магазине банковской картой или с использованием платежных систем Яндекс-деньги и Web-money</p>
            </div>
            <div className="first-card">
              <div className="oval-svg">
                <img className='first-oval-svg' src="./img/money.svg" alt=""/>
              </div>
              <h5 className='fourth'>Наличными при получении</h5>
              <p className='fifth'>Вы всегда можете оплатить заказ наличными – курьеру, на почте или при получении в транспортной компании.</p>
            </div>
          </div>
          <hr />
          <div className="delivery-type">
            <div className="top-block">
              <div className="delivery-some-text">
                <h3 className="delivery-h3-text">СПОСОБЫ ДОСТАВКИ:</h3>
                <h4 className="delivery-h4-text">Доставка по Новосибирску</h4>
                <p className="delivery-p-text">Вы можете забрать товар из нашего магазина самостоятельно, приехав по адресу: </p>
                <p className="delivery-p-text-two">г. Новосибирск, ул. Котовского, д. 12/1, офис 1</p>
                <div className="delivery-last-text">
                  <img src="./img/delivery-car.svg" alt="" />
                  <p className="delivery-p-text-three">Или заказать курьерскую доставку. Стоимость доставки – 150 рублей.</p>
                </div>
              </div>
              <div className="delivery-some-img">
                <img src="./img/location-map.jpg" alt="" />
              </div>
            </div>
            <div className="bottom-block">
              <div className="delivery-some-img-two">
                <img src="./img/delivery-img.jpg" alt="" />
              </div>
              <div className="delivery-some-text-two">
                <h5 className="delivery-h5-text">Доставка по Российской федерации </h5>
                <p className="delivery-p-text-four">Доставка по РФ осуществляется логистическими службами СДЭК и Почта России.  
В любой момент Вы можете отследить путь своего заказа по трек-номеру.
 Приблизительные сроки и стоимость доставки указаны в таблице ниже. Окончательная сумма зависит от веса и способа оплаты заказа (при наложенном платеже – стоимость доставки выше) и рассчитывается автоматически в момент оформления.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="delivery-price">
        <div className="first-delivery-price">
          <div className="first-section-price">
            <p className="first-section-price-p hidden-price">Почта России</p>
          </div>
          <div className="second-section-price">
            <p className="first-section-price-p">Почта России</p>
          </div>
          <div className="third-section-price">
            <p className="first-section-price-p">Транпортная компания СДЭК</p>
          </div>
          <div className="fourth-section-price">
            <p className="first-section-price-p">Пункт выдачи Boxberry</p>
          </div>
        </div>
        <div className="second-delivery-price">
          <div className="first-section-price">
            <p className="first-section-price-p">Сроки доставки</p>
          </div>
          <div className="second-section-price">
            <p className="first-section-price-p">От 7 дней</p>
          </div>
          <div className="third-section-price">
            <p className="first-section-price-p">2-4 дня</p>
          </div>
          <div className="fourth-section-price">
            <p className="first-section-price-p">2-4 дня</p>
          </div>
        </div>
        <div className="third-delivery-price">
          <div className="first-section-price">
            <p className="first-section-price-p">Стоимость доставки</p>
          </div>
          <div className="second-section-price">
            <p className="first-section-price-p">От 200 руб.</p>
          </div>
          <div className="third-section-price">
            <p className="first-section-price-p">От 350 руб. Итоговая сумма будет рассчитана после указания точного адреса</p>
          </div>
          <div className="fourth-section-price">
            <p className="first-section-price-p">От 200 руб.</p>
          </div>
        </div>
        <div className="fourth-delivery-price">
          <div className="first-section-price">
            <p className="first-section-price-p">Бесплатная доставка</p>
          </div>
          <div className="second-section-price">
            <p className="first-section-price-p">При заказе от 2000 руб.</p>
          </div>
          <div className="third-section-price">
            <p className="first-section-price-p">При заказе от 7000 руб.</p>
          </div>
          <div className="fourth-section-price">
            <p className="first-section-price-p">При заказе от 2000 руб.</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Delivery
