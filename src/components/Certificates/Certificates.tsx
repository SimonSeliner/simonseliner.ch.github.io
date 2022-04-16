import { data } from '../../assets/data';
import CertificateItem from '../CertificateItem/CertificateItem';
import './Certificates.scss';

const Certificates = (): JSX.Element => {
  if (data.certificates.length == 0) {
    return <></>;
  }

  return (
    <div className="Section">
      <div className="Certificates">
        <div className="TileTitle">Certificates</div>
        {data.certificates.map((c, i) => {
          return <CertificateItem key={i} certificate={c} />;
        })}
      </div>
    </div>
  );
};

export default Certificates;
