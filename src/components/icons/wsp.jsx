import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';  // Aquí usamos free-brands-svg-icons para WhatsApp

import '../icons/icons.css';

const IconoWsp = () => {
    return (
        <FontAwesomeIcon className='icon' icon={faWhatsapp} />
    );
};

export default IconoWsp;
