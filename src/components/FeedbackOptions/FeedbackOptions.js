import propTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

function FeedbackOptions({ onLeaveFeedback }) {
  const { handlerGoodBtn, handlerNeutralBtn, handlerBadBtn } = onLeaveFeedback;

  // console.log(onLeaveFeedback)
  return (
    <>
      <ul className={css.buttons__list}>
        <li className={css.button}>
          <button type="button" onClick={handlerGoodBtn}>
            Good
          </button>
        </li>
        <li className={css.button}>
          <button type="button" onClick={handlerNeutralBtn}>
            Neutral
          </button>
        </li>
        <li className={css.button}>
          <button type="button" onClick={handlerBadBtn}>
            Bad
          </button>
        </li>
      </ul>
    </>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: propTypes.object.isRequired,
};

export default FeedbackOptions;
