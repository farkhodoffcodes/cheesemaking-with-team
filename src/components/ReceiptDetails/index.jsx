import React from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Sidebar from '../SideBar/Sidebar'
import Footer from '../Footer'

const index = () => {
  return (
    <>
    <Header/>
     <Container>
     <ReceiptDetails>
            <ul>
                <li>
                    <Link to={'/'}>Главная<i class="fa-solid fa-angle-right"></i></Link>
                </li>
                <li>
                    <Link to={'../receipts'}>Рецепты<i class="fa-solid fa-angle-right"></i></Link>
                </li>
                <li>
                    <Link to={'../receiptdetails'}>Рецепт сыра Бри<i class="fa-solid fa-angle-right"></i></Link>
                </li>
            </ul>
                
        </ReceiptDetails>
        <div className='cheese-info'>
            <Sidebar/>
            <div className='content'>
                <div className='text'>
                    <h1>Описание сыра</h1>
                    <p>Это мягкий вид сыра, который получают из коровьего молока. Считается одним из самых вкусных французских лакомств. Его изготавливают во многих странах Европы и в разных вариациях – де Мелен, де Мо, де Куломье. Для сыра характерен бледный оттенок. Имеет «благоприятную» плесень. Отличается наличием не сильного запаха нашатыря. Его приятный вкус буквально очаровывает (чем-то напоминает камамбер). При добавлении специальных ферментов может образовываться корочка.</p>
                    <div className='images'>
                        <img src="./images/siir1.png" alt="" />
                        <img src="./images/siir2.png" alt="" />
                        <img src="./images/siir3.png" alt="" />
                        <img src="./images/siir3.png" alt="" />
                    </div>
                    
                    <p>Хорошо подходит к праздничному застолью. Сочетается с закусками, бутербродами, супами и салатами. Также этот молочный продукт часто применяют для приготовления пикантных заправок и соусов. Некоторые сочетают Бри с мясом, овощами и фруктами. Поэтому можно считать этот сыр универсальным лакомством. В его химическом составе содержится витамин А. Он помогает вырабатывать коллаген, который улучшает цвет кожи. Витамин В благоприятно влияет на нервную систему человека. Это очень сильно помогает при усталости и бессоннице.</p>
                </div>
                <div className='ingredients'>
                    <p>Ингредиенты</p>
                    <ul>
                        <li>
                            <span>Фермент – 1/8 ч.л</span>
                            <button><i class="fa-solid fa-cart-shopping"></i>В корзину</button>
                        </li>
                        <li>
                            <span>Термофильная закваска STI-12 (50U)</span>
                            <button><i class="fa-solid fa-cart-shopping"></i>В корзину</button>
                        </li>
                        <li>
                            <span>Белая плесень – 10 грамм</span>
                            <button><i class="fa-solid fa-cart-shopping"></i>В корзину</button>
                        </li>
                        <li>
                            <span>Молоко – 10 литров</span>
                        </li>
                        <li>
                            <span>20% солевой раствор: соль-1 кг, вода кипяченая-4 л, хлористый кальций- 1 ст.л, уксус столовый 9%- 1 ч.л.</span>
                        </li>
                    </ul>
            </div>
            <div className='technics'>
                <p>Оборудование</p>
                <ul>
                    <li>
                        <span>Кастрюля из нержавейки</span>
                        <button><i class="fa-solid fa-cart-shopping"></i>В корзину</button>
                    </li>
                    <li>
                        <span>Дуршлаг, шумовка и марля</span>
                        <button><i class="fa-solid fa-cart-shopping"></i>В корзину</button>
                    </li>
                    <li>
                        <span>Термометр для молока</span>
                        <button><i class="fa-solid fa-cart-shopping"></i>В корзину</button>
                    </li>
                    <li>
                        <span>Форма для сыра Бри</span>
                        <button><i class="fa-solid fa-cart-shopping"></i>В корзину</button>
                    </li>
                    <li>
                        <span>Пищивой пульвилизатор</span>
                        <button><i class="fa-solid fa-cart-shopping"></i>В корзину</button>
                    </li>
                </ul>
            </div>
                <div className='vine-txt'>
                    <h1>польза сыра</h1>
                    <p>Который значительно укрепляет костную ткань. В сыре содержится много других минералов – магний, фосфор кадий, натрий, сера, хлор и др. Но при этом практически отсутствует лактоза. Поэтому Бри могут легко употреблять в пищу люди с аллергией на лактозу.
                        Пищевая ценность сыра: в 100 граммах содержится 334 калория. Жиры – 28 грамм, холестерин – 100 мг, натрий – 629 мг, калий – 152 мг, углеводы – 0,5 грамм, белки – 21 грамм.
                        Рецепт сыра Бри достаточно простой. Вам нужно подготовить все необходимые ингредиенты и оборудование. Следуйте рекомендованному процессу приготовления и не нарушайте дозировку. В таком случае у вас обязательно получится настоящий французский сыр.</p>
                    <img src="./images/vine.png" alt="vine" />
                </div>
            </div>
        </div>
     </Container>
     <Footer/>
    </>
  )
}

export default index

const Container = styled.div`
    width: 85%;
    margin: 0 auto;

    .cheese-info{
        display: flex;
        justify-content: space-between;
        gap: 20px;

        .content{
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 70%;
            
            .text{
                display: flex;
                flex-direction: column;
                gap: 20px;
                
                p{
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 24px;
                    color: #292929;
                    opacity: 0.7;

                }
            }
        

        .images{
            img{
                padding-right: 20px;
            }
        }
        ul{
            li{
                list-style: none;
            }
        }
        .ingredients, .technics{
            display: flex;
            flex-direction: column;
            padding: 20px;
            gap: 15px;
            background-color: #F8EABF;
            border-radius: 5px;
            p{
                text-transform: uppercase;
                font-weight: 800;
                padding: 10px;
                color: #4E2D2D;
            }
            li{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 10px;
                border-top: 1px solid #E7DFC6;
            }
            button{
                width: 120px;
                height: 36px;
                background-color: #FD9339;
                border: none;
                color: #fff;
                border-radius: 2px;
                cursor: pointer;
                i{
                    padding-right: 8px;
                }
                &:hover{
                    background-color: transparent;
                    border: 2px solid #FD9339;
                    color: #FD9339;
                    transition: all .5s;
                }
            }
        }
        .vine-txt{
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin-bottom: 90px;
            h1{
                color: #4E2D2D;
            }
            p {
                font-size: 14px;
                font-weight: 400;
                line-height: 24px;
                color: #292929;
                opacity: 0.7;

            }
        }
    }
}
    
`
const ReceiptDetails = styled.div`
    ul{
    display: flex;
    margin: 30px 0px;
    gap: 30px;
    li{
      list-style: none;
      a{
        text-decoration: none;
        color: #000000;
        i{
          padding-left: 10px;
        }
      }
    }
  }
`