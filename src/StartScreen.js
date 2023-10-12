function StartScreen({ numQuestions, dispatch }) {
  return (
    <div>
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} question to test your React mastery</h3>
      <button className="btn-ui btn" onClick={() => dispatch({ type: "start" })}>
        Lets's start
      </button>
    </div>
  );
}

export default StartScreen;
