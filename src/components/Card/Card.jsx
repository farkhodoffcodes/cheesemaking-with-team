import React, { useState, useEffect } from 'react';

const Card = () => {
  const [ingredients, setIngredients] = useState([]);
  const [plate, setPlate] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/db.json');
        const jsonData = await response.json();
        setIngredients(jsonData.ingredients);
        setPlate(jsonData.plate);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="card-block">
      {/* <div className="ingredients--promo">
        <div className="ingredients-h4">Популярные товары</div>
        <div className="promo-p">Акции</div>
      </div> */}
      <div className="card-h2-ingredients">Ингредиенты</div>
      <div className="block-of-card">
        <div className="block-one">
          {ingredients.map((ingredient) => (
            <div className="home-block-of-card" key={ingredient.id}>
              <img src={ingredient.image} alt={ingredient.title} />
              <div className="two-circles">
                <div className="first-circle"></div>
                <div className="second-circle"></div>
              </div>
              <p>{ingredient.title}</p>
              <div className="hr-line"></div>
              <div className="txt-btn-component">
                <div className="text-prices">
                  <div className="price-and-things">
                  <p className='price-p'>{ingredient.price}₽</p>
                  /
                  <p className='things-p'>{ingredient.things}</p>
                  </div>
                  <p className='second-price-p'>{ingredient.secondPrice}₽</p>
                </div>
                <button>Добавить</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="card-h2-ingredients">Оборудование</div>
      <div className="block-of-card">
        <div className="block-one">
          {ingredients.map((ingredient) => (
            <div className="home-block-of-card" key={ingredient.id}>
              <img src={ingredient.image} alt={ingredient.title} />
              <div className="two-circles">
                <div className="first-circle"></div>
                <div className="second-circle"></div>
              </div>
              <p>{ingredient.title}</p>
              <div className="hr-line"></div>
              <div className="txt-btn-component">
                <div className="text-prices">
                  <div className="price-and-things">
                  <p className='price-p'>{ingredient.price}₽</p>
                  /
                  <p className='things-p'>{ingredient.things}</p>
                  </div>
                  <p className='second-price-p'>{ingredient.secondPrice}₽</p>
                </div>
                <button>Добавить</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;