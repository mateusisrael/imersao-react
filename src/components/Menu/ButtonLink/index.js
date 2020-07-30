import React from 'react';
import { Link } from 'react-router-dom';

function ButtonLink(props) {
    return (
        <Link to="{props.ref}" className="props.className">
            {props.children}
        </Link>
    );
}

export default ButtonLink;
