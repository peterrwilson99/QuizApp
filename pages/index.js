import React from 'react'
import Container from '@mui/material/Container';
import { Button, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';

const courses = [
  {
    code: "SENG 468",
    title: "Software Scalability",
    term: "Spring 2023",
    link: "/seng468",
  },
  {
    code: "SENG 460",
    title: "Security and Privacy Information",
    term: "Spring 2023",
    link: "/seng460",
  },
]


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
        <div className="flex justify-evenly">
          {courses.map((course) => {
            return (
              <Paper elevation={4} sx={{borderRadius: 5, width: "400px"}} >
                <div className='p-4'>
                  <Typography
                    variant="h5"
                    gutterBottom
                  >
                    {course.title}
                  </Typography>
                  <div className="flex justify-between">
                    <Button
                      variant="outlined"
                      href={course.link}>
                        {course.code}
                    </Button>
                    <Typography
                      variant="subtitle2"
                      gutterBottom
                    >
                      {course.term}
                    </Typography>
                  </div>
                </div>
              </Paper>
            )
          })}
        </div>
      </Container>
    </main>
  );
}
