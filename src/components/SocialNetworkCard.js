export default function SocialNetworkCard (props) {
  const { socialnetwork } = props;
  return (
    <div className="card has-background-primary-light">
      <div className="card-content">
        <div className="content">
          <h3 className="title is-12 is-white"><a href={socialnetwork.html_url} target="_new">{socialnetwork.name}</a></h3>
          <p className="is-grey">{socialnetwork.description !== null?socialnetwork.description:"No description added yet."}</p>
          <br/>
        </div>
      </div>
    </div>
  )
}
