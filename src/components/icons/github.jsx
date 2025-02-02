import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; // Corregido

import '../icons/icons.css';

const IconoGithub = () => {
    return (
        <FontAwesomeIcon className='github' icon={faGithub} />
    );
};

export default IconoGithub;
