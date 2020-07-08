import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import './DishdetailStyle.css';

function RenderDish({ dishz }) {
    return (
        <Card>
            <CardImg width="100%" src={dishz.image} alt={dishz.name} />
            <CardBody>
                <CardTitle>{dishz.name}</CardTitle>
                <CardText>{dishz.description}</CardText>
            </CardBody>
        </Card>
    );
}

function RenderComments({ commentz }) {

    const commz = commentz.map((comm) => {
        return (
            <div key={comm.id}>
                <ul className="listStyle">
                    <li className="comm-bold">{comm.comment}</li>
                    <li className="comm-bold">-- {comm.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comm.date)))}</li>
                </ul>
            </div>
        );
    })

    return (commz);
}

const DishdetailComponent = (props) => {
    if (props.Dishdetail != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.Dishdetail.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.Dishdetail.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-2">
                        <RenderDish dishz={props.Dishdetail} />
                    </div>
                    <div className="col-12 col-md-5 m-2">
                        <h3>Comments</h3>
                        <RenderComments commentz={props.comments} />
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}

export default DishdetailComponent;