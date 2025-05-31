import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../icons/icons.css';

const IconoWsp = ({ className = '' }) => {
    return <FontAwesomeIcon className={`icon ${className}`} icon={faWhatsapp} />;
};

export default IconoWsp;