---
sidebar_position: 99
---

# Birthday Problem

## Problem

<p style={{ fontSize: "1.2rem", fontStyle: "italic" }}>

You and your colleagues know that your boss A's birthday is one of the following 10 dates:

- Mar 4, Mar 5, Mar 8
- Jun 4, Jun 7
- Sep 1, Sep 5
- Dec 1, Dec 2, Dec 8

A told you only the month of his birthday, and told your colleague C only the day. After that, you first said: "I don't know A's birthday; C doesn't know it either." After hearing what you said, C replied: "I didn't know A's birthday, but now I know it." You smiled and said: "Now I know it, too." After looking at the 10 dates and hearing your comments, your administrative assistant wrote down A's birthday without asking any questions. So what did the assistant write?

</p>

---

## Hints

<details>
  <summary>Hint 1</summary>

  There are 3 sequences that eliminate the birthday candidates
</details>

<details>
  <summary>Hint 2</summary>

  - You and C do not know the birthday
  - You say that you and C cannot figure out the birtday. From this clue, you can start eliminating candidates
  - C says now C knows it. Start eliminating more candidates
  - Now you know it. Come up to answer
</details>
---

## Solution

<details>
  <summary className="show-sol">Show Solution</summary>
  
  Sep 1
</details>

<details>
  <summary className="show-sol">Show Explanation</summary>
  
  **Explanation:**

**Explanation:**

Don’t let the “he said, she said” part confuse you. Just interpret the logic behind each individual’s comments and try your best to derive useful information from these comments.

Let **D** be the day of the month of A’s birthday. The possible days are: {1, 2, 4, 5, 7, 8}. If the birthday was on a **unique** day, then C would know A’s birthday immediately. Among these days, 2 and 7 are unique.  

Considering that you are sure that C does **not** know A’s birthday, you must infer that the day C was told is **not** 2 or 7. Conclusion: the month cannot be June or December. (If the month had been June, the day C was told might have been 7; if the month had been December, the day might have been 2.)

Now, C knows that the month must be either March or September. He immediately figures out A’s birthday, which means the day must be unique among the March and September dates. That means A’s birthday cannot be March 5 or September 5 (since those days repeat across March/September).  

So the birthday must be one of: March 4, March 8, or September 1.  

Among these three possibilities, March 4 and March 8 have the same month. So if your month was March, you still could not figure out A’s birthday. Since you are able to figure it out, A’s birthday must be **September 1**.

Hence, the assistant must have written **September 1**.

</details>

