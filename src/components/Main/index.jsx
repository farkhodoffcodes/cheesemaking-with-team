import React from 'react'
import styled from 'styled-components'
import Sidebar from '../SideBar/Sidebar'

const index = () => {
  return (
    <>
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
    </>
  )
}

export default index

const Container = styled.div`
    width: 85%;
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