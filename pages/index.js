import React from 'react'
import Container from '@mui/material/Container';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import Copyright from '../src/components/Copyright';
import QuizHome from '../src/components/Quiz/QuizHome';


export default function Index() {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <main>
      <Container maxWidth="md" className={smallScreen ? "" : "p-12"}>
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
