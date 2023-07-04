export default function ProjectCard (props) {
  const { repo } = props;
  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h3 className="title is-12"><a href={repo.html_url} target="_new">{repo.name}</a></h3>
          <p>{repo.description !== null?repo.description:"No description added yet."}</p>
          {repo.homepage!=null?(<div className="homepage_url"><a href={repo.homepage} target="_new">Homepage</a></div>):(<br/>)}
          <label>Stargazers:</label> <span>{repo.stargazers_count}</span>
          <br/>
          {
            repo.language &&  <span className="tag my-3">{repo.language}</span>
          }
          <br/>
          <ul>
            {repo.topics & repo.topics.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <time>{repo.created_at}</time>
        </div>
      </div>
    </div>
  )
}
