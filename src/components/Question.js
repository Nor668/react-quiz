import { useQuize } from "../contexts/QuizeContext";
import Options from "./Options";

function Question() {
  const { dispatch, answer, index, questions } = useQuize();
  const question = questions[index];
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
}

export default Question;
