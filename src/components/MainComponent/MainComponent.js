import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from "../menu/Menu";
import { DISHES } from '../../shared/dishes';
import DishdetailComponent from "../dishDetail/Dishdetail";

class MainComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    return (
      <div className="App">

        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Coursera</NavbarBrand>
          </div>
        </Navbar>

        <Menu dishez={this.state.dishes} onClick={(dishId) => {this.onDishSelect(dishId)}} />

        <DishdetailComponent Dishdetail={this.state.dishes.filter((dish) => (dish.id === this.state.selectedDish))[0]} />

      </div>
    );
  }
}

export default MainComponent;
