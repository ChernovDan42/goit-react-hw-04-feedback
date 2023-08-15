import css from "./FeedbackOptions.module.css"
import PropTypes from 'prop-types'


function capitalizeFirstLetter(option) {
  return option.charAt(0).toUpperCase() + option.slice(1);
}


export function FeedbackOptions({ option, onLeaveFeedback }) {
    return (
         <button className={css.btn} type="button" name={option} onClick={onLeaveFeedback}>{capitalizeFirstLetter(option)}</button>
    )
   
}

FeedbackOptions.propTypes = {
  option: PropTypes.string.isRequired,
  onLeaveFeedback:PropTypes.func.isRequired,
}