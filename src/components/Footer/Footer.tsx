import './Footer.scss';
import SocialIcon from '../SocialIcon/SocialIcon';
import { data } from '../../assets/data';

const Footer = (): JSX.Element => {
  return (
    <div className="Footer">
      <div className="Footer-Icons">
        {data.socialIcons.map((icon, i) => {
          return <SocialIcon key={i} icon={icon} />;
        })}
      </div>
      <div className="Footer-Name">{data.title}</div>
      <div className="Footer-Info">
        custom text :D at the end of the page (foot)
      </div>
    </div>
  );
};

export default Footer;


