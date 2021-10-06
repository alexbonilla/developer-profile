export default function HeroSection (props) {
  const { userdata } = props;
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
              Software Developer and Aficionado Musician
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
