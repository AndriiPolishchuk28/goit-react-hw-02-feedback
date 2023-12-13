export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(button => {
        return (
          <button
            key={button}
            onClick={onLeaveFeedback}
            name={button}
            type="button"
          >
            {button}
          </button>
        );
      })}
    </>
  );
};
