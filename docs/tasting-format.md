# Tasting cards: the data format

A card for every wine listed on a region sheet, so a reader can look one up without hunting through an essay.

## Files

- `content/tasting.js` — English, `window.TASTING`
- `content/tasting.no.js` — Norwegian bokmål, `window.TASTING_NO`

Both are one big `Object.assign(...)`, so several people can append blocks without clashing.

## Shape

The key is the region code, a vertical bar, and the wine **exactly as it is spelled in `COURSE.wines`**, because
that is what the app looks up. Copy it character for character, brackets and apostrophes included.

```js
window.TASTING = window.TASTING || {};
Object.assign(window.TASTING, {
  "IT-21|Barbaresco": {
    colour: "Pale garnet, brick at the rim within a few years",
    nose:   "Rose, tar, red cherry, dried herbs, a little woodsmoke",
    palate: "Medium body, high acid, fine firm tannin, a long savoury finish",
    alcohol:"13.5–14.5%",
    serve:  "16–18 °C, decanted; drinks from five years and keeps twenty",
    table:  "Tajarin with butter, braised beef, aged Castelmagno"
  },
});
```

The six fields are the same six rows the readings already use, so the two never disagree in structure:
`colour`, `nose`, `palate`, `alcohol`, `serve`, `table`.

The Norwegian file uses identical keys and the same six field **names in English** (`colour`, `nose`, …) with
Norwegian values, so the app needs no translation table.

## Writing rules

1. **Be accurate before being evocative.** Alcohol ranges and serving temperatures must be defensible for the
   appellation, not invented. If a wine spans styles, say so briefly rather than averaging it into nonsense.
2. **Read the region's readings first.** Where a reading already describes the wine, the card must agree with it.
   Reuse its vocabulary; do not contradict it.
3. **Keep each field to one line**, roughly 40 to 90 characters. These are scanned, not read.
4. `alcohol` uses a range with a percent sign, English `13.5–14.5%` and Norwegian `13,5–14,5 %` (comma, and a
   space before the sign). Use an en dash.
5. `serve` gives temperature and, where it matters, whether to decant and when to drink it.
6. `table` gives two or three concrete dishes, preferring the region's own, in Italian where the readings use
   Italian.
7. Norwegian is bokmål written to `CLAUDE.md` §4b: written from the facts, not translated clause by clause.
   Italian names of wines, grapes and dishes stay Italian.
8. Do not invent producers, vintages or scores. No prices.

## Checking

`python tools/tastingcheck.py` verifies that every wine on every region sheet has a card in both languages,
that all six fields are present and non-empty, that the keys match between the two files, and that the alcohol
field looks like a percentage.
