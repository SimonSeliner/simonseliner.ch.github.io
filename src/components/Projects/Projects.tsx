import './Projects.scss';
import ProjectItem from '../ProjectItem/ProjectItem';
import { data } from '../../assets/data';
import Paragraph from '../Paragraph/Paragraph';

const Projects = (): JSX.Element => {
  return (
    <div className="Projects Section">
      <div className="Projects-Header">
        <div className="TileTitle">Projects</div>
      </div>
      <div className="Projects-List">
        {data.projects.map((p, i) => {
          return (
            <ProjectItem
              key={i}
              period={p.period}
              title={p.title}
              image={p.img}
              projectLinks={p.projectLinks}
            >
              {p.paragraphs.map((paragraph, j) => {
                return <Paragraph key={j} paragraph={paragraph} />;
              })}
            </ProjectItem>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
