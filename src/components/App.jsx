import { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notifications/Notification";
import css from './App.module.css'
import { useState } from "react";





export function App(){

  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
 const state=['good','neutral','bad']
 
  

  const handleClick = (e) => {
    const { name } = e.target;
    


    switch (name) {
      case 'good':
        setGood(state => state + 1);
        break;

      case "neutral":
        setNeutral(state => state + 1);
        break;
      
      case "bad":
        setBad(state => state + 1);
        break;
      
      default: return;
    }
  }
  

  const countTotalFeedback=()=> {
    return good+neutral+bad
  }


  const countPositiveFeedbackPercentage=()=> {

    const percentageGoodReviews = (good /countTotalFeedback()) * 100;
    if (countTotalFeedback() > 0) {
      return percentageGoodReviews.toFixed(2);
    }
    return '0.00'
    
  }

   
   

    return (
      <div className={css.App}>
        <Section title='Please leave feedback'>
        {state.map(el => {
          return (
            <FeedbackOptions key={el}
              option={el}
              onLeaveFeedback={handleClick}
            />
          )
        })}
          </Section>



        <Section title='Statistics'>

         {countTotalFeedback() ? <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
          />
            : <Notification 
               message="No feedback given"/>}

          </Section>
      
</div>
 )
}

