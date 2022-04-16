import './ProgressBar.scss';
import { data } from '../../assets/data';

type ProgressBarProps = {
  cssClass: string;
  name: string;
  image?: string;
  imageAlt?: string;
  progress: number;
};

const ProgressBar = (props: ProgressBarProps): JSX.Element => {
  const { cssClass, name, image, imageAlt, progress } = props;
  return (
    <div className={buildClassName('ProgressBar', cssClass)}>
      <div className="ProgressBar-Title">
        {image && (
          <img src={image} alt={imageAlt} className="ProgressBar-Image" />
        )}
        <span>{name}</span>
      </div>
      <div className="ProgressBar-Bar">
        <div className="ProgressBar-Progress" style={{ width: progress + '%' }}>
          <div className="ProgressBar-Level">{getSkillLevel(progress)}</div>
        </div>
      </div>
    </div>
  );
};

const buildClassName = (cn: string, cssClass: string): string => {
  return cn + ' ' + cssClass;
};

const getSkillLevel = (progress: number): string => {
  for (let i = 0; i < data.skillLevels.length; i++) {
    if (
      progress >= data.skillLevels[i].fromProgress &&
      progress <= data.skillLevels[i].upToProgress
    ) {
      return data.skillLevels[i].name;
    }
  }
  return '';
};

export default ProgressBar;
