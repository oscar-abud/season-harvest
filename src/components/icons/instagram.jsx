import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import '../icons/icons.css';

const iconoInstagram = () => {
    return (
        <FontAwesomeIcon className='ig link' icon={faInstagram} />
    );
};

export default iconoInstagram;
