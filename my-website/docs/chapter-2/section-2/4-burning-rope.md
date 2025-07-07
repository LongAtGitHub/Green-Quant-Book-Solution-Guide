---
sidebar_position: 4
---

# Burning Ropes

## Problem

<p style={{ fontSize: "1.2rem", fontStyle: "italic" }}>

You have two ropes, each of which takes 1 hour to burn. But either rope has different densities at different points, so there's no guarantee of consistency in the time it takes different sections within the rope to burn. How do you use these two ropes to measure 45 minutes?

</p>

---

## Hints

<details>
  <summary>Hint 1</summary>

  Think about what happens if you burn the rope from both ends.
</details>

<details>
  <summary>Hint 2</summary>

  Lighting one rope at both ends and the other at one end can help stagger time measurements.
</details>

---

## Solution

<details>
  <summary className="show-sol">Show Solution</summary>

  Burn the first rope from both ends and the second rope from one end. After the first rope is gone (30 minutes), light the other end of the second rope to finish in 45 minutes total.
</details>

<details>
  <summary className="show-sol">Show Explanation</summary>

  Since each rope takes 60 minutes to burn but burns unevenly, you cannot measure half of it by simply burning from one end. However, **lighting a rope at both ends** guarantees it burns completely in 30 minutes, no matter how uneven the density is, because fire will travel from both ends toward the middle.  

  Here is the plan:
  
  - Light **Rope A** at both ends. This makes it finish in exactly 30 minutes.  
  - At the same time, light **Rope B** at one end. Since Rope B burns at an unknown speed, after 30 minutes, it still has some left — but that leftover portion must burn in 30 more minutes, because only one end has been burning so far.  
  - Once Rope A finishes (after 30 minutes), immediately light **the other end** of Rope B. Now Rope B is burning from both ends, and its remaining 30 minutes of burn time will be consumed in **half the time**, which is 15 minutes.
  
  So the total measured time is $30 + 15 = 45$ minutes.
</details>

