import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import QuizHome from '../src/components/Quiz/QuizHome';
import { quizDictionary } from '../src/quizzes/Quizzes';

function quizPage() {
    const router = useRouter();
    const [quiz, setQuiz] = useState({})
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        const { quizId } = router.query;
        if(quizId){
            setQuiz(quizDictionary[quizId])
        }
    }, [router.query]);
    return (
        quiz.course ? 
            <main>
                <Container maxWidth="md" className={smallScreen ? "mt-12" : "p-12"}>
                    <Typography
                    variant="h2"
                    component="h2"
                    align="center"
                    gutterBottom
                    >
                        {quiz.quiz}
                    </Typography>
                    <Typography
                    variant="h6"
                    component="h6"
                    align="center"
                    gutterBottom
                    >
                        {quiz.course}
                    </Typography>
                    <QuizHome questions={quiz.questions} quizName={quiz.course + ": " + quiz.quiz} />
                </Container>
            </main>
            :
            <main>
                <Container maxWidth="md" className={smallScreen ? "mt-12" : "p-12"}>
                    <Typography
                    variant="h5"
                    component="h5"
                    align="center"
                    gutterBottom
                    >
                        Quiz Not Found
                    </Typography>
                </Container>
            </main>
    );
}

export default quizPage