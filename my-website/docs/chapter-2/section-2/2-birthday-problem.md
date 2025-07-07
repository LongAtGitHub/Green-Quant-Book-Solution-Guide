---
sidebar_position: 2
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

  There are 3 mentioned dialogs that eliminate the birthday candidates in sequence.
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

First, remember:
- You know the **month**.
- C knows the **day**.

There are some days (like 2 and 7) that only appear once, so if C had gotten those days, he would know the birthday right away. But you say *C doesn’t know it*, so the day cannot be 2 or 7. That means the birthday is not in June or December, because those months have days 2 or 7.

Now the possible months left are March and September.

Next, C hears this, and says *“now I know the birthday.”* That means C’s day must be unique among the March and September dates:
- March days: 4, 5, 8
- September days: 1, 5

Day 5 appears in both March and September, so if C had 5, he still wouldn’t know. So the birthday cannot be March 5 or September 5.

That leaves:
- March 4, March 8, September 1

Finally, you say *“now I know it, too.”* If the month had been March, you still wouldn’t know because March has two dates left (March 4 and March 8). But you do know — so the month must be September, with only one date left: **September 1**.


</details>

