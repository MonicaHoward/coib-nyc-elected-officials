import React from 'react';
import Card from './Card';

const CardList = ({data}) => {

    return(
        <div>
            {
                data.map((donation, k) => {
                    return(
                        <Card
                            elected_official={data[k].elected_official}
                            title={data[k].elected_official_title}
                        />
                    )
                })
            }
        </div>
    
    
    
    )
}
export default CardList;