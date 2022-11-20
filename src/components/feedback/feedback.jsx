import { useState } from "react";
import { AddFeedback } from "components/AddFeedback/AddFeedback";
import { Statistics } from "components/Statistics/Statistics";
import { Section } from "components/Section";

export const FeedBack = () => {


  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
const option = ["good","neutral", "bad"]
 const onIncrement = (e) => {
    const event = e.target.textContent


    switch (event) {
      case "good":
        setGood(good + 1)
        break;
      case "bad":
        setBad(bad + 1)
        break;
      case "neutral":
        setNeutral(neutral + 1)
        break;
      default:
        return
    }

  };
  
 const countTotalFeedback = () => {

     return  good + bad + neutral  
  }

 const countPositiveFeedbackPercentage = () => {
    return (good * 100 / countTotalFeedback()).toFixed()
   
}
 
    return (
<div>
        <Section title="Left your feedback">
          <AddFeedback
            options={option}
            onLeaveFeedback={onIncrement}
          />
 </Section>

      <Section title="Statistics">
        {countTotalFeedback() ? <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()} /> : <p>There is no feedback</p>
         }
      </Section>
     
  </div>      
    )

}