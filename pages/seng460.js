import React from 'react'
import Container from '@mui/material/Container';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import QuizHome from '../src/components/Quiz/QuizHome';
import questions from '../src/quizzes/seng460/midterm1.json'


export default function Index() {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <main>
      <Container maxWidth="md" className={smallScreen ? "mt-12" : "p-12"}>
        <Typography
          variant="h2"
          component="h2"
          align="center"
          gutterBottom
        >
          SENG 460 Studying
        </Typography>
        <QuizHome questions={questions} quizName="SENG 460 Midterm 1"/>
      </Container>
    </main>
  );
}
