import React from 'react'
import styled from 'styled-components'
import Sidebar from '../SideBar/Sidebar'
import Card from '../Card/Card'
import { Link } from 'react-router-dom'


const index = () => {
  return (
    <div className='wrapper-for-all'>
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
                
                <div className="sidebar-and-card">
                    <Sidebar/>
                    <Card/>
                </div>
            </HeaderContent>
            <MainCheeseBg>
                <img src="./images/bg-color.png" alt="bg-color" />
                <div className='cheese-bg'>
                    <img src="./images/bg-img.png" alt="" />
                </div>
                <div className='cheese-content'>
                    <img src="./images/bg-text.png" alt="" />   
                </div>
                <div className='cheese-text'>
                    <h1>Наши преимущества</h1>
                    <p>Мы лично отвечаем за качество товара и всегда с радостью поможем Вам с выбором</p>
                </div>
            </MainCheeseBg>
            <CheeseReceipt>
                <Container>
                    <h2>Мы подобрали для вас</h2>
                    <div className='receipt-info'>
                        <div className='receipt'>
                            <img src="./images/bg-receipt.png" alt="rec" />
                            <div className='text'>
                                <p>Более 1000 лучших рецептов</p>
                                <span>Мы собрали для Вас большую базу рецептов.</span>
                                <button className='btn'>Перейти</button>
                            </div>
                        </div>
                        <div className='kits'>
                        <img src="./images/bg-receipt2.png" alt="rec" />
                        <div className='text'>
                                <p>крутые Наборы для сыра</p>
                                <span>Готовые наборы сэкономят время, мы всё сделали за Вас. </span>
                                <button className='btn'>Перейти</button>
                            </div>
                        </div>
                    </div>
                    
                </Container>
            </CheeseReceipt>
            <CheeseEquipment>
                <Container>
                <h2>наше оборудование</h2>
                <div className='equipment'>
                            <img src="./images/bg-equipment.png" alt="rec" />
                            <div className='text'>
                                <p>Прессы для сыра</p>
                                <span>Пресс можно использовать для прессования твердых сыров. Он разбирается, и вы можете компактно его упаковать в коробку.</span>
                                <button className='btn'>Узнать больше</button>
                                <div className='navigation'>
                                    <button className='arrow-btn'><i class="fa-solid fa-angle-left"></i></button>
                                    <button className='arrow-btn'><i class="fa-solid fa-angle-right"></i></button>
                                </div>
                                <ul class="line">
                                    <div class="selected">
                                        <span>01</span>
                                        <span>/</span>
                                        <span>03</span>
                                    </div>
                                    <li>
                                        <a href="#" class="active"></a>
                                    </li>
                                    <li>
                                        <a href='#' className='bg'></a>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                </Container>
            </CheeseEquipment>
            <CheesePlate>
                <Container>
                    <div className='cheese-plate'>
                        <img src="./images/plate.png" alt="plate" />
                        <div className='txt'>
                            <p>Сырная тарелка</p>
                            <span>Так называется блюдо, которое состоит  из разных сортов сыра. </span>
                            <Link to={'/'}>Читать далее <i class="fa-solid fa-angle-right"></i></Link>
                        </div>
                    </div>
                </Container>
            </CheesePlate>
    </div>
  )
}

export default index

const Container = styled.div`
    width: 100%;
    margin: 0 auto;

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
                    cursor: pointer;
                }
                button:hover{
                    background-color: transparent;
                    border: 2px solid #FD9339;
                    transition: all .5s;
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
const MainCheeseBg = styled.div`
    position: relative;
    margin-top: 80px;
    overflow: hidden;
    img{
        max-width: 100vw;
    }

    .cheese-bg{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
    }
    .cheese-content{
        position: absolute;
        display: flex;
        align-items: center;
        top: 0;
        left: 0;
        z-index: 3;
        img{
            margin: 7rem;

        padding: 65px 40px 40px 100px;
        width: 80%;
        }
    }
    .cheese-text{
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 20px;
        z-index: 10;
        top: 0;
        left: 0;
        margin: 80px 0px 0px 180px;
        width: 400px;
        h1{
            font-size: 46px;
            color: #4E2D2D;
        }
        p{
            font-size: 14px;
            color: #292929;
            line-height: 24px;
        }
    }
`
const CheeseReceipt = styled.div`
    h2{
        margin-top: 70px;
        font-size: 28px;
        font-weight: 800;
        color: #4E2D2D;
    }
    .receipt-info{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 40px;
    
        .receipt{
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
                width: 330px;
                gap: 20px;
                padding: 40px;
                z-index: 2;

            }
            p{
                font-size: 25px;
                font-weight: 700;
                line-height: 32px;
                text-transform: uppercase;
                color: #4E2D2D
                
            }
            span{
                font-size: 16px;
                line-height: 24px;
                font-weight: 400;
            }
            .btn{
                    width: 132px;
                    height: 46px;
                    margin: 50px 0px;
                    background-color: #FD9339;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    font-size: 16px;
                    cursor: pointer;
            }
            .btn:hover{
                    background-color: transparent;
                    border: 2px solid #FD9339;
                    transition: all .5s;
                }
        }
        .kits {
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
                width: 330px;
                gap: 20px;
                padding: 40px;
                color: #fff;
                z-index: 2;
                p{
                font-size: 25px;
                font-weight: 500;
                line-height: 32px;
                text-transform: uppercase;

                
                }
                span{
                    font-size: 14px;
                    line-height: 21px;
                    font-weight: 400;
                }
                .btn{
                    width: 132px;
                    height: 46px;
                    margin: 50px 0px;
                    background-color: #FD9339;
                    font-size: 16px;
                    border: none;
                    border-radius: 5px;
                    color: #fff;
                    cursor: pointer;

                    .btn:hover{
                    background-color: transparent;
                    border: 2px solid #FD9339;
                    transition: all .5s;
                    } 
                }
                ul{
                    a   {
                        width: 30px;
                    }
                }
            }
               
    }
            
}
`
const CheeseEquipment = styled.div`
    margin: 100px 0px;

    h2{
        color: #4E2D2D;
    }
    .equipment{
        position: relative;
        height: 100%;

        img{
            position: absolute;
            width: 100%;
        }
        .text{
                position: relative;
                display: flex; 
                flex-direction: column;
                max-width: 500px;
                margin-top: 30px;
                gap: 20px;
                padding: 60px 0px 60px 80px;
                z-index: 2;

                p{
                    color: #4E2D2D;
                    font-size: 24px;
                    font-weight: 800;
                    text-transform: uppercase;
                }
                span{
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 24px;
                    color: #666666;
                }
                .btn{
                    width: 185px;
                    height: 56px;
                    margin: 30px 0px;
                    background-color: #FD9339;
                    font-size: 16px;
                    border: none;
                    border-radius: 5px;
                    color: #fff;
                    cursor: pointer;
                }
                .btn:hover{
                    background-color: transparent;
                    border: 2px solid #FD9339;
                    color: #FD9339;
                    transition: all .5s;
                }
                .navigation{
                    display: flex;
                    margin: 0 auto;
                    .arrow-btn{
                    width: 18px;
                    height: 20px;
                    background-color: transparent;
                    border: none;
                    cursor: pointer;
                    }
                }
                ul.line {
                    display: flex;
                    align-items: center;
                    list-style: none;

                    li {
                        a {
                        position: relative;
                        height: 2px;


                        &.active {
                            position: absolute;
                            background-color: #101010;
                            width: 29px;

                            /* &::before {
                            content: "";
                            position: absolute;
                            top: -3px;
                            left: 0;
                            width: 8px;
                            height: 8px;
                            border-radius: 100%;
                            background-color: #e8aa31;
                            } */
                        }
                        &.bg{
                            position: absolute;
                            width: 146px;
                            background-color: #4E2D2D;
                            opacity: 0.3;
                        }
                        }
                    }

                    .selected {
                        margin-right: 20px;
                        span {
                        &:first-child {
                            color: #4E2D2D;
                        }

                        color: #4E2D2D;
                        }
                    }
                }

            }
    }
`
const CheesePlate = styled.div`
    .cheese-plate{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        margin-bottom: 250px;

        img{
            max-width: 380px;
        }
        .txt{
            display: flex;
            flex-direction: column;
            gap: 10px;
            background-color: #fff;
            width: 380px;

            a{  
                padding: 15px;
                color: #FD9339;
            }
            p{
                padding: 15px;
                font-size: 16px;
                font-weight: 700;
                text-transform: uppercase;
                color: #4E2D2D;
            }
            span{
                padding-left: 15px;
                font-size: 16px;
                font-weight: 400;
                color: #000;
                opacity: 0.5;
            }
        }
    }

`