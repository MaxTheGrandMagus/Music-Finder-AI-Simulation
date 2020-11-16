import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import './step1genre.css';

import Guns from '../../content/rock/Guns.mp3';
import Led from '../../content/rock/Led.mp3';
import Pantera from '../../content/rock/Pantera.mp3'

import Drake from '../../content/hip-hop/Drake.mp3';
import Kendrick from '../../content/hip-hop/Kendrick.mp3';
import Rocky from '../../content/hip-hop/Rocky.mp3'

import Ramin from '../../content/classics/Ramin.mp3';
import Sinatra from '../../content/classics/Sinatra.mp3';
import Wagner from '../../content/classics/Wagner.mp3'

import Ella from '../../content/pop/Ella.mp3';
import Jorja from '../../content/pop/Jorja.mp3';
import Weeknd from '../../content/pop/Weeknd.mp3'


const Step1Genre = (props) => {

  const [genre, setGenre] = useState('');
  const handleGenre = (event) => {
    setGenre(event.target.value)
    console.log(event.target.value);
  };

  function renderSwitch(param) {
    switch(param) {
      case 'rock':
        return <Rock />;
      case 'hiphop':
        return <HipHop />;
      case 'classics':
        return <Classics />;
      case 'pop':
        return <Pop />;
      default:
        return;
    }
  }

  return (
    <section className="step1genre">
      
      <h1>Музыка MaxON</h1>

      <div className="choose_container">
        <p>Выберите любимый жанр</p>
        <div id="choose_container-answers">
          <button onClick={handleGenre} value="rock" className="button success">Рок</button>
          <button onClick={handleGenre} value="hiphop" className="button success">Хип-хоп</button>
          <button onClick={handleGenre} value="classics" className="button success">Классика</button>
          <button onClick={handleGenre} value="pop" className="button success">Поп</button>
        </div>
        { renderSwitch(genre) }
      </div>

    </section>
  )
}

export default Step1Genre;


export const Rock = () => {
  return(
    <div className="music-container">
      <AudioPlayer
        header="Guns'N'Roses - Paradise city"
        src={Guns}
        volume={0.1}
      />
      <AudioPlayer
        header="Led Zeppelin - Whole Lotta Red"
        src={Led}
        volume={0.1}
      />
      <AudioPlayer
        header="Pantera - Cowboys from hell"
        src={Pantera}
        volume={0.1}
      />
    </div>
  )
}

export const HipHop = () => {
  return(
    <div className="music-container">
      <AudioPlayer
        header="Drake - Laugh now cry later"
        src={Drake}
        volume={0.1}
      />
      <AudioPlayer
        header="Kendrick Lamar - Swimming pools"
        src={Kendrick}
        volume={0.1}
      />
      <AudioPlayer
        header="A$AP Rocky - Gunz'N'Butter"
        src={Rocky}
        volume={0.1}
      />
    </div>
  )
}

export const Classics = () => {
  return(
    <div className="music-container">
      <AudioPlayer
        header="Ramin Djawadi - Blood of my Blood"
        src={Ramin}
        volume={0.1}
      />
      <AudioPlayer
        header="Frank Sinatra - Let it snow"
        src={Sinatra}
        volume={0.1}
      />
      <AudioPlayer
        header="Richard Wagner - Ride of the Valkyries"
        src={Wagner}
        volume={0.1}
      />
    </div>
  )
}

export const Pop = () => {
  return(
    <div className="music-container">
      <AudioPlayer
        header="Ella Mai - Bood' up"
        src={Ella}
        volume={0.1}
      />
      <AudioPlayer
        header="Jorja Smith - On my mind"
        src={Jorja}
        volume={0.1}
      />
      <AudioPlayer
        header="The Weeknd - Lost in the fire"
        src={Weeknd}
        volume={0.1}
      />
    </div>
  )
}