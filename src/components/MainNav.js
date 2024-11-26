import { useState } from 'react';
import Image from 'next/image'

export default function MainNav (props) {
  const { userdata } = props;
  const [ active, setActive ] = useState(false);

  const activeClass = (active) ? 'is-active' : '';

  const toggleMenu = (event) => {
    event.preventDefault();

    setActive(!active);
  }

  return (
    <>
      <div className="container">
      <nav className="navbar mt-2">
          <div className="navbar-brand">
            <figure className="image is-64x64">
              <Image className="is-rounded" src={(userdata?userdata.avatar_url:"https://bulma.io/images/placeholders/64x64.png")} width="64" height="64" alt="alexbonilla"/>
            </figure>
            <a role="button" className={`navbar-burger burger ${activeClass}`} data-target="navMenu" onClick={toggleMenu}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div id="navMenu" className={`navbar-menu ${activeClass}`}>
            <div className="navbar-start">
              <a className="navbar-item" href="#about-me">
                About Me
              </a>
              <a className="navbar-item" href="#skills">
                Skills
              </a>
              <a className="navbar-item" href="#repos">
                Repositories
              </a>
              <a className="navbar-item" href="#other-links">
                Other Links
              </a>
            </div>
          </div>
        </nav>
        </div>
      </>
  )
}
