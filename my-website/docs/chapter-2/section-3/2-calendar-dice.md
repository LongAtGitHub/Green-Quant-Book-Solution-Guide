---
sidebar_position: 99
---

# Calendar made of dice

## Problem

<p style={{ fontSize: "1.2rem", fontStyle: "italic" }}>

You are a crazy guy who dislike traditional calendar. Rather, you use 2 dice to help you organize the date instead. With 2 dice, you want to present the day of the month. And for each die, you  assign a single number digit from 0-9. Note that for day of the month less than 10, you have to use the first digit of 0 to represent it (for e.g, day 5 must be represented as 0 5). And you can swap the order of the dice to represent the day. So, for each die, what set of digits do you assign?

</p>

---

## Hints

<details>
  <summary>Hint 1</summary>

  In both dice, there must be certain same digit identities.

</details>

<details>
  <summary>Hint 2</summary>

  1,2, and 0 must definitely be present in each die.
</details>

<details>
  <summary>Hint 3</summary>

  That leaves each die with 3 slots left. However, there are still 7 candidates left to assign. 
</details>

<details>
  <summary>Hint 4</summary>

  Pay attention to the digit 6. It can be flipped to represent 9.
</details>
---

## Solution

<details>
  <summary className="show-sol">Show Solution</summary>

  Die 1: 0,1,2,3,4,5 \
  Die 2: 0,1,2,6,7,8
</details>

<details>
  <summary className="show-sol">Show Explanation</summary>
  
  As there are days: 11 and 22, 1 and 2 must be present in both dice. In addition, to cover all single-digit days, 0 must be present in both dice. And use the fact that a 6 can be flipped to make a 9, we assign the rest of the candidates to each die to form the final result:

  Die 1: 0,1,2,3,4,5 \
  Die 2: 0,1,2,6,7,8
</details>

