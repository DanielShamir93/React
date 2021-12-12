import QuizTitle from "./QuizTitle.component";
import Q1Title from './Q1Title.component';
import Q2Title from './Q2Title.component';

function Quiz() {

    return (
        <div className="Quiz">
            <QuizTitle /> 
            <Q1Title />
            <Q2Title />
        </div>
    );
}

export default Quiz;