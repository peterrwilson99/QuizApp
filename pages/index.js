import React from 'react'
import Container from '@mui/material/Container';
import { Button, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import QuizTable from '../src/components/QuizTable';

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
          Welcome to Quizzie
        </Typography>
        <Typography
          variant="subtitle1"
          className="text-xl"
          align="center"
          gutterBottom
        >
          Step right up and prepare to be underwhelmed by Quizzie, 
          the quiz app made by UVIC students with questionable coding skills. 
          But hey, it's not the most visually appealing or technically advanced app out there. 
          It's just a simple way for us to send each other quizzes to practice.
        </Typography>
      </Container>
      <Container maxWidth="lg">
        <QuizTable />
      </Container>
    </main>
  );
}
