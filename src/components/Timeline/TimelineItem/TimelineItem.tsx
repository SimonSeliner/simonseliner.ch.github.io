import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';
import React from 'react';

type TimelineItemProps = {
  period: string;
  title: string;
  children?: React.ReactNode;
  awesomeFontLibrary?: IconPrefix;
  awesomeFontIcon?: IconName;
};

const TimelineItem = (props: TimelineItemProps): JSX.Element => {
  const { period, title, children, awesomeFontLibrary, awesomeFontIcon } =
    props;
  return (
    <div className="TimelineItem">
      <div className="TimelineItem-Dot" />
      <div className="TimelineItem-Period">{period}</div>
      {awesomeFontLibrary && awesomeFontIcon ? (
        <div className="TimelineItem-Title">
          <FontAwesomeIcon
            className="TimelineItem-TitleIcon"
            icon={[awesomeFontLibrary, awesomeFontIcon]}
          />
          {title}
        </div>
      ) : (
        <div className="TimelineItem-Title">
          <div className="TimelineItem-TitleText">{title}</div>
        </div>
      )}
      {children}
    </div>
  );
};

export default TimelineItem;
