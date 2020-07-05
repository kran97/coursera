import React, { Component } from 'react';
import Menu from "../menu/Menu";
import Header from '../Header/HeaderComponent';
import Footer from '../Footer/FooterComponent';
import { DISHES } from '../../shared/dishes';
// import DishdetailComponent from "../dishDetail/Dishdetail";
import Home from '../Home/HomeComponent';
import {Switch, Route, Redirect} from 'react-router-dom';

class MainComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      // selectedDish: null
    };
  }

  // onDishSelect(dishId) {
  //   this.setState({ selectedDish: dishId });
  // }

  render() {

    const HomePage = () => {  //This is done so that later on we can pass props in Home Component.
      return (                //This is 1 method. Other is the Menu Component one.
        <Home />
      );
    }

    return (
      <div className="App">

        <Header />

        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishez={this.state.dishes} />} />
          <Redirect to="/home" />
        </Switch>

        {/* <Menu dishez={this.state.dishes} onClick={(dishId) => {this.onDishSelect(dishId)}} /> */}

        {/* <DishdetailComponent Dishdetail={this.state.dishes.filter((dish) => (dish.id === this.state.selectedDish))[0]} /> */}

        <Footer />

      </div>
    );
  }
}

export default MainComponent;
