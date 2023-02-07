import React, { useState } from 'react'
import { Box, Button, Paper, Typography } from "@mui/material";
import Question from './Question';
import QuizFeedback from './QuizFeedback';

function QuizOnePage({ singlePageQuestion = true, questions }) {
    const [reviewQuiz, setReviewQuiz] = useState(false);
    const [questionResponses, setQuestionResponses] = useState(Array(questions.length).fill(""));
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);

    const handleQuestionResponse = (question, selectedOption) => {
        const questionResponsesCopy = questionResponses;
        questionResponsesCopy[questions.indexOf(question)] = selectedOption;
        setQuestionResponses(questionResponsesCopy);
    };

    const handleBackToQuiz = () => {
        setReviewQuiz(false);
    };
    const handleReviewQuiz = () => {
        setReviewQuiz(true);
    };
    const handleSubmitQuiz = () => {
        calculateScore();
        setQuizCompleted(true);
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

    const calculateScore = () => {
        let score_iter = 0;
        for(const index in questionResponses){
            let correct_answer = questions[index].answer;
            let question_response = questionResponses[index];
            correct_answer === question_response ? score_iter++ : null;
        }
        setScore(score_iter);
    }
        
    return (
        quizCompleted ? 
            <QuizFeedback questions={questions} questionResponses={questionResponses} score={score} />
            :
            <Box>
                {reviewQuiz ? (
                    <div>
                        {checkQuestionsMissing()}
                        <Button variant="outlined" color="secondary" className="mx-2" href="#" onClick={handleBackToQuiz}>
                            Back to Quiz
                        </Button>
                        <Button variant="contained" color="primary" className="mx-2" href="#" onClick={handleSubmitQuiz}>
                            Submit Quiz
                        </Button>
                    </div>
                ) :
                    <Box>
                        {questions.map((question, index) => {
                            return (
                                <Question 
                                    question={question} 
                                    questionNumber={index + 1} 
                                    selected={questions.indexOf[question]} 
                                    handleQuestionResponse={handleQuestionResponse} 
                                />
                            )
                        })}
                        <div>
                            <Button variant="contained" color="primary" className="mx-2" href="#" onClick={handleReviewQuiz}>
                                Review Quiz
                            </Button>
                        </div>
                    </Box>
                }
            </Box>
    )
}

export default QuizOnePage