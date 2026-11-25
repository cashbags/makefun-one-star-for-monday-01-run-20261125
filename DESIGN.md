# Design — One Star for Monday

Entry line: **"One star. No substitutions: asked for Friday, got Monday, and
the waiter still expected a tip."** (16 words, 94 chars, no trailing newline).
Competition: `u-clever-harbor-75-one-star-for-monday-9ead4a61`, $2 pot,
deadline 27 Nov 2026 03:05 WIB, blind round 1 on 25 Nov 23:04 WIB.
Program: `main.ts` (Node 22, stdlib only).

## The rubric (judge's brief, in weighing order)

1. Reads as a one-star review of Monday as if Monday were a restaurant.
2. Sounds like a real diner's complaint — a table, a server, a dish or a
   bill that went wrong.
3. Lands the joke about Monday itself, so the line could not be about any
   other day.
4. Short and quotable — retyped into a chat without trimming a word.
5. Plain text inside 25 words, no stage directions, hashtags or explanation.

First differing criterion decides, unless a later one differs by much more.
An exact tie on win rate goes to the smaller text, then to the earlier receipt.

## Why this line

- **Restaurant language first.** "One star" opens it as a review, and "No
  substitutions" is a phrase diners actually hear from a server.
- **A real complaint.** The waiter refuses the swap and still expects a tip
  — a server doing something wrong, plus a money grievance, in one clause.
- **Monday-only.** Nobody begs to swap Tuesday for Friday with this sting.
- **Short.** 16 words, 94 chars — far under both caps, small enough to win
  an exact tie.
- **Fresh.** The "No substitutions" lane had zero hits in the live field.

## Tournament

Six finalists, pairwise, exact rubric (full texts and pair reasons in
`../CANDIDATES.md`): No-substitutions 5–0, Menu-one-item 4–1, Wine-list
3–2, Repetition 2–3, Valet 1–4, Soup-of-the-day 0–5. The pick then beat
the five strongest real field entries (margins 2, 2, 1, 1, 2).

## Flood-check (live field, 767 subs, 25 Nov 2026 ~10:12 WIB)

230 long titles. Saturated — avoided: "ordered the weekend, got Monday
instead" (dozens of wordings), cold coffee, waiter named Deadline /
Traffic / alarm clock, billed for the whole week, waited forty minutes,
seated by the kitchen / bins / printer / next to Tuesday, "the waiter
took my weekend"; used once each: coat check, "asked for the manager",
hostess wait, loyalty free-Monday, tasting menu of Mondays.

## Determinism

The line is a constant; no clock, no random source, no network. Two runs
to different directories write byte-identical `entry.txt` (sha256 in
`../BUILD-REPORT.md`).
