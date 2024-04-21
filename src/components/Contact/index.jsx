import React from 'react'
import Header from '../Header'
import Sidebar from '../SideBar/Sidebar'

const Contact = () => {
  return (
    <div className='contact'>
      <Header/>
    <div className='contact__sidebar'>
      <Sidebar/>
      <div className='Contact--hero1'>
      <div className='contact_iteam__h3'>
        <h3 className='contact__h31'>Контакты</h3>
        <hr className='contact--border__top'/>
        </div>

        <div className='Contact--hero'>
          <ol className='.Contact__telefon'>
            <div className='contact__iteam__list'>
            <li>
            <h3 className='contact__iteam__h3'>Телефон:</h3>
              <p className='phone'>+7 9851425151</p>
              <p className='phone'>+7 9851425151</p>
            </li>

            <li>
              <h3 className='contact__iteam__h3'>Мы работаем:</h3>
              <p className='cubbota'>Понедельник-пятница — <ins className='ins'>с 10:00 до 18:00</ins> <br /> суббота — выходной воскресенье — выходной</p>
            </li>

            <li>
              <h3 className='contact__iteam__h3'>Электронная почта:</h3>
              <p className='cubbota1'>По вопросам связанным с заказами: <ins className='ins'>zakaz@lacheese.ru </ins> <br /> По вопросам сотрудничества: <ins className= 'ins'>opt@lacheese.ru</ins>  </p>
            </li>
            </div>
            <hr className='contact--border__top__one '/>
            <div className='contact__iteam__list'>
              
                <li>
                  <h3 className='contact__iteam__h3'>Фактический адрес офиса: </h3>
                  <p className= 'cubbota'>г. Москва,   улица Свободы 1/7</p>
                </li>

                <li>
                  <h3 className='contact__iteam__h3'>Юр.лицо: </h3>
                  <p className= 'cubbota1'>ИП Андреева Виктория Алексеевна, ИНН 701913850104,<b/> ОГРНИП 315501955500072</p>
                </li>

                <li>
                  <h3 className='contact__iteam__h3'>Юр. адрес:</h3>
                  <p className= 'cubbota1'>119048, Россия, Московская область, г. Лужники, Центральная ул., 17-15</p>
                </li>
            
            </div>
          </ol>

          <div className='Contact__xarita'>

      <div className='Contact__xarita--left'>
      <h3 className='contact__xarita--h3'>Остались вопросы?</h3>
      <p className='contact__xarita--p'>Заполните форму и мы вам ответим</p>
      <form className='form'>
        <input className='contact__input' type="Ваше Имя"  placeholder='Ваше Имя'/>
        <input className='contact__input' type="Email" placeholder='Email' />
        <textarea className='contact__input1' name="#" id="#" cols="30" rows="10">Сообщение или вопроc</textarea>
        
      </form>
      <button className='contact__btn'>Отправить </button>
      </div>

      <div className='Contact__xarita--right'>
        <img className='Contact__xarita--imags' src="./images/Rectangle 100.png" alt="rasm" />
      </div>
      </div>
        </div>
      </div>

      
    </div>
    </div>
  )
}

export default Contact
