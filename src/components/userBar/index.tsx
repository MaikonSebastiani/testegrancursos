import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckSquare, faCommentAlt, faEnvelope, faCalendar, faStar, faBell,
} from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { Container, Icons, User } from './styles';
import userImage from '../../assets/images/Oval.png';

const UserBar: React.FC = () => {
  const t = '';

  return (
    <Container>
      <Icons>
        <FontAwesomeIcon icon={faCheckSquare} />
        <FontAwesomeIcon icon={faCommentAlt} />
        <FontAwesomeIcon icon={faEnvelope} />
        <FontAwesomeIcon icon={faCalendar} />
        <FontAwesomeIcon icon={faStar} className="disabled" />
      </Icons>

      <User>
        <p className="language">English</p>
        <FontAwesomeIcon icon={faBell} />
        <FontAwesomeIcon icon={faSearch} />
        <div className="userArea">
          <div className="userInfo">
            <p>Maikon</p>
            <span>Available</span>
          </div>
          <img src={userImage} alt="userImage" />
        </div>
      </User>
    </Container>
  );
};

export default UserBar;
