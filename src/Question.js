import Option from "./Components/Option";
import { useQuiz } from "./QuizContext";
function Question() {
  const { questions, index } = useQuiz();
  console.log(questions);
  return (
    <div>
      <h4>{questions[index].question}</h4>
      <Option question={questions[index]} />
    </div>
  );
}

export default Question;
