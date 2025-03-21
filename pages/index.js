import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import MainNav from '../src/components/MainNav.js'
import HeroSection from '../src/components/HeroSection.js'
import SkillCard from '../src/components/SkillCard.js'
import SocialNetworkCard from '../src/components/SocialNetworkCard.js'
import ProjectCard from '../src/components/ProjectCard.js'
import BackToTop from "../src/components/BackToTop";

export default function Home() {

  const [userdata, setUserdata] = useState(false);
  const [skillsdata, setSkillsdata] = useState(null);
  const [reposdata, setReposdata] = useState(null);
  const [credlydata, setCredlydata] = useState(null);
  const [socialnetwork, setSocialnetwork] = useState(null);
  const [loading, setLoading] = useState(true);

  let socialnetwork_ig = {}

  useEffect(() => {

    axios.get(`https://api.github.com/users/alexbonilla`)
      .then(response => {
        if (response.status === 200) {
          setUserdata(response.data);
        }
        setLoading(false);
      }).catch(error => {
        console.log('An error ocurred while requesting for user data.');
        setLoading(false);
      });
  }, []);
  

  useEffect(() => {

    axios.get(`/api/credly/`)  
      .then(response => {
        if (response.status === 200) {
          setCredlydata(response.data);
          console.log(response.data);
        }
        setLoading(false);
      }).catch(error => {
        console.log('An error ocurred while requesting for Credly data.');
        setLoading(false);
      });
  }, []);

  useEffect(() => {

    axios.get(`/api/skills/`)
      .then(response => {
        if (response.status === 200) {
          setSkillsdata(response.data);
        }
        setLoading(false);
      }).catch(error => {
        console.log('An error ocurred while requesting for socialnetwork data.');
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    if (userdata) {
      axios.get(userdata.repos_url + '?sort=updated&per_page=8')
        .then(response => {
          if (response.status === 200) {
            // Sort repositories by 'updated_at' in descending order
            const repos = response.data;
            const sortedRepos = repos.sort(
              (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
            );
            setReposdata(sortedRepos);
          }
          setLoading(false);
        }).catch(error => {
          console.log('An error ocurred while requesting for repos data.');
          setLoading(false);
        });
    }
    setLoading(false);
  }, [userdata]);

  useEffect(() => {

    axios.get(`/api/socialnetwork/`)
      .then(response => {
        if (response.status === 200) {
          setSocialnetwork(response.data);
        }
        setLoading(false);
      }).catch(error => {
        console.log('An error ocurred while requesting for socialnetwork data.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <>Loading...</>
  } else

    return (
      <>
        {
          userdata && <MainNav userdata={userdata} />
        }
        <br />
        {
          userdata && <HeroSection userdata={userdata} />
        }

        <section id="skills" className="container mt-4 mb-6">
          <h2 className="title is-12 has-text-centered my-6">Skills</h2>
          <div className="columns is-multiline">
            {
              skillsdata && skillsdata.map((record) => {
                return <div className="column is-4" key={uuidv4()}><SkillCard skill={record} key={uuidv4()} /></div>
              }
              )
            }
          </div>
        </section>

        <section id="repos" className="container">
          <h2 className="title is-12 has-text-centered my-6">GitHub repositories</h2>
          <div className="columns is-multiline">
            {
              reposdata && reposdata.map((repo) => {
                return <div className="column is-3" key={uuidv4()}><ProjectCard repo={repo} key={uuidv4()} /></div>
              }
              )
            }
          </div>
        </section>

        <section id="other-links" className="container mt-4 mb-6">
          <h2 className="title is-12 has-text-centered my-6">Other Links</h2>
          <div className="columns is-multiline">
            {
              socialnetwork && socialnetwork.map((record) => {
                return <div className="column is-4" key={uuidv4()}><SocialNetworkCard socialnetwork={record} key={uuidv4()} /></div>
              }
              )
            }
          </div>
        </section>

        <BackToTop />

        <footer className="footer mt-6">
          <div className="content has-text-centered">
            <p>
              <strong>Developed by {userdata.name}.</strong> The source code is licensed
              <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
            </p>
          </div>
        </footer>
      </>
    )
}
