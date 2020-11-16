import React, { useState, Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import YTSearch from 'youtube-api-v3-search';
import _ from 'lodash';

import './step1search.css';


const API_KEY = 'AIzaSyCKA3HbYEyfKj8eXLFuAivNjmzsDCetmRc';


const youtubeapi = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
      part: 'snippet',
      maxResults: 6,
      key: API_KEY
  }
})


class Step1Search extends Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  handleSubmit = async (termFromSearchBar) => {
    const response = await youtubeapi.get('/search', {
      params: {
        q: termFromSearchBar
      }
    })
    this.setState({
      videos: response.data.items
    })
  };

  handleVideoSelect = (video) => {
    this.setState({selectedVideo: video})
  }


  render() {


    return (
      <section className="step1search">
        
        <h1>Музыка максона</h1>
  
        <div className="choose_container">
          <p>Поиск</p>
          <div className='container' style={{marginTop: '1em'}}>
            <SearchBar handleFormSubmit={this.handleSubmit}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
          </div>
        </div>
  
      </section>
    )
  }
}

export default Step1Search;



export class SearchBar extends Component {

  state = {
    term: 'goosebumps'
  };

  handleChange = (event) => {
    this.setState({
      term: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.term);
  }

  render() {
    return (
      <div className='search-bar ui segment'>
        <form onSubmit={this.handleSubmit} className='ui form'>
          <div className='field'>
            <input onChange={this.handleChange} name='video-search' type="text" value={this.state.term}/>
          </div>
        </form>
      </div>
    )
  }
}


export const VideoDetail = ({video}) => {
  if (!video) {
    return <div id="loading">Loading ...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof(video));

  return (
    <>
      <div className='embed'>
        <iframe src={videoSrc} allowFullScreen title='Video player'/>
      </div>
      <div className='segment'>
        <h4 className='header'>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </>
  )
};


export const VideoList = ({videos , handleVideoSelect}) => {
  const renderedVideos =  videos.map((video) => {
    return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
    console.log(video.id);
  });
  return <div className='videos-container'>{renderedVideos}</div>;
};


export const VideoItem = ({video , handleVideoSelect}) => {
  return (
    <div onClick={ () => handleVideoSelect(video)} className='video-item item'>
      <img className='image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
      <div className='content'>
        <div className='header '>{video.snippet.title}</div>
      </div>
    </div>
  )
};