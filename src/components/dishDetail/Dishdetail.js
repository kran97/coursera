import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import './DishdetailStyle.css';

class DishdetailComponent extends Component {

    constructor(props) {
        console.log('DishDetail constructor invoked');
        
        super(props);

        this.state = {
            
        };
    }

    componentDidMount() {
        console.log('DishDetail componentDidMount invoked');
    }

    componentDidUpdate() {
        console.log('DishDetail componentDidUpdate invoked');
    }

    renderDish(dish) {
        if(dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-2">
                            <Card>
                                <CardImg width="100%" src={dish.image} alt={dish.name} />
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle>
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 m-2">
                            <h3>Comments</h3>
                            {this.props.Dishdetail.comments.map((comm) => {
                                return (
                                    <div key={comm.id}>
                                        <ul className="listStyle">
                                            <li className="comm-bold">{comm.comment}</li>
                                            <li className="comm-bold">-- {comm.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comm.date)))}</li>
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                </div>
            );
        }
    }

    render() {

        console.log("DishDetail render invoked");

        return (
            <div className="container">
                <div className="row">
                    {this.renderDish(this.props.Dishdetail)}
                </div>
            </div>
        );
    }

}

export default DishdetailComponent;