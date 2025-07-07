---
sidebar_position: 6
---

# Trailing Zeros

## Problem

<p style={{ fontSize: "1.2rem", fontStyle: "italic" }}>

How many trailing zeros are there in 100! (factorial of 100)?

</p>

---

## Hints

<details>
  <summary>Hint 1</summary>

  Think about prime factorization of factorial numbers.
</details>

<details>
  <summary>Hint 2</summary>

  Which number is rarer in forming 10s, the factor 2 or the factor 5?
</details>

<details>
  <summary>Hint 3</summary>

  Be careful to count multiples of 25, 50, 75, and 100 because they contribute extra factors of 5 beyond the first.
</details>

---

## Solution

<details>
  <summary className="show-sol">Show Solution</summary>

  24
</details>

<details>
  <summary className="show-sol">Show Explanation</summary>

  Trailing zeros in a factorial come from factors of 10. Every 10 is made by multiplying 2 × 5. In a factorial like 100!, there are always plenty of 2's from even numbers, so the limiting factor is how many 5's you can find.  

  - First, count how many multiples of 5 are between 1 and 100: there are $\lfloor 100/5 \rfloor = 20$ such numbers (5, 10, 15, …, 100).  
  - But some numbers contribute **more than one 5** in their prime factorization. Specifically, multiples of 25 (like 25, 50, 75, 100) contribute an *extra* factor of 5, because $25 = 5^2$. That adds another $\lfloor 100/25 \rfloor = 4$ factors of 5.  

  So the total number of 5's is $20 + 4 = 24$, and each pairs with a 2 to make a trailing zero. Therefore 100! ends with **24 trailing zeros**.
</details>

## Follow-up Question

<details class="followup">
  <summary>Follow-up</summary>

  What if it is $n!$ ? Could you solve it?
</details>
