import { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notifications/Notification";
import css from './App.module.css'





export class App extends Component {

state = {
  good: 0,
  neutral: 0,
  bad: 0
}
  
  
  handleClick = (e) => {
    const { name } = e.target;
    

    this.setState(prevState => ({
        [name]: prevState[name] + 1
    }));
}

  
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    
    return good+neutral+bad
  }


  countPositiveFeedbackPercentage() {
    const {good} = this.state;

    const percentageGoodReviews = (good / this.countTotalFeedback()) * 100;
    if (this.countTotalFeedback() > 0) {
      return percentageGoodReviews.toFixed(2);
    }
    return '0.00'
    
  }


  
  
  
  render() {
const { good, neutral, bad } = this.state;

    const stateLength = Object.keys(this.state);
   
    
    return (
      <div className={css.App}>
        <Section title='Please leave feedback'>
        {stateLength.map(el => {
          return (
            <FeedbackOptions key={el}
              options={el}
              onLeaveFeedback={this.handleClick}
            />
          )
        })}
          </Section>



        <Section title='Statistics'>

         {this.countTotalFeedback() ? <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
          />
            : <Notification 
               message="No feedback given"/>}

        
          </Section>
      
</div>
 )
}

}
