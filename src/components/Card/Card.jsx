import React, {useState, useEffect } from 'react'

const Api_url = "/api/db.json"
const Card = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
      const response = await fetch(Api_url)
      const json = await response.json()
      setData(json)
      } catch (error) {
        console.log("error", error)
      }
    }
    fetchData()
  }, [])
  return (
    <div className="card-block">
      <div className="ingredients--promo">
        <div className="ingredients-h4">Популярные товары</div>
        <div className="promo-p">Акции</div>
      </div>
      <div className="card-h2-ingredients">Ингредиенты</div>
      <div className="block-of-card">
        <div className="block-one">
            <div className="home-block-of-card">

            </div>
            <div className="home-block-of-card">
              
            </div>
            <div className="home-block-of-card">
              
            </div>
            <div className="home-block-of-card">
              
            </div>
        </div>
        <div className="block-one">
            <div className="home-block-of-card">

            </div>
            <div className="home-block-of-card">
              
            </div>
            <div className="home-block-of-card">
              
            </div>
            <div className="home-block-of-card">
              
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card
