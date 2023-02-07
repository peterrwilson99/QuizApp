import React from 'react'
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Copyright from '../src/components/Copyright';
import QuizHome from '../src/components/Quiz/QuizHome';


export default function Index() {
  return (
    <main>
      <Container maxWidth="md" className="p-12">
        <Typography
          variant="h2"
          component="h2"
          align="center"
          gutterBottom
        >
          SENG 468 Studying
        </Typography>
        <QuizHome />
      </Container>
    </main>
  );
}
