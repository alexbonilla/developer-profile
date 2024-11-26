export default function SkillCard (props) {
  const { skill } = props;
  return (
    <div className="card has-background-primary-light">
      <div className="card-content">
        <div className="content">
          <h3 className="title is-12 is-white">{skill.description}</h3>
          <p className="is-grey">{skill.experience}</p>
          <br/>
        </div>
      </div>
    </div>
  )
}
