import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import MainNav from '../src/components/MainNav.js'
import HeroSection from '../src/components/HeroSection.js'
import SocialNetworkCard from '../src/components/SocialNetworkCard.js'
import ProjectCard from '../src/components/ProjectCard.js'


export default function Home() {

  const [userdata, setUserdata] = useState(false);
  const [reposdata, setReposdata] = useState(null);
  const [socialnetwork, setSocialnetwork] = useState(null);
  const [loading, setLoading] = useState(true);

  let socialnetwork_ig = {}

  useEffect(() => {

      axios.get(`https://api.github.com/users/alexbonilla`)
      .then(response => {
        if(response.status === 200){
          console.log(response);
          setUserdata(response.data);
        }
        setLoading(false);
      }).catch(error => {
        console.log('An error ocurred while requesting for user data.');
        setLoading(false);
      });
  }, []);

  useEffect(() => {

      axios.get(`/api/socialnetwork/`)
      .then(response => {
        if(response.status === 200){
          console.log(response);
          setSocialnetwork(response.data);
        }
        setLoading(false);
      }).catch(error => {
        console.log('An error ocurred while requesting for socialnetwork data.');
        setLoading(false);
      });
  }, []);

  useEffect(() => {
      setLoading(true);
      if(userdata){
        axios.get(userdata.repos_url)
        .then(response => {
          if(response.status === 200){
            console.log(response);
            setReposdata(response.data);
          }
          setLoading(false);
        }).catch(error => {
          console.log('An error ocurred while requesting for repos data.');
          setLoading(false);
        });
      }
      setLoading(false);
  }, [userdata]);

  if (loading) {
    return <>Loading...</>
  } else

  return (
    <>
      {
        userdata && <MainNav userdata={userdata}/>
      }
      <br/>
      {
        userdata && <HeroSection userdata={userdata}/>
      }

      <section id="about" className="container mt-4 mb-6">
        <div className="columns is-multiline">
        {
          socialnetwork && socialnetwork.map((record) =>
            {
              console.log('here');
              return <div className="column is-6"><SocialNetworkCard socialnetwork={record}  key={uuidv4()} /></div>
            }
          )
        }
        </div>
      </section>

      <section id="projects" className="container">
        <p className="title is-12 has-text-centered my-6">Projects</p>
        <div className="columns is-multiline">
        {
          reposdata && reposdata.map((repo) =>
            {
              console.log('here');
              return <div className="column is-3"><ProjectCard repo={repo} key={uuidv4()} /></div>
            }
          )
        }
        </div>
      </section>
      <footer className="footer mt-6">
        <div className="content has-text-centered">
          <p>
            <strong>Developed by Alex Bonilla.</strong> The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
          </p>
        </div>
      </footer>
      </>
  )
}
