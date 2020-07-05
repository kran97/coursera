import React, { Component } from 'react';
import Menu from "../menu/Menu";
import Header from '../Header/HeaderComponent';
import Footer from '../Footer/FooterComponent';
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

        <Header />

        <Menu dishez={this.state.dishes} onClick={(dishId) => {this.onDishSelect(dishId)}} />

        <DishdetailComponent Dishdetail={this.state.dishes.filter((dish) => (dish.id === this.state.selectedDish))[0]} />

        <Footer />

      </div>
    );
  }
}

export default MainComponent;
