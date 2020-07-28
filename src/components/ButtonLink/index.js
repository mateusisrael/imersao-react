import React from 'react';

function ButtonLink(props) {
    return (
        <a href="{props.ref}" className="props.className">
            {props.children}
        </a>
    );
}

export default ButtonLink;
