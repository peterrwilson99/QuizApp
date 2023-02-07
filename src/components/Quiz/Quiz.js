import React, { useState } from 'react'
import { Box, Button, Paper, Typography } from "@mui/material";
import Question from './Question';
import QuizFeedback from './QuizFeedback';
import QuizOnePage from './QuizOnePage';

function Quiz({ singlePageQuestion = true, questions }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [questionResponses, setQuestionResponses] = useState(Array(questions.length).fill(""));
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);

    const handleQuestionResponse = (question, selectedOption) => {
        const questionResponsesCopy = questionResponses;
        questionResponsesCopy[questions.indexOf(question)] = selectedOption;
        setQuestionResponses(questionResponsesCopy);
    };

    const handlePreviousQuestion = () => {
        currentQuestion !== 0 ? setCurrentQuestion(currentQuestion - 1) : null;
    };
    const handleNextQuestion = () => {
        currentQuestion !== questions.length ? setCurrentQuestion(currentQuestion + 1) : null;
    };

    const handleSubmitQuiz = () => {
        calculateScore();
        setQuizCompleted(true);
    }

    const calculateScore = () => {
        let score_iter = 0;
        for(const index in questionResponses){
            let correct_answer = questions[index].answer;
            let question_response = questionResponses[index];
            correct_answer === question_response ? score_iter++ : null;
        }
        setScore(score_iter);
    }
    const checkQuestionsMissing = () => {
        const missedQuestions = []
        for(const response in questionResponses){
            questionResponses[response] === "" ? missedQuestions.push(String(parseInt(response) + 1)) : null;
        }
        
        return (missedQuestions.length === 0 ?
                <Typography
                    variant="h5"
                    gutterBottom
                >
                    Quiz completed. Would you like to submit the quiz?
                </Typography>
                :
                <div className="my-2">
                    <Typography
                        variant="h5"
                        gutterBottom
                    >
                        {missedQuestions.length} questions not answered.
                    </Typography>
                    <Typography
                        variant="p"
                        gutterBottom
                    >
                        Missing questions: {missedQuestions.map((qNum) => {
                            return (
                                missedQuestions.indexOf(qNum) === missedQuestions.length -1 ?
                                    qNum
                                    :
                                    qNum + ", "
                                )
                        })}
                    </Typography>
                </div>
        )
    }
        
    return (
        singlePageQuestion ? 
            quizCompleted ? 
                <QuizFeedback questions={questions} questionResponses={questionResponses} score={score} />
                :
                <Box>
                    {currentQuestion === questions.length ? (
                        <Box>
                            {checkQuestionsMissing()}
                            <Button variant="outlined" color="secondary" className="mx-2" href="#" onClick={handlePreviousQuestion}>
                                Previous Question
                            </Button>
                            <Button variant="contained" color="primary" className="mx-2" href="#" onClick={handleSubmitQuiz}>
                                Submit Quiz
                            </Button>
                        </Box>
                    ) :
                        <Box>
                            <Question 
                                question={questions[currentQuestion]} 
                                questionNumber={currentQuestion + 1}
                                selected={questionResponses[currentQuestion]} 
                                handleQuestionResponse={handleQuestionResponse} 
                            />
                            <div>
                                <Button variant="contained" color="primary" className="mx-2" href="#" onClick={handleNextQuestion}>
                                    {currentQuestion === questions.length - 1 ? "Review Quiz" : "Next Question"}
                                </Button>
                                {currentQuestion !== 0 ? 
                                    <Button variant="outlined" color="secondary" className="mx-2" href="#" onClick={handlePreviousQuestion}>
                                        Previous Question
                                    </Button>
                                    :
                                    null
                                }
                            </div>
                        </Box>
                    }
                </Box>
        :
        <QuizOnePage questions={questions} />
    )
}

export default Quiz