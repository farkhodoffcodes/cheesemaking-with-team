import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// const country = [
//     {
//         id: 1,
//         name: "Аккурган",
//         link: "Аккурган"
//     }
// ]

const Header = () => {
    return (
        <>
            <HeaderTop>
                <Container>
                    <div className='headerTop__inner'>
                    <button>
                        <i class="fa-solid fa-location-dot"></i>
                        <p>Gorod: <span>Tashkent</span></p>
                    </button>

                    <Link to='punkt'>Punkt</Link>

                    <p>Dostavka</p>

                    <a href="#">Uzum</a>

                    <Link to='punkt'>Punkt</Link>


                    <select name="lang" id="lang">
                        <option value="eng">Eng</option>
                        <option value="rus">Rus</option>
                    </select>
                    </div>
                </Container>
            </HeaderTop>
            <HeaderMedium>
            </HeaderMedium>
        </>
    )
}

const Container = styled.div`
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 20px;
`

const HeaderTop = styled.div`
    background-color: #F3F4F7;
    font-size: 14px;
  

    .headerTop__inner {
        display:flex;
        align-items:center;
        justify-content: space-around;

        button {
            display:flex;
            gap:10px;
            align-items:center;
        }
    }
`
const HeaderMedium = styled.div``

export default Header