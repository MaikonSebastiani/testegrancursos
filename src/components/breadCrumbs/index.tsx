import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAngleDoubleRight, faCog } from '@fortawesome/free-solid-svg-icons';
import { Container } from './styles';

const BreadCrumbs: React.FC = () => {
  const t = '';

  return (
    <Container>
      <div className="pageInformation">
        <h1>Card Actions</h1>

        <div className="vl" />

        <div className="breadCrumbs">
          <FontAwesomeIcon icon={faHome} />
          <FontAwesomeIcon icon={faAngleDoubleRight} />
          <span>ecoomerce</span>
          <FontAwesomeIcon icon={faAngleDoubleRight} />
          <span>eletronicos</span>
        </div>
      </div>

      <div className="settings">
        <FontAwesomeIcon icon={faCog} />
        <span className="textSettings">Settings</span>
      </div>
    </Container>
  );
};

export default BreadCrumbs;
