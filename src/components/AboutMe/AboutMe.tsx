import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { data } from '../../assets/data';
import Paragraph from '../Paragraph/Paragraph';
import './AboutMe.scss';

const AboutMe = (): JSX.Element => {
  const getAgeByBirthday = (birthday: Date): number => {
    var diffInMilliseconds = Date.now() - birthday.getTime();
    var ageDate = new Date(diffInMilliseconds);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const getLanguages = (): string => {
    return data.bio.languages.join(', ');
  };

  return (
    <div className="AboutMe Tile Section">
      <div className="AboutMe-About">
        <div className="TileTitle">About Me</div>
        {data.aboutMe.paragraphs.map((p, i) => {
          return <Paragraph key={'AboutMe-' + i} paragraph={p} />;
        })}
      </div>
      <div className="AboutMe-Bio">
        <div className="TileTitle">Bio</div>
        <div className="AboutMe-Bio-Item">
          <div className="AboutMe-Bio-Item-Name">
            <div className="AboutMe-Bio-IconContainer">
              <FontAwesomeIcon
                className="AboutMe-Bio-Icon fas signature"
                icon={['fas', 'signature']}
              />
            </div>
            <div>Name</div>
          </div>
          <div className="AboutMe-Bio-Item-Value">
            {data.bio.firstName} {data.bio.lastName}
          </div>
        </div>
        <div className="AboutMe-Bio-Item">
          <div className="AboutMe-Bio-Item-Name">
            <div className="AboutMe-Bio-IconContainer">
              <FontAwesomeIcon
                className="AboutMe-Bio-Icon"
                icon={['fas', 'calendar-alt']}
              />
            </div>
            <div>Age</div>
          </div>
          <div className="AboutMe-Bio-Item-Value">
            {getAgeByBirthday(new Date(data.bio.birthday))}
          </div>
        </div>
        <div className="AboutMe-Bio-Item">
          <div className="AboutMe-Bio-Item-Name">
            <div className="AboutMe-Bio-IconContainer">
              <FontAwesomeIcon
                className="AboutMe-Bio-Icon"
                icon={['fas', 'graduation-cap']}
              />
            </div>
            <div>Degree</div>
          </div>
          <div className="AboutMe-Bio-Item-Value">{data.bio.degree}</div>
        </div>
        <div className="AboutMe-Bio-Item">
          <div className="AboutMe-Bio-Item-Name">
            <div className="AboutMe-Bio-IconContainer">
              <FontAwesomeIcon
                className="AboutMe-Bio-Icon"
                icon={['fas', 'globe']}
              />
            </div>
            <div>Languages</div>
          </div>
          <div className="AboutMe-Bio-Item-Value">{getLanguages()}</div>
        </div>
        <div className="AboutMe-Bio-Item">
          <div className="AboutMe-Bio-Item-Name">
            <div className="AboutMe-Bio-IconContainer">
              <FontAwesomeIcon
                className="AboutMe-Bio-Icon"
                icon={['fas', 'envelope']}
              />
            </div>
            <div>Email</div>
          </div>
          <div className="AboutMe-Bio-Item-Value">{data.bio.email}</div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
