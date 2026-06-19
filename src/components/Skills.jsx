import './skill'
const fruits=['Apple','Banana','Mango']

{fruits.map((fruit)=>(
    <li key={fruit}>{fruit}</li>
))
}


const SkillCard()

function SkillCard({ name, icon, level, category })
return (
    <div className="skill-card">
        <div className="skill_card_header">
            <span className="skill-card_icon">{icon}</span>
            <div>
                <h3 className="skill-card_name"></h3>
            </div>
        </div>
    </div>
)