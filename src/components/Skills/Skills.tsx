import './Skills.scss';
import ProgressBar from '../ProgressBar/ProgressBar';
import { data } from '../../assets/data';

const Skills = (): JSX.Element => {
  return (
    <div className="Section">
      <div className="TileTitle">Professional Skills</div>
      <div className="Skills Tile">
        <div className="Skills-Items">
          {data.skills.map((skill, i) => {
            return (
              <ProgressBar
                key={skill.name}
                cssClass="Skills-ProgressBar"
                name={skill.name}
                progress={skill.progress}
                image={skill.img}
                imageAlt={skill.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
