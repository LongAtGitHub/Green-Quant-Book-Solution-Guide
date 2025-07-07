---
sidebar_position: 1
---

# River Crossing

## Problem

<p style={{ fontSize: "1.2rem", fontStyle: "italic" }}>

Four people, A, B, C and D need to get across a river. The only way to cross the river isby an old bridge, which holds at most 2 people at a time. Being dark, they can't cross thebridge without a torch, of which they only have one. So each pair can only walk at thespeed of the slower person. They need to get all of them across to the other side as
quickly as possible. A is the slowest and takes 10 minutes to cross; B takes 5 minutes; Сtakes 2 minutes; and D takes 1 minute.

What is the minimum time to get all of them across to the other side?

</p>

---

## Hints

<details>
  <summary>Hint 1</summary>

  A and B should go together
</details>
---

## Solution

<details>
  <summary className="show-sol">Show Solution</summary>

  17 minutes
</details>

<details>
  <summary className="show-sol">Show Explanation</summary>

To utilize the event that A and B go together to optimize time. The routine is as below:

1. C and D cross together in 2 minutes.  
2. D returns with the flashlight in 1 minute.  
3. A and B cross together in 10 minutes.  
4. C returns with the flashlight in 2 minutes.  
5. C and D cross together again in 2 minutes.  

Total: 2 + 1 + 10 + 2 + 2 = 17 minutes
</details>
