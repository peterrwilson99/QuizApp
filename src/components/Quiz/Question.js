import React, { useEffect, useState } from 'react'
import questions from "./questions.json"
import { Box, Button, FormControl, FormControlLabel, Paper, Radio, RadioGroup, Typography } from "@mui/material";

function Question(props) {
    const { question, handleQuestionResponse, selected, questionNumber } = props;
    const [selectedOption, setSelectedOption] = useState(selected);

    useEffect(() => {
        setSelectedOption(selected)
    }, [question])

    const handleOptionChange = (event) => {
        const response = event.target.value;
        setSelectedOption(response)
        handleQuestionResponse(question, response);
    };

    return (
        <Box className="my-4">
            <Typography
                variant="p"
                className="text-l italic"
                display={"block"}
            >
                {questionNumber}. {question.question}
            </Typography>
            <FormControl component="fieldset" className="mx-4 my-2">
                <RadioGroup value={selectedOption} onChange={handleOptionChange}>
                {Object.keys(question.options[0]).map((key) => {
                    
                    return (
                        <FormControlLabel
                            key={key}
                            value={key}
                            control={<Radio />}
                            label={question.options[0][key]}
                        />
                    )
                })}
                </RadioGroup>
            </FormControl>
        </Box>
    )
}

export default Question