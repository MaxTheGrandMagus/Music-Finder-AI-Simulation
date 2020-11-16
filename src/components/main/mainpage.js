import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './mainpage.css';


const MainPage = (props) => {

  const handleMessage = () => {
    alert('До скорой встречи!')
  }

  return (
    <section className="main">
      
      <h1>Добро пожаловать</h1>

      <div className="choose_container">
        <p>Хотите подобрать музыку под свой вкус?</p>
        <div id="choose_container-answers">
          <Link to='/step1'><button className="button success">Да!</button></Link>
          <Link><button onClick={handleMessage} className="button denial">Нет. Я случайно сюда зашел</button></Link>
        </div>
      </div>

    </section>
  )
}

export default MainPage;
