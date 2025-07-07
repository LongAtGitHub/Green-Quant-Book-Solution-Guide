---
sidebar_position: 7
---

# Horse Race

## Problem

<p style={{ fontSize: "1.2rem", fontStyle: "italic" }}>

There are 25 horses, each of which runs at a constant speed that is different from the other horses'. Since the track only has 5 lanes, each race can have at most 5 horses. If you need to find the 3 fastest horses, what is the minimum number of races needed to identify them?

</p>

---

## Hints

<details>
  <summary>Hint 1</summary>

  First divide the 25 horses into groups of 5.
</details>

<details>
  <summary>Hint 2</summary>

  Think about racing the group winners against each other to narrow down the final candidates.
</details>

<details>
  <summary>Hint 3</summary>

  After identifying the fastest in each group, carefully reason which remaining horses could still be in the top 3.
</details>

---

## Solution

<details>
  <summary className="show-sol">Show Solution</summary>

  7 races
</details>

<details>
  <summary className="show-sol">Show Explanation</summary>

  Let’s reason through carefully. There are 25 horses, each with a unique speed. Because only 5 can race at once, you cannot directly race them all together. So:
  
  1. **First round (5 races):** Divide the 25 horses into 5 groups of 5, and race each group. Now you know the order within each group (fastest to slowest).
  
  2. **Second round (6th race):** Take the **first place** horse from each group (5 total) and race them. From this race, you know which horse is fastest overall, and you also rank the other 4 group winners against each other.
  
  3. Now think about which horses *could* still be in the top 3. These must come from:
     - The top 3 finishers in the winners' race (since they beat the other group winners)
     - The second and third place horses from the group of the overall winner (since they may only have been beaten by the best)
     - The second place horse from the group of the second overall
     - Possibly the second place horse from the group of the third overall
  
  4. You gather these candidates (at most 5 horses) and run a **final (7th) race** to get 2nd and 3rd place among them.
  
  Therefore, in total, you need **7 races**:
  - 5 races to rank each group
  - 1 winners' race
  - 1 final decisive race among the candidates
</details>

