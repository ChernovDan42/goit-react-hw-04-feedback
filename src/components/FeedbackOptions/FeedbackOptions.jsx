import css from "./FeedbackOptions.module.css"


function capitalizeFirstLetter(options) {
  return options.charAt(0).toUpperCase() + options.slice(1);
}


export function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
         <button className={css.btn} type="button" name={options} onClick={onLeaveFeedback}>{capitalizeFirstLetter(options)}</button>
    )
   
}