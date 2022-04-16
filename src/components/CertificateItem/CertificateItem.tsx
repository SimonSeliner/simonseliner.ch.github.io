import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Certificate } from '../../model';
import './CertificateItem.scss';

type CertificateItemProps = {
  certificate: Certificate;
};

const CertificateItem = (props: CertificateItemProps): JSX.Element => {
  const { certificate } = props;
  return (
    <div className="CertificateItem Tile">
      <div className="CertificateItem-ImgWrap">
        <img
          className="CertificateItem-Img"
          src={certificate.img}
          alt={certificate.name}
        />
      </div>
      <div className="CertificateItem-Title">
        <span>{certificate.name}</span>
      </div>
      <div className="CertificateItem-DigitalBadge">
        <a
          href={certificate.digitalBadge}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={['fas', 'certificate']} />
          <span>Digital Badge</span>
        </a>
      </div>
      <div className="CertificateItem-Id">
        <span>Certificate-ID: </span>
        <span>{certificate.certificateId}</span>
      </div>
    </div>
  );
};

export default CertificateItem;
