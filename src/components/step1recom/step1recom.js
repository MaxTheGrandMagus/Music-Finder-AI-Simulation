import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import './step1recom.css';
import Pyramid from '../../content/recommended/Pyramid.mp3';
import Seinabo from '../../content/recommended/Seinabo.mp3';
import MGMT from '../../content/recommended/MGMT.mp3'


const Step1Recom = (props) => {


  return (
    <section className="step1recom">
      
      <h1>Музыка максона</h1>

      <div className="choose_container">
        <p>Рекомендованная музыка 2020</p>
        <div id="choose_container-answers">
          <AudioPlayer
            header="Pyramid - See you on the other side"
            src={Pyramid}
            volume={0.1}
          />
          <AudioPlayer
            header="Seinabo - Younger"
            src={Seinabo}
            volume={0.1}
          />
          <AudioPlayer
            header="MGMT - Little Dark Age"
            src={MGMT}
            volume={0.1}
          />
        </div>
      </div>

    </section>
  )
}

export default Step1Recom;
