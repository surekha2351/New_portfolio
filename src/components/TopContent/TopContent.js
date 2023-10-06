import React from 'react'
import { Link } from 'react-scroll'
import './TopContent.css';


const TopContent = () => {
  return (
    <div className='topContent'>
      <div className='topContent_container'>
        <h1>SUREKHA YERRABATTI</h1>
        <p>A Passionate Web and Front-End Developer</p>
        <a href='https://drive.google.com/file/d/1HjOFMsT4-lKUKtBai1pTS0IiroMUj0ox/view?usp=sharing'>
            <button className='topContent_downloadButton'>Download CV </button>
        </a>
        <Link to= "projects" smooth = {true} duration = {500}>
            <button className='topContent_workButton'>My Work</button>
        </Link>
      </div>
    </div>
  )
}

export default TopContent