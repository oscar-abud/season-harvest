import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import '../icons/icons.css';

const IconoEmail = () => {
  return (
    <FontAwesomeIcon className='icon' icon={faEnvelope} />
  );
};

export default IconoEmail;
