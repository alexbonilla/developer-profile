import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function HeroSection (props) {

  const { userdata } = props;
  const [content, setContent] = useState(null);

  useEffect(() => {

      axios.get(`/api/content/hero-subheader`)
      .then(response => {
        if(response.status === 200){
          setContent(response.data);
        }
      }).catch(error => {
        console.log('An error ocurred while requesting for content data.');
      });
  }, []);

  return (
    <section className="hero is-black is-small">
    <div className="container">
      <div className="hero-body">
        <div className="columns is-mobile">
          <div className="column is-6">
            <h1 className="title">
              {userdata.name}
            </h1>
            <h2 className="subtitle">
              {content && content.text}
            </h2>
          </div>
          <div className="column is-6">
            <a href={userdata.html_url} target="_new">{userdata.login}</a>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
