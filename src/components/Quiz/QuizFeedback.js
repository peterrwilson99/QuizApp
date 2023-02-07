import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';
import QuestionFeedback from './QuestionFeedback';

const QuizFeedback = ({ questions, questionResponses, score }) => {
    return (
        <Box>
            <div className="flex justify-between">
                <Typography
                    variant="h4"
                    gutterBottom
                >
                    Quiz Feedback
                </Typography>
                <Typography
                    variant="h4"
                    gutterBottom
                >
                    {(score/questions.length)*100}%
                </Typography>
            </div>
            <Typography
                variant="subtitle2"
                gutterBottom
            >
                Score: {score}/{questions.length}
            </Typography>
            
            {questions.map((question, index) => (
                <QuestionFeedback
                    key={question.id}
                    question={question}
                    questionNumber={index+1}
                    response={questionResponses[index]}
                />
            ))}
            <Button variant="outlined" color="primary" className="mx-2" href="/" >
                Done
            </Button>
        </Box>
    );
};

export default QuizFeedback;
