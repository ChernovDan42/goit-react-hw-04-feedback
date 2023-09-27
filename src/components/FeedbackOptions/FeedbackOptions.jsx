import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map(option => {
        return (
          <button
            key={option}
            className={css.btn}
            type="button"
            name={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        );
      })}
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
