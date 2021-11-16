import React, { useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome, faChevronDown, faChevronRight, faAngleDoubleRight, faTint, faBorderAll, faWindowRestore,
} from '@fortawesome/free-solid-svg-icons';
import {
  faCircle, faEnvelope, faCommentAlt, faTimesCircle, faCheckSquare, faCalendar, faAddressCard, faFolderOpen, faCheckCircle, faFileAlt, faClone, faWindowMaximize,
} from '@fortawesome/free-regular-svg-icons';

import { Container } from './styles';
import Logo from '../../assets/images/LogoGranCursos.png';

const Menu: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleControlMenu = useCallback(() => {
    setShowMenu(true);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setShowMenu(false);
  }, []);

  return (
    <Container className={`${showMenu ? 'active' : ''}`}>
      <img src={Logo} alt="" />

      <div className="first">
        <ul>
          <li className="dashboard">
            <FontAwesomeIcon icon={faHome} />
            <p>
              Dashboard
              <FontAwesomeIcon icon={faChevronDown} className="arrow" />
            </p>

          </li>
          <li className="ecommerce">
            <FontAwesomeIcon icon={faCircle} />
            eCommerce
          </li>
        </ul>

      </div>

      <div className="list">
        <strong>APPS</strong>
        <ul>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
            <p>Email</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faCommentAlt} />
            <p>Chat</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckSquare} />
            <p>Todo</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendar} />
            <p>Calendar</p>
          </li>
        </ul>

      </div>

      <div className="list">
        <strong>UI ELEMENTS</strong>
        <ul>
          <li>
            <FontAwesomeIcon icon={faWindowRestore} />
            <p>
              Grid
              <FontAwesomeIcon icon={faChevronRight} />
            </p>
          </li>
          <li>
            <FontAwesomeIcon icon={faTint} />
            <p>Colors</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faAddressCard} />
            <p>
              Card
              <FontAwesomeIcon icon={faChevronRight} />
            </p>
          </li>
          <li>
            <FontAwesomeIcon icon={faBorderAll} />
            <p>Table</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faFolderOpen} />
            <p>
              Components
              <FontAwesomeIcon icon={faChevronRight} />
            </p>
          </li>
        </ul>
      </div>

      <div className="list">
        <strong>FORMS</strong>
        <ul>
          <li>
            <FontAwesomeIcon icon={faClone} />
            <p>
              Form Elements
              <FontAwesomeIcon icon={faChevronRight} />
            </p>
          </li>
          <li>
            <FontAwesomeIcon icon={faWindowMaximize} />
            <p>Form Layouts</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faFileAlt} />
            <p>Form Wizard</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} />
            <p>Form Validation</p>
          </li>
        </ul>
      </div>

      {!showMenu && (
      <div className="controlMenu" onClickCapture={handleControlMenu}>
        <span><FontAwesomeIcon icon={faAngleDoubleRight} /></span>
      </div>
      )}

      <div className="close" onClickCapture={handleCloseMenu}>
        <span><FontAwesomeIcon icon={faTimesCircle} /></span>
      </div>

    </Container>
  );
};

export default Menu;
