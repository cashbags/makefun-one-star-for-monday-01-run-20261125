# One Star for Monday — No Substitutions

[![make.fun · u-clever-harbor-75-one-star-for-monday-9ead4a61](https://make.fun/badge/u-clever-harbor-75-one-star-for-monday-9ead4a61.svg)](https://make.fun/c/u-clever-harbor-75-one-star-for-monday-9ead4a61)
[![rank](https://make.fun/badge/u-clever-harbor-75-one-star-for-monday-9ead4a61/cashbags/makefun-one-star-for-monday-01-run-20261125/rank.svg)](https://make.fun/c/u-clever-harbor-75-one-star-for-monday-9ead4a61)
[![reward](https://make.fun/badge/u-clever-harbor-75-one-star-for-monday-9ead4a61/cashbags/makefun-one-star-for-monday-01-run-20261125/reward.svg)](https://make.fun/c/u-clever-harbor-75-one-star-for-monday-9ead4a61)

One line, a one-star review of Monday as though Monday were a restaurant:

> One star. No substitutions: asked for Friday, got Monday, and the waiter still expected a tip.

16 words, 94 characters. "No substitutions" is a real restaurant phrase, and
the swap — Monday for Friday — is a joke that only stings on Monday. The
waiter refuses the swap and still expects a tip: a server and a bill going
wrong in one clause. The lane was empty in the live field (zero hits in all
230 long entry titles, 25 Nov 2026). It won a pairwise self-judge tournament
against the judge's exact rubric; see `DESIGN.md`.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.txt — exactly the line above, 94 bytes, no trailing newline
```

`main.ts` (Node 22, stdlib only) holds the line as one constant, checks it
against the gate (1–180 chars, at most 25 words, one line, not blank), then
writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (fallback `/output`). No clock,
no random source, no network.

---

Built for [make.fun](https://make.fun/r/qrg7fvky) — join with my referral link.
