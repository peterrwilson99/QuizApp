import React, { useState } from 'react'
import Container from '@mui/material/Container';
import { Box, Button, Checkbox, FormControlLabel, IconButton, Paper, TextField, Typography } from '@mui/material';
import Quiz from './Quiz';
import questions from "./questions.json"
import CloseIcon from '@mui/icons-material/Close';

function QuizHome() {
    const [selectedQuestions, setSelectedQuestions] = useState(questions);
    const [numOfQuestions, setNumOfQuestions] = useState(questions.length);
    const [singlePageQuestion, setSinglePageQuestion] = useState(true);
    const [startQuiz, setStartQuiz] = useState(false);

    const handleNumQuestionChange = (event) => {
        const numQs = event.target.value;
        setNumOfQuestions(numQs);
        const selected = [];
        for (let i = 0; i < numQs; i++) {
        let randomIndex = Math.floor(Math.random() * questions.length);
        while (selected.includes(randomIndex)) {
            randomIndex = Math.floor(Math.random() * questions.length);
        }
        selected.push(randomIndex);
        }
        const selectedQuestions = selected.map(index => questions[index]);
        setSelectedQuestions(selectedQuestions);
    };

    const handleSinglePageQuestion = (event) => {
        setSinglePageQuestion(!singlePageQuestion);
    }

    const handleStartQuizChange = (event) => {
        setStartQuiz(!startQuiz);
    }
    return (
        <Paper elevation={8} sx={{borderRadius: 4}} className="p-8">
            {startQuiz ?
                <div className="text-right">
                    <IconButton aria-label="exit" component="label" onClick={handleStartQuizChange} >
                        <CloseIcon />
                    </IconButton>
                </div>
                :
                null
            }
            {startQuiz ?
              <Quiz
                questions={ selectedQuestions }
                singlePageQuestion = { singlePageQuestion }
              />
              :
              <Box >
                <Container maxWidth="md" >
                  <Typography
                    variant="h5"
                    gutterBottom>
                    Welcome to the SENG 468 Midterm 1 Study Tool
                  </Typography>
                  <Typography
                    variant="p"
                    gutterBottom>
                    How many questions would you want on your quiz? (1 to {questions.length})?
                  </Typography>
                  <div className="my-4">
                    <TextField
                        type="number"
                        value={numOfQuestions}
                        onChange={handleNumQuestionChange}
                        className="w-1/3"
                        InputProps={{
                            inputProps: {
                                min: 1, max: questions.length
                            }
                        }}
                        InputLabelProps={{ shrink: true }}
                        label="Number of Questions"
                    />
                  </div>
                  <FormControlLabel
                    label="Would you like your questions to appear on one page?"
                    control={
                      <Checkbox
                        checked={!singlePageQuestion}
                        onChange={handleSinglePageQuestion}
                      />
                    }
                  />
                  <div className="mt-4">
                    <Button variant="outlined" color="primary" onClick={handleStartQuizChange}>
                      Start Quiz
                    </Button>
                  </div>
                </Container>
              </Box>
            }
        </Paper>
    )
}

export default QuizHome