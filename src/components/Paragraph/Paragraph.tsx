import { Paragraph as ParagraphModel } from '../../model';
import './Paragraph.scss';

type ParagraphProps = {
  paragraph: ParagraphModel;
};

const Paragraph = (props: ParagraphProps): JSX.Element => {
  const { paragraph } = props;

  return (
    <p className="Paragraph">
      {paragraph.spanItems &&
        paragraph.spanItems.map((item, i) => {
          return item.link ? (
            <a key={i} href={item.link}>
              {item.text}
            </a>
          ) : (
            <span key={i}>{item.text}</span>
          );
        })}
    </p>
  );
};

export default Paragraph;
