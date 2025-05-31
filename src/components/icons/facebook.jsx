import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';

import '../icons/icons.css';

const iconoFacebook = () => {
    return (
        <FontAwesomeIcon className='fb link' icon={faSquareFacebook} />
    );
};

export default iconoFacebook;
