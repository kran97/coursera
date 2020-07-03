import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import './MenuStyle.css';
// import DishdetailComponent from "../dishDetail/Dishdetail";

class Menu extends Component {

    constructor(props) {
        console.log('Menu constructor invoked');

        super(props);

        this.state = {
            // selectedDish : null
        };
    }

    componentDidMount() {
        console.log('Menu componentDidMount invoked');
    }

    // onDishSelect(dish) {
    //     this.setState({ selectedDish: dish});
    // }

    // renderDish(dish) {
    //     if(dish != null) {
    //         return (
    //             <Card>
    //                 <CardImg width="100%" src={dish.image} alt={dish.name} />
    //                     <CardBody>
    //                         <CardTitle>{dish.name}</CardTitle>
    //                         <CardText>{dish.description}</CardText>
    //                     </CardBody>
    //             </Card>
    //         )
    //     }
    //     else {
    //         return (
    //             <div></div>
    //         );
    //     }
    // }

    render() {

        console.log("Menu render invoked");

        const menu = this.props.dishez.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-2">
                    <Card onClick={() => this.props.onClick(dish.id)} className="cursorStyle">
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                {/* <div className="row">
                    <DishdetailComponent Dishdetail={this.state.selectedDish} />
                  //  {this.renderDish(this.state.selectedDish)}
                </div> */}
            </div>
        );
    }
}

export default Menu;