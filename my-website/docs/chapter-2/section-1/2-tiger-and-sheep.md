---
sidebar_position: 2
---

# Tiger And Sheep

## Problem

<p style={{ fontSize: "1.2rem", fontStyle: "italic" }}>
One hundred tigers and one sheep are put on a magic island that only has grass. Tigers can eat grass, but they would rather eat sheep. 

Assume: 

A. Each time only one tiger can eat one sheep, and that tiger itself will become a sheep after it eats the sheep. 

B. All tigers are smart and perfectly rational and they want to survive. So will the sheep be eaten?
</p>

---

## Hints

<details>
  <summary>Hint 1</summary>

  Again. Think about smaller cases like n=1,2,... for n denoting the number of tigers.
</details>

<details>
  <summary>Hint 2</summary>

 There are only 2 patterns that affect the result.
</details>

<details>
  <summary>Hint 3</summary>

  Take a look at whether n being even or odd.
</details>

---

## Solution

<details>
  <summary class="show-sol">Show Solution</summary>

Consider the smaller cases

---

**Case $n=1$**  
- There is only 1 tiger.
- It will eat the sheep immediately, because after becoming a sheep, there are no other tigers left to threaten it.
- So the sheep is eaten.

---

**Case $n=2$**  
- Suppose Tiger A considers eating the sheep and turning into a sheep.
- After this, there will be 1 tiger left and 1 new sheep (Tiger A as a sheep).
- From the $n=1$ subproblem, the remaining tiger would then eat Tiger A (who is now a sheep).
- Hence, Tiger A does **not** eat, and neither does the other tiger.
- The sheep survives.

---

**Case $n=3$**  
- Tiger A considers eating the sheep.
- After becoming a sheep, there will be 2 tigers left and 1 new sheep (Tiger A as a sheep).
- From the $n=2$ subproblem, we know two tigers will not eat a sheep, since they fear retaliation.
- Therefore, once Tiger A has eaten and turned into a sheep, no tiger will eat Tiger A.
- So the sheep is eaten.

---

**Case $n=4$**  
- Suppose Tiger A eats the sheep and becomes a sheep.
- There will be 3 tigers left and 1 new sheep (Tiger A as a sheep).
- From the $n=3$ subproblem, one of those 3 tigers would eat Tiger A.
- Therefore, Tiger A does **not** eat.
- Similarly, no other tiger will eat.
- The sheep survives.

---

**General Pattern:**
- If $n$ is **odd**, one tiger will eat the sheep.
- If $n$ is **even**, the sheep survives.

---

**Answer Summary:**
> In this problem, $n=100$ then no tiger dares to eat the sheep.

</details>

