import React from 'react';

const Card = ({k, elected_official, title}) => {
    return(
        <div>
            <h2>{elected_official}</h2>
            <h4>{title}</h4>
        </div>
    )
}
export default Card;