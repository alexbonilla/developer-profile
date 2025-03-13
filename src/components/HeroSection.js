import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';

export default function HeroSection (props) {

  const { userdata } = props;
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);

  useEffect(() => {

      axios.get(`/api/content/hero-text`)
      .then(response => {
        if(response.status === 200){
          setContent(response.data);
        }
      }).catch(error => {
        console.log('An error ocurred while requesting for content data.');
      });
  }, []);

  useEffect(() => {

    axios.get(`/api/content/hero-title`)
    .then(response => {
      if(response.status === 200){
        setTitle(response.data);
      }
    }).catch(error => {
      console.log('An error ocurred while requesting for content data.');
    });
}, []);

  return (
    <section id="about-me" className="hero is-black is-small">
    <div className="container">
      <div className="hero-body">
        <div className="columns is-multiline">          
          <div className="column is-6">            
            <Image src={`/images/dev_${Math.floor(Math.random() * 3)}.webp`} className="profile_image" alt="Random Developer"/>
          </div>
          <div className="column is-6">
            <h1 className="title">
              {title && title.text}
            </h1>
            <h2 className="subtitle">
              {content && content.text}
            </h2>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
