import Image from 'next/legacy/image'
import {formatDate} from "../utils/utils"

export default function Badge(props) {
    const { badge } = props;
    return (
        <div className="badge">
            <div className="card-content">
                <div className="content">
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                    }}>
                        <Image className="is-rounded center-image" src={(badge.badge_template.image.url?badge.badge_template.image.url:"https://bulma.io/images/placeholders/64x64.png")} width="64" height="64" alt="alexbonilla"/>
                    </div>
                    <h3 className="title is-12"><a href={`https://www.credly.com/badges/${badge.id}`} target="_new">{badge.badge_template.name}</a></h3>                    
                    {
                        badge.issuer.summary && <p>{badge.issuer.summary}</p>
                    }                    
                    <label>Issued:</label>
                    <time>{formatDate(badge.issued_at)}</time>
                    <ul>
                        {
                            Array.isArray(badge.badge_template.skills) && badge.badge_template.skills.map((skill) => {
                                return <li>{skill.name}</li>
                            }
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
