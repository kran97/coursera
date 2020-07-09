import React, { Component } from 'react';
import Menu from "../menu/Menu";
import Header from '../Header/HeaderComponent';
import Footer from '../Footer/FooterComponent';
import Contact from '../Contact/ContactComponent';
import About from '../About/AboutComponent';
import { DISHES } from '../../shared/dishes';
import { COMMENTS } from '../../shared/comments';
import { PROMOTIONS } from '../../shared/promotions';
import { LEADERS } from '../../shared/leaders';
import DishdetailComponent from "../dishDetail/Dishdetail";
import Home from '../Home/HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class MainComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
    };
  }

  render() {

    const HomePage = () => {  //This is done so that later on we can pass props in Home Component.
      return (                //This is 1 method. Other is the Menu Component one.
        <Home dish={this.state.dishes.filter((dish) => (dish.featured === true))[0]}
          promotion={this.state.promotions.filter((promotion) => (promotion.featured === true))[0]}
          leader={this.state.leaders.filter((leader) => (leader.featured === true))[0]}
        />
      );
    }

    const DishWithId = ({match}) => {
      return (
        <DishdetailComponent Dishdetail={this.state.dishes.filter((dish) => (dish.id === parseInt(match.params.dishId, 10)))[0]} 
          comments={this.state.comments.filter((comment) => (comment.dishId === parseInt(match.params.dishId, 10)))}
        />
      );
    }

    return (
      <div className="App">

        <Header />

        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/about" component={() => <About leaders={this.state.leaders} />} />
          <Route exact path="/menu" component={() => <Menu dishez={this.state.dishes} />} />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
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
