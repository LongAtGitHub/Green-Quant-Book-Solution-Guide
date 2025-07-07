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

## Solution Explanation

<details>
  <summary className="show-sol">Show Solution</summary>

  7 races
</details>

<details>
  <summary className="show-sol">Show Explanation</summary>

First, divide the 25 horses into 5 groups of 5:

- Group 1: 1–5  
- Group 2: 6–10  
- Group 3: 11–15  
- Group 4: 16–20  
- Group 5: 21–25

Run one race for each group (5 races total) to determine their group rankings. So after those 5 races you know the fastest horse in each group, and the ordering within each group.

**Without loss of generality**, assume the winners of those heats are:

- horse 1 (fastest in Group 1)  
- horse 6 (fastest in Group 2)  
- horse 11 (fastest in Group 3)  
- horse 16 (fastest in Group 4)  
- horse 21 (fastest in Group 5)

Now you race these 5 horses against each other (the 6th race):
Race 1, 6, 11, 16, 21

Again without loss of generality, suppose the finish order is:
1 (fastest), 6, 11, 16, 21

From this race, you know horse 1 is the fastest overall, and you can make some eliminations:

✅ Any horse in Group 4 and Group 5 is eliminated (16–20 and 21–25), since even their group winner finished 4th and 5th.  
✅ Horses 4–5, 9–10, 14–15 are also eliminated, because they finished behind better horses in their own group.

Now, who could be second and third overall?

- horse 6 (finished second among winners)  
- horse 2 (second place in horse 1’s group)  
- horse 3 (third place in horse 1’s group)  
- horse 7 (second place in horse 6’s group)  
- horse 11 (third in the winners’ race)

These 5 are the only contenders for 2nd and 3rd place. Run one more race (the 7th race) among these 5 horses. The top 2 finishers from that final race will take second and third overall.

✅ In total, you use:
- 5 group races
- 1 race among the group winners
- 1 final race among the possible 2nd and 3rd contenders
**7 races** to determine the top 3 horses.
</details>

