---
sidebar_position: 99
---

# Brick puzzle

## Problem

<p style={{ fontSize: "1.2rem", fontStyle: "italic" }}>

Given bricks of 1x1x4, and a box of 6x6x6, can you fit 53 of the bricks into the box?

</p>

---

## Hints

<details>
  <summary>Hint 1</summary>

  $6\cdot6\cdot6 = 216$
  
  $216/4 = 54$
</details>

<details>
  <summary>Hint 2</summary>

  Visualize by layers of the puzzle box, for each layer, how many can fit?
</details>
---

## Solution

<details>
  <summary className="show-sol">Show Solution</summary>

  No
</details>

<details>
  <summary className="show-sol">Show Explanation</summary>
  
  Let's visualize the problem by following the diagram. The left is an empty box. And in the middle, you can see the red stripes representing the bricks occupying space in a layer of the box. Each layer can only contain a maximum of 8 bricks. 8 times 6 is 48 so 48 base bricks can be arranged in that way. And as you can see for a layer, there are 4 unoccupied slots. Tower them up 6 blocks, and you can fit only 4 of them. Thus 48+4=52 is the maximum number of bricks you can place. And hence you can't place 53 bricks into the box.  

  ![Brick puzzle diagram](/img/2-3-brick-puzzle.png)
</details>
