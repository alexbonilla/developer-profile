import Image from 'next/image'

export default function MainNav (props) {
  const { userdata } = props;
  return (
    <nav className="navbar mt-2">
      <div className="container">
        <div className="navbar-brand">
          <figure className="image is-64x64">
            <Image className="is-rounded" src={(userdata?userdata.avatar_url:"https://bulma.io/images/placeholders/64x64.png")} width="64" height="64" alt="alexbonilla"/>
          </figure>
          <div className="navbar-burger burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
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
        </div>
      </nav>
  )
}
