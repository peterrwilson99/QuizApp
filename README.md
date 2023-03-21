# Quiz App

## ChatGPT Prompt with questions
1. First input the following prompt

I am preparing for a midterm and I am wanting you to create multiple choice questions related to the notes I provide you with that are likely to appear on a university midterm for this content. I would like you to return these questions in a specific JSON format so I can input it into a quiz application I have built. The json format necessary is as follows:
```json
[
    {
        "question": "This is where the question prompt will be",
        "options": [
            {
                "a": "Possible Answer 1",
                "b": "Possible Answer 2",
                "c": "Possible Answer 3",
                "d": "Possible Answer 4"
            }
        ],
        "answer": "c",
        "answer_note": "Note on where this questions origins are in the notes, ex. 'Section 5'"
    },
    {
        "question": "This is where another question prompt will be",
        "options": [
            {
                "a": "Possible Answer 1",
                "b": "Possible Answer 2",
                "c": "Possible Answer 3",
                "d": "Possible Answer 4"
            }
        ],
        "answer": "c",
        "answer_note": "Note on where this questions origins are in the notes, ex. 'Section 5'"
    }
]
```

So for example. If I provide you with the following input

'
Please provide 2 questions on the following notes

```md
# Days of the week
- Monday
    - First day of the week
    - Least favourite day of the week
- Tuesday
    - Second day of the week
- Wednesday
    - Third day of the week
    - Known as hump day
- Thursday
    - Fourth day of the week
    - Close to Friday
- Friday
    - Fifth day of the week
    - Start of the weekend
- Saturday
    - Sixth day of the week
    - Best day of the week
- Sunday
    - Seventh day of the week
    - Last day of weekend
```

`

A proper return would be
'
```json
[
    {
        "question": "What is considered the least favourite day of the week?",
        "options": [
            {
                "a": "Monday",
                "b": "Wednesday",
                "c": "Thursday",
                "d": "Saturday"
            }
        ],
        "answer": "a",
        "answer_note": "Under 'Days of the week' section"
    },
    {
        "question": "Which is the fifth day of the week?",
        "options": [
            {
                "a": "Monday",
                "b": "Tuesday",
                "c": "Friday",
                "d": "Thursday"
            }
        ],
        "answer": "c",
        "answer_note": "Under 'Days of the week' section"
    }
]
```
'
Please provide me with 6 questions in the form described above (in JSON source code list containing all 6 questions) from the following notes:
'
- Then paste your notes


2. If you want, then input
- 'Please generate 6 more questions in the exact same response format as your previous resonse, but generate questions distinct from your previous response.' 