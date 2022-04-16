import React from 'react';
import './ProjectItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { ProjectLink } from '../../model';

type ProjectItemProps = {
  period: string;
  title: string;
  image: string;
  imageAlt?: string;
  projectLinks?: ProjectLink[];
  children?: React.ReactNode;
};

const ProjectItem = (props: ProjectItemProps): JSX.Element => {
  const { period, title, image, imageAlt, projectLinks, children } = props;

  return (
    <div className="ProjectItem Tile">
      <div className="ProjectItem-ImageContainer">
        <img className="ProjectItem-Image" src={image} alt={imageAlt} />
      </div>
      <div className="ProjectItem-Header">{title}</div>
      <div className="ProjectItem-Description">{children}</div>
      <div className="ProjectItem-Links">
        {projectLinks?.map((item) => {
          return (
            <a
              key={item.name + item.link}
              className="ProjectItem-FooterLink"
              href={item.link}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                className="ProjectItem-LinkIcon"
                icon={item.awesomeFontIcon as IconProp}
              />
              <div className="ProjectItem-LinkTitle">{item.name}</div>
            </a>
          );
        })}
      </div>
      <div className="ProjectItem-Period">{period}</div>
    </div>
  );
};

export default ProjectItem;
