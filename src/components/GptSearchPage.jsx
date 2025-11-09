import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMoviesSuggestion from './GptMoviesSuggestion';
import { PROFILE_BG } from '../utils/constants';

const GptSearchPage = () => {
  return (
    <div>
      <div className='absolute -z-20'>
      <img src={PROFILE_BG} alt="BG-IMG" />
      </div>
      <GptSearchBar/>
      <GptMoviesSuggestion/>
    </div>
  )
}

export default GptSearchPage;