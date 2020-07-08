import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import './MenuStyle.css';

function RenderMenuItem({ dishez }) {
    return (
        <Card>
            <Link to={`/menu/${dishez.id}`}>
            <CardImg width="100%" src={dishez.image} alt={dishez.name} />
            <CardImgOverlay>
                <CardTitle>{dishez.name}</CardTitle>
            </CardImgOverlay>
            </Link>
        </Card>
    );
}

const Menu = (props) => {

    const menu = props.dishez.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-2">
                <RenderMenuItem dishez={dish} />
            </div>
        );
    });

    return (
        <div className="container">
            <div classnName="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    );
}

export default Menu;