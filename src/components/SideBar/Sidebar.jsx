import React from 'react'
import { Link } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className="sidebars">
        <div className="top-sidebar">
            <div className="header-of-sidebar">
                <img src="./img/cheese-svg.svg" alt="" />
                <h4 className='receipts-h4'>Ингредиенты</h4>
            </div>
            <div className="middle-of-sidebar">
                <Link className='links' to={"/k-закваски"}>
                    <div className="first-loc">
                        <p className='receipt-menu-p'>Закваски для сыра</p>
                        <img src="./img/Vector (4).svg" alt="" />
                    </div>
                </Link>
                <Link className='links' to={"/k-закваски"}>
                    <div className="first-loc">
                        <p className='receipt-menu-p'>Ферменты для сыра</p>
                        <img src="./img/Vector (4).svg" alt="" />
                    </div>
                </Link>
                <div className="first-loc">
                    <p className='receipt-menu-p'>Хлористый кальций</p>
                </div>

                <Link className='links' to={"/k-закваски"}>
                    <div className="first-loc">
                        <p className='receipt-menu-p'>Плесень для сыра</p>
                        <img src="./img/Vector (4).svg" alt="" />
                    </div>
                </Link>
                <Link className='links' to={"/k-закваски"}>
                    <div className="first-loc k-закваски">
                        <p className='receipt-menu-p '>Кисломолочные закваски</p>
                        <img src="./img/Vector (4).svg" alt="" />
                    </div>
                </Link>
                <div className="first-loc">
                    <p>Плесень для сыра</p>
                    <img src="./img/Vector (4).svg" alt="" />
                </div>
                <Link className='links' to={"/yeast"}>
                <div className="first-loc k-закваски">
                    <p className='receipt-menu-p '>Кисломолочные закваски</p>
                    <img src="./img/Vector (4).svg" alt="" />
                </div>

                </Link>
                <div className="first-loc">
                    <p className='receipt-menu-p'>Красители для сыра</p>
                </div>
                <Link className='links' to={"/k-закваски"}>
                    <div className="first-loc">
                        <p className='receipt-menu-p'>Специи для сыра</p>
                        <img src="./img/Vector (4).svg" alt="" />
                    </div>
                </Link>
            </div>
        </div>
        <div className="top-sidebar">
            <div className="header-of-sidebar">
                <img src="./img/cereal-bowl-svg.svg" alt="" />
                <h4 className='receipts-h4'>Оборудование</h4>
            </div>
            <div className="middle-of-sidebar">
                <div className="first-loc">
                    <p className='receipt-menu-p'>Формы для сыра</p>
                    <img src="./img/Vector (4).svg" alt="" />
                </div>
                <div className="first-loc">
                    <p className='receipt-menu-p'>Латексное покрытие</p>
                </div>
                <div className="first-loc">
                    <p className='receipt-menu-p'>Воск для сыра</p>
                </div>
                <div className="first-loc">
                    <p className='receipt-menu-p'>Термоусадочные пакеты</p>
                    <img src="./img/Vector (4).svg" alt="" />
                </div>
                <div className="first-loc">
                    <p className='receipt-menu-p'>Дренажные коврики</p>
                </div>
                <div className="first-loc">
                    <p className='receipt-menu-p'>Дренажные мешки и салфетки 
для прессования</p>
                </div>
                <div className="first-loc">
                    <p className='receipt-menu-p'>Дренажные контейнеры</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
