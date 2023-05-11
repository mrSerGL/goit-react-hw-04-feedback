import { useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

import css from './App.module.css';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handlerGoodBtn = () => {
    setGood(prevState => prevState + 1);
  };

  const handlerNeutralBtn = () => {
    setNeutral(prevState => prevState + 1);
  };

  const handlerBadBtn = () => {
    setBad(prevState => prevState + 1);
  };

  const onLeaveFeedback = {
    handlerGoodBtn: handlerGoodBtn,
    handlerNeutralBtn: handlerNeutralBtn,
    handlerBadBtn: handlerBadBtn,
  };

  const state = {
    good: good,
    neutral: neutral,
    bad: bad,
  };

  const countTotalFeedback = state => {
    const { good, neutral, bad } = state;
    const total = good + bad + neutral;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = state;
    const total = good + neutral + bad;
    const percentage = total > 0 ? Math.round((good / total) * 100) : 0;
    return percentage;
  };

  const positivePercentage = {
    totalFeedback: countTotalFeedback,
    positiveFeedbackPercentage: countPositiveFeedbackPercentage,
  };

  const markupLeaveFeedback = (
    <Section title="Please leave feedback">
      <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
    </Section>
  );

  const markupStatistics = (
    <Section title="Statistics">
      <Statistics options={state} positivePercentage={positivePercentage} />
    </Section>
  );

  const message = 'There is no feedback';

  return (
    <div className={css.section}>
      {markupLeaveFeedback}
      {good > 0 || neutral > 0 || bad > 0 ? (
        markupStatistics
      ) : (
        <p className={css.message}>{message}</p>
      )}
    </div>
  );
};

export default App;
