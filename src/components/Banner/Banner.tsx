//typescript -> structure and so on.

import './Banner.scss';
import SocialIcon from '../SocialIcon/SocialIcon';
import { data } from '../../assets/data';

const Banner = (): JSX.Element => {
  return (
    <div className="Banner">
      <img
        className="Banner-Image"
        src={data.bannerImg}
        alt={data.bannerImgAlt}
      />
      <div className="Banner-Content">
        <a href={data.profileImg} rel="noopener noreferrer" target="_blank">
          <img
            className="Banner-Content-ProfileImage"
            src={data.profileImg}
            alt={data.profileImgAlt}
          />
        </a>
        <div className="Banner-Content-Name">{data.title}</div>
        <div className="Banner-Content-Description">{data.subtitle}</div>
      </div>
      <div className="Banner-Social">
        {data.socialIcons.map((icon, i) => {
          return <SocialIcon key={i} icon={icon} />;
        })}
      </div>
    </div>
  );
};

export default Banner;
