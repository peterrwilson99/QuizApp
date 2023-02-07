import React from 'react';
import { Box, Checkbox, FormControl, FormControlLabel, RadioGroup, Typography } from "@mui/material";

const QuestionFeedback = ({ question, response, questionNumber }) => {
  const isCorrect = response === question.answer;
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
            <RadioGroup value={response}>
            {Object.keys(question.options[0]).map((key) => {
                return (
                    key === question.answer ?
                        <FormControlLabel
                            key={key}
                            value={key}
                            control={<Checkbox checked={true} disabled={!isCorrect} />}
                            label={question.options[0][key]}
                        />
                    :
                        key === response ?
                            <FormControlLabel
                                key={key}
                                value={key}
                                control={<Checkbox indeterminate={true} />}
                                label={question.options[0][key]}
                            />
                            :
                            <FormControlLabel
                                key={key}
                                value={key}
                                control={<Checkbox checked={false} />}
                                label={question.options[0][key]}
                            />
                )
            })}
            </RadioGroup>
        </FormControl>
    </Box>
)
};

export default QuestionFeedback;
