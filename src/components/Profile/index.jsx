import React from 'react'
import Header from '../Header'

const Profile = () => {
  return (
    <div className='profile'>
      <Header/>
      <section className='profile'>
      <div className='profile__iteam'>
      <ol className='profile--iteam--ol'>
        <li>
          <p className='profile__glavni'>Главная</p>
        </li>

        <li>
          <img src="./images/icons/arrows-diagrams-04 1 (2).svg" alt="" />
        </li>

        <li>
          <p className='profile__kabinit'>Личный кабинет</p>
        </li>
      </ol>

      <h1 className='moy_profile_kobinit'>Личный кабинет</h1>
      <ol className='moy_profile'>
        <li className='moy_profile--list'>
          <img src="./images/icons/Profile.svg" alt="logo" />
          <a className='profile__alfa' href="#">Мой профиль </a>
        </li>

        <li className='moy_profile--list'>
          <img src="./images/icons/Bag.svg" alt="logo" />
          <a className='profile__alfa' href="#">Мои заказы</a>
        </li>

        <li className='moy_profile--list'>
          <img src="./images/icons/Heart.svg" alt="logo" />
          <a className='profile__alfa' href="#">Избранные товары</a>
        </li>

        <li className='moy_profile--list'>
          <img src="./images/icons/Coupon.svg" alt="logo" />
          <a className='profile__alfa' href="#">Мои купоны</a>
        </li>

        <li className='moy_profile--list'>
          <img src="./images/icons/Direction.svg" alt="logo" />
          <a className='profile__alfa' href="#">Адрес доставки</a>
        </li>

        <li className='moy_profile--list'>
          <img src="./images/icons/Password.svg" alt="logo" />
          <a className='profile__alfa' href="#">Сменить пароль</a>
        </li>

        <li className='moy_profile--list'>
          <img src="./images/icons/Logout.svg" alt="logo" />
          <a className='profile__alfa' href="#">Выход</a>
        </li>
      </ol>
      <section className=''>
      <div className='information'>
      <div className='information__right'>
        <h3 className='information--anfalova'>Kristina Anfalova</h3>
        <ol className='information'>
          <li className='information__list'>
            <p>Телефон:</p>
            <ins className='information__ins1'>+7(380)664-61-24</ins>
          </li>

          <li className='information__list'>
            <p>Email:</p>
            <ins className='information__ins2'>ogabek20040611@gmail.com</ins>
          </li>

          <li className='information__list'>
            <p>Адрес доставки:</p>
          <ins className='information__ins'>123333, Российская Федерация, <br /> Карачаево-Черкессия, Кharkov, Московская 4 кв 4</ins>
          </li>
        </ol>
      </div>

      <div className='information__left'>
        <p>Редактировать информацию</p>
      </div>
      </div>
      </section>
      

      

      
      </div>
      </section>
    </div>
  )
}

export default Profile
