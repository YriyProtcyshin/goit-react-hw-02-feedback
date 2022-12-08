import { Component } from 'react';
import { Section } from './Section/Section';
import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions'
import {Statistics} from "./Statistics/Statistics"



export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeValue = name => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    if (good !== 0) {
      return `${Math.floor((good / this.countTotalFeedback()) * 100)} %`;
    } else {
      return 0;
    }
  };

  render() {
    return (
      <>       
        <Section title="Please leave feedback">
          <FeedbackOptions onClickButton={this.changeValue} />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>        
      </>
    );
  }
}