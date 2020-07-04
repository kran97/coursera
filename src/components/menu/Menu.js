import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import './MenuStyle.css';

function RenderMenuItem({ dishez, onClick }) {
    return (
        <Card onClick={() => onClick(dishez.id)} className="cursorStyle">
            <CardImg width="100%" src={dishez.image} alt={dishez.name} />
            <CardImgOverlay>
                <CardTitle>{dishez.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

const Menu = (props) => {

    const menu = props.dishez.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-2">
                <RenderMenuItem dishez={dish} onClick={props.onClick} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
    );
}

export default Menu;