import React, { useState } from 'react'
import Container from '@mui/material/Container';
import { FormControl, InputLabel, MenuItem, Select, Typography, useMediaQuery, useTheme } from '@mui/material';
import QuizHome from '../src/components/Quiz/QuizHome';
import questionsMidterm1 from '../src/quizzes/seng468/midterm1.json'
import questionsMidterm2 from '../src/quizzes/seng468/midterm2.json'



export default function Index() {
  const [quiz, setQuiz] = useState("midterm1");
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleQuizSelect = (event) => {
    setQuiz(event.target.value)
  }
  return (
    <main>
      <Container maxWidth="md" className={smallScreen ? "mt-12" : "p-12"}>
        <Typography
          variant="h2"
          component="h2"
          align="center"
          gutterBottom
        >
          SENG 468 Studying
        </Typography>
        <FormControl className="flex m-auto w-1/2 my-4">
          <InputLabel id="quiz-select-label">Select a Quiz</InputLabel>
          <Select
            labelId="quiz-select-label"
            id="quiz-select"
            value={quiz}
            onChange={handleQuizSelect}
            fullWidth
          >
            <MenuItem value="midterm1">Midterm 1</MenuItem>
            <MenuItem value="midterm2">Midterm 2</MenuItem>
          </Select>
        </FormControl>
        {quiz === "midterm1" ?

          <QuizHome questions={questionsMidterm1} quizName="SENG 468 Midterm 1" />
          :
          <QuizHome questions={questionsMidterm2} quizName="SENG 468 Midterm 2" />
        }
      </Container>
    </main>
  );
}
