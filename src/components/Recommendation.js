export default function Recommendation (props) {
    const { recommendation } = props;
    return (
      <div className="card has-background-primary-light">
        <div className="card-content">
          <div className="content">
            <h3 className="title is-12 is-white"><a href={recommendation.linkedin} target="_new">{recommendation.name}</a></h3>
            <h4 className="title is-12 is-white">{recommendation.position}</h4>
            <p className="is-grey">{recommendation.text !== null?recommendation.text:"No recommendation added yet."}</p>
            <br/>
          </div>
        </div>
      </div>
    )
  }
  