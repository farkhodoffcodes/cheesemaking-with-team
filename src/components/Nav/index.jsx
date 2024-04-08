import React from 'react'
import styled from 'styled-components'

const Nav_menu1 = () => {
  return (
    <div>
      <Nav1>
        <div className='nav_menu1-wrapper'>
        <h2>1</h2>
        </div>
      </Nav1>
    </div>
  )
}

const Nav_menu2 = () => {
    return (
      <div>
        <Nav2>
          <div className='div'>
          <div className="div2">
          <h3>Выберите фильтр</h3>
          <hr />
          <ol>
            <li >
                <input type="checkbox" id='input1'/>
                <label htmlFor="input1"> Закваски для йогурта</label>
            </li>

            <li>
                <input  id='input2' type="checkbox" />
                <label htmlFor="input2">Закваски для творога</label>
            </li>
            <li>
                <input id='input3' type="checkbox" />
                <label htmlFor="input3">Закваска для ряженки</label>
            </li>
            <li>
                <input id='input4' type="checkbox" />
                <label htmlFor="input4">Закваски для йогурта</label>
            </li>
            <li>
                <input id='input5' type="checkbox" />
                <label htmlFor="input5">Закваски Скваска</label>
            </li>
            <li>
                <input id='input6' type="checkbox" />
                <label htmlFor="input6">Закваски Каприна</label>
            </li>
            <li>
                <input id='input7' type="checkbox" />
                <label htmlFor="input7">Закваски для кефира</label>
            </li>
          </ol>

          <button>Применить</button>
          </div>
          </div>
        </Nav2>
      </div>
    )
  }

  const Nav_menu3 = () => {
    return (
      <div>
        <Nav3>
          <div className='div'>
          <h2>3</h2>
          </div>
        </Nav3>
      </div>
    )
  }

  const Nav_menu4 = () => {
    return (
      <div>
        <Nav4>
          <div className='div'>
          <h2>4</h2>
          </div>
        </Nav4>
      </div>
    )
  }


const Nav = styled.div`

`

const Nav1 = styled.div`
  .nav_menu1-wrapper{
    h2{
        width:240px;
        height:390px;
        background-color:red;
        position:absolute;
        left:115px;
        top:420px;
    }
  }
`

const Nav2 = styled.div`
  
  .div{
        width:250px;
        height:390px;
        background-color:#fff;
        position:absolute;
        left:300px;
        top:420px;
        
        
        

        h3{
            font-size:16px;
            line-height:24px;
            color:#292929;
            margin-bottom:-5px;
        }

        ol{
            display:flex;
            list-style:none;
            flex-direction:column;
            gap:16px;
            margin-bottom:20px;
            margin-top:20px;
            

            li{
            display:flex;
            align-items:center;
            flex-direction:row;
            gap:10px;

                input{
                    width:20px;
                    height:20px;
                }

                lable{
                    font-size:16px;
                    line-height:20px;
                    color:#808080;

                }
            
            }
        }

        button{
            width:200px;
            height:36px;
            border-radius:5px;
            border:1px solid #4E2D2D;
            font0-size:14px;
            line-height:24px;
            color:#4E2D2D;
            font-weight:bold;
            background-color:transparent;
            cursor:pointer;
            transition: all .3s ease-in;
            display:block;
            margin:0 auto;

            &:hover{
                color:#fff;
                background-color:#4E2D2D;
                transition: all .3s ease-in-out;
            }

            &:active{
                opacity:0.7;
                transition: all .3s ease-in-out;
            }
        }

    }

    .div2{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        padding:20px;
        border-radius:10px;
    }
`

const Nav3 = styled.div`
  .div{
    h2{
        width:240px;
        height:390px;
        background-color:red;
        position:absolute;
        left:500px;
        top:420px;
    }
  }
`

const Nav4 = styled.div`
  .div{
    h2{
        width:240px;
        height:390px;
        background-color:red;
        position:absolute;
        left:690px;
        top:420px;
    }
  }
`
export {Nav_menu2, Nav_menu1, Nav_menu3, Nav_menu4}
