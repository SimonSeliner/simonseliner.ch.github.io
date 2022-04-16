import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Paragraph as ParagraphModel } from '../../../model';
import Paragraph from '../../Paragraph/Paragraph';
import './TimelineWorkDescription.scss';

type TimelineWorkDescriptionProps = {
  employer: string;
  employerLink: string | null;
  employmentRate: string;
  paragraphs: ParagraphModel[];
};

const TimelineWorkDescription = (
  props: TimelineWorkDescriptionProps,
): JSX.Element => {
  const { employer, employerLink, employmentRate, paragraphs } = props;

  return (
    <div className="TimelineWorkDescription">
      <div className="TimelineWorkDescription-Employer">
        {employerLink ? (
          <a href={employerLink} rel="noopener noreferrer" target="_blank">
            <FontAwesomeIcon
              className="TimelineWorkDescription-EmployerIcon"
              icon={['fas', 'briefcase']}
            />
            {employer}
          </a>
        ) : (
          <div>
            <FontAwesomeIcon
              className="TimelineWorkDescription-EmployerIcon"
              icon={['fas', 'briefcase']}
            />
          </div>
        )}
      </div>
      <div className="TimelineWorkDescription-EmploymentRate">
        {employmentRate}
      </div>
      <div className="TimelineWorkDescription-Description">
        {paragraphs.map((p, i) => {
          return <Paragraph key={i} paragraph={p} />;
        })}
      </div>
    </div>
  );
};

export default TimelineWorkDescription;
