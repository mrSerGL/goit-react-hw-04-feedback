import propTypes from 'prop-types';
import css from './Statistics.module.css';

function Statistics({ options, positivePercentage }) {
  const { good, neutral, bad } = options;
  const { positiveFeedbackPercentage } = positivePercentage;

  return (
    <>
      <ul className={css.statisticsList}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {good+neutral+bad}</li>
        <li>Positive feedback: {positiveFeedbackPercentage(options)} %</li>
      </ul>
    </>
  );
}

Statistics.propTypes = {
  options: propTypes.object.isRequired,
  positivePercentage: propTypes.object.isRequired,
};

export default Statistics;
