import { useStore } from "effector-react"
import { $dataStore } from "../../store/contentStore/dataStore"
import QuestionCard from "../QuestionCard"

const QuestionsList = () => {
    const questions = useStore($dataStore)
    return(
        <div>
            {questions?.map((value, idx)=> <QuestionCard  key = {idx} value = {value} />)}
        </div>
    )
};

export default QuestionsList;