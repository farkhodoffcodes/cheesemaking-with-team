import React from 'react'
import Header from '../Header'
import Sidebar from '../SideBar/Sidebar'
import Footer from '../Footer'
import './calculator.css'

const Calculator = () => {
  return (
    <div className='calculator'>
        <Header />
        <div className="sidebar-and-calc">
            <Sidebar />
            <div className="calc">
                <div className="calc__header">
                    <h1 className='calc__header__title'>Калькулятор сыродела</h1>
                </div>
                <div className="two_calc_blocks">
                  <div className="first_calc_block">
                    <h3>Расчет количества закваски</h3>
                    <hr />
                    <p>На какой объем рассчитан весь пакет?</p>
                    <input type="text" />
                    <p>Какой объем молока вы используете?</p>
                    <input type="text" />
                    <p>Сколько весит вся закваска в пакете?</p>
                    <input type="text" />
                    <button>Рассчитать</button>
                  </div>
                  <div className="second_calc_block">
                    <h3>Результат</h3>
                    <hr />
                    <p>Для переработки <span>2</span> литров молока вам потребуется <span>1/1</span> часть пакета закваски или <span>1</span> грамм (0,5 грамм на каждый литр молока)</p>
                    <h4>Нужна помощь с расчетами?</h4>
                    <h5>&#63; Пакет любой закваски для сыра рассчитан на переработку конкретного объема молока. </h5>
                    <h5>&#63; Укажите количество молока (в литрах), которое вы собираетесь использовать за одну варку.</h5>
                    <h5>&#63; Для правильного расчета необходимо указать, сколько весит вся закваска в пакете (с точностью до 0,1 гр)</h5>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Calculator
