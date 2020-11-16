import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './step1.css';


const Step1 = (props) => {


  return (
    <section className="step1">
      
      <h1>Музыка максона</h1>

      <div className="choose_container">
        <p>Критерии отбора музыки</p>
        <div id="choose_container-answers">
          <Link to="/step1genre"><button className="button success">По жанру</button></Link>
          <Link to="/step1artist"><button className="button success">По исполнителю</button></Link>
          <Link to="/step1search"><button className="button success">Через поиск конкретный трек</button></Link>
          <Link to="/step1recom"><button className="button success">Мне все равно, что слушать, главное дайте музыку</button></Link>
        </div>
      </div>

    </section>
  )
}

export default Step1;
