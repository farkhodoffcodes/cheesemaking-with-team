import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Not = () => {
  return (
    <div>
      <NotFound>
        <h1>Not Found</h1>
        <button><Link className='link' to='/home'>Главная</Link></button>
      </NotFound>
    </div>
  )
}

const NotFound = styled.div`
    h1{
        font-size:70px;
        display:flex;
        align-items:center;
        justify-content:center;
        position:relative;
        top:300px
    }

    button{
        font-size:28px;
        display:flex;
        align-items:center;
        justify-content:center;
        position:relative;
        top:320px;
        width:212px;
        height:56px;
        border:none;
        margin:0 auto;
        background-color:transparent;
        font-weight:bold;
        transition:all 0.3s ease-in;

        .link{
            color:#000;

            &:hover{
                color:red;
                transition:all 0.3s ease-in;
            }
        }
    }

`

export default Not
