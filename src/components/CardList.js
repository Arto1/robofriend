import React from 'react';
import Card from './Card'
const CardList = ({robots}) => {
    const renderRobots = robots.map(itm => { return <Card key={itm.id} id={itm.id} name={itm.name} email={itm.email} /> });
    return (<div>
        {renderRobots}
    </div>)
}
export default CardList;