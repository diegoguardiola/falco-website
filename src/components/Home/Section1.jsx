import React from 'react'
import './Section1.scss'

function Section1() {
  return (
    <div className='section_1' style={{ height: '120vh' }}>
        <div className='header_text'>
            <h1>Automation Soultions</h1>
            <h2>for your business' unique needs</h2>
            <div className='youtube_video_container'>
                <iframe 
                    src="https://www.youtube.com/embed/Pg60fB-flus" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    </div>
  )
}

export default Section1



