import React from 'react';
import './Timeline.scss';

type TimelineProps = {
  children?: React.ReactNode;
};

const Timeline = (props: TimelineProps): JSX.Element => {
  const { children } = props;
  return <div className="Timeline">{children}</div>;
};

export default Timeline;
