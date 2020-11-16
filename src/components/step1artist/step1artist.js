import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import Pyramid from '../../content/recommended/Pyramid.mp3';
import Seinabo from '../../content/recommended/Seinabo.mp3';
import MGMT from '../../content/recommended/MGMT.mp3'

import Mirbek from '../../content/notforeign/Mirbek.mp3';
import Begish from '../../content/notforeign/Begish.mp3';
import Aitchy from '../../content/notforeign/Aitchy.mp3';

import './step1artist.css';


const Step1Artist = (props) => {

  const [foreign, setforeign] = useState();
  const handleForeign = () => {
    setforeign(!foreign);
    console.log(foreign);
  };

  return (
    <section className="step1artist">
      
      <h1>Музыка максона</h1>

      <div className="choose_container">
        <p>Зарубежный исполнитель?</p>
        <div id="choose_container-answers">
          <button onClick={handleForeign} className="button success">{ foreign === true ? <p>Да</p> : <p>Нет</p>}</button>
        </div>
        { foreign === true ? <Foreign /> : <NonForeign /> }
      </div>

    </section>
  )
}

export default Step1Artist;


export const Foreign = () => {
  return(
    <div className="music-container">
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
  )
}


export const NonForeign = () => {
  return(
    <div className="music-container">
      <AudioPlayer
        header="Мирбек Атабеков - Мурас"
        src={Mirbek}
        volume={0.1}
      />
      <AudioPlayer
        header="Бегиш - Саясат"
        src={Begish}
        volume={0.1}
      />
      <AudioPlayer
        header="Бегиш, Мирбек Атабеков, Баястан - Айтчы"
        src={Aitchy}
        volume={0.1}
      />
    </div>
  )
}