---
sidebar_position: 8
---

# Infinite Sequence

## Problem

<p style={{ fontSize: "1.2rem", fontStyle: "italic" }}>

If $x^{x^{x^{x^{\dots}}}} = 2$, what is $x$?

</p>

---

## Hints

<details>
  <summary>Hint 1</summary>

  Think about defining the infinite power tower as a variable.
</details>

<details>
  <summary>Hint 2</summary>

  Let $y = x^{x^{x^{\dots}}}$ and write an equation in terms of $y$.
</details>

---

## Solution

<details>
  <summary className="show-sol">Show Solution</summary>

  $\sqrt{2}$
</details>

<details>
  <summary className="show-sol">Show Explanation</summary>

  Let’s carefully break this down. The expression is:
  
  $$
  x^{x^{x^{x^{\dots}}}}
  $$
  
  which means an **infinite stack of exponentials** with $x$ repeating over and over. Because it goes on forever, let’s name the entire tower $y$. So we write:
  
  $$
  y = x^{x^{x^{x^{\dots}}}}
  $$
  
  But notice that the part in the exponent (the tower after the first $x$) is exactly the **same** tower again — still $y$. Therefore:
  
  $$
  y = x^y
  $$
  
  From the problem, we know the whole tower equals 2:
  
  $$
  y = 2
  $$
  
  So substitute:
  
  $$
  2 = x^2
  $$
  
  Solving for $x$ gives:
  
  $$
  x = \sqrt{2}
  $$
  
  So the value of $x$ must be $\sqrt{2}$.
</details>