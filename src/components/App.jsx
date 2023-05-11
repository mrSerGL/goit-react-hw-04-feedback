import React, { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

import css from './App.module.css';

// ============== Class area ===================

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  handlerGoodBtn = () => {
    this.handleFeedback('good');
  };

  handlerNeutralBtn = () => {
    this.handleFeedback('neutral');
  };

  handlerBadBtn = () => {
    this.handleFeedback('bad');
  };

  onLeaveFeedback = {
    handlerGoodBtn: this.handlerGoodBtn,
    handlerNeutralBtn: this.handlerNeutralBtn,
    handlerBadBtn: this.handlerBadBtn,
  };

  countTotalFeedback = input => {
    const { good, neutral, bad } = input;
    const total = good + bad + neutral;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const percentage = total > 0 ? Math.round((good / total) * 100) : 0;
    return percentage;
  };

  positivePercentage = {
    totalFeedback: this.countTotalFeedback,
    positiveFeedbackPercentage: this.countPositiveFeedbackPercentage,
  };

  // ================ render area =====================

  render() {
    const markupLeaveFrrdback = (
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
      </Section>
    );

    const markupStatistics = (
      <Section title="Statistics">
        <Statistics
          options={this.state}
          positivePercentage={this.positivePercentage}
        />
      </Section>
    );

    const message = "There is no feedback"

    return (
      // <div className={css.section}>
      //   {markupLeaveFrrdback}
      //   {(this.state.good > 0 ||
      //     this.state.neutral > 0 ||
      //     this.state.bad > 0) &&
      //     markupStatistics}
      // </div>

      <div className={css.section}>
        {markupLeaveFrrdback}
        {(this.state.good > 0 ||
          this.state.neutral > 0 ||
          this.state.bad > 0) 
          ? markupStatistics
          : <p className={css.message}>{message}</p>
          }
      </div>


    );
  }
}
export default App;
