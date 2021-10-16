import Image from 'next/image'
import Script from 'next/script'

export default function MainNav (props) {
  const { userdata } = props;
  return (
    <>
      <Script src="scripts/navbar-toggle.js" />
      <div className="container">
      <nav className="navbar mt-2">
          <div className="navbar-brand">
            <figure className="image is-64x64">
              <Image className="is-rounded" src={(userdata?userdata.avatar_url:"https://bulma.io/images/placeholders/64x64.png")} width="64" height="64" alt="alexbonilla"/>
            </figure>
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div id="navMenu" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" href="#">
                Home
              </a>
              <a className="navbar-item" href="#about">
                Social
              </a>
              <a className="navbar-item" href="#projects">
                Projects
              </a>
            </div>
          </div>
        </nav>
        </div>
      </>
  )
}
