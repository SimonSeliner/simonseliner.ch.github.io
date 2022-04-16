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
        Built with{' '}
        <a
          href="https://reactjs.org/"
          rel="noopener noreferrer"
          target="_blank"
        >
          React
        </a>
        .
      </div>
    </div>
  );
};

export default Footer;
