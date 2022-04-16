import './SocialIcon.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { SocialIcon as SocialIconModel } from '../../model';

type SocialIconProps = {
  icon: SocialIconModel;
};

const SocialIcon = (props: SocialIconProps): JSX.Element => {
  const { icon } = props;
  return (
    <a
      className="SocialIcon"
      href={icon.link}
      rel="noopener noreferrer"
      target="_blank"
    >
      <FontAwesomeIcon
        className="SocialIcon-Icon"
        icon={icon.awesomeFontIcon as IconProp}
      />
      <span className="SocialIcon-Tooltip">{icon.name}</span>
    </a>
  );
};

export default SocialIcon;
