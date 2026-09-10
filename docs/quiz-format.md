# Recap questions: the data format

Frozen so that several people (or workers) can write questions for different regions and the files still merge.
The app reads `window.QUIZ` for English and `window.QUIZ_NO` for Norwegian bokmål.

## Files

- `content/quiz.js` — English, one `window.QUIZ['IT-xx'] = [...]` assignment per region.
- `content/quiz.no.js` — Norwegian, one `window.QUIZ_NO['IT-xx'] = [...]` per region, same shape.

Each file starts with the guard, exactly as the reading files do:

```js
window.QUIZ = window.QUIZ || {};
```

## Shape

A region is an array of **four** lessons, in reading order. Each lesson is an array of **three** questions.

```js
window.QUIZ['IT-21'] = [
  [ // lesson 1: Nebbiolo and the Langhe hills
    {q:"Why does Nebbiolo ripen so late?",
     a:["It is picked in October, after the fog arrives","It is a spring grape","It needs volcanic soil","It is harvested green"],
     c:0,
     why:"Nebbiolo buds early and ripens in the last weeks of October, when the nebbia is already forming."},
    {…}, {…}
  ],
  [ … ], [ … ], [ … ]
];
```

- `q` — the question. One sentence, ends with a question mark.
- `a` — exactly four answers, plain strings, no letters or numbering.
- `c` — index of the correct answer, 0 to 3. **Vary it**; do not leave the answer at 0 every time.
- `why` — one sentence saying why, drawn from the reading. This is shown after answering, right or wrong.

## Writing rules

1. **Only ask what the reading actually says.** Every answer must be checkable against that lesson's text.
   Never require knowledge from another region or from outside the course.
2. **Test understanding, not trivia.** Prefer "why" and "what follows from this" over a bare date. At most one
   question per lesson may be a pure fact such as a year or a percentage.
3. **The three wrong answers must be plausible** to someone who half-read the text: a neighbouring appellation,
   the other grape in the same lesson, a rule from the adjacent wine. Never absurd, never obviously padded,
   never "all of the above" or "none of the above".
4. **Keep answers short and parallel**: same grammatical form, similar length. No answer should stand out by
   being much longer or more detailed, because that gives it away.
5. **Italian names stay Italian** in both languages, as in the readings.
6. Norwegian is bokmål written to `CLAUDE.md` §4b, not translated word for word from the English. Same facts,
   same correct index, same order. Use « » for quotes, comma as decimal separator, and a space before %.
7. No question may depend on a photograph, since the reader may have scrolled past it.

## Checking

`python tools/quizcheck.py` verifies both files: four lessons per region, three questions each, exactly four
answers, `c` in range, both languages present with matching shapes, and that the answer index is not always
the same within a region.
