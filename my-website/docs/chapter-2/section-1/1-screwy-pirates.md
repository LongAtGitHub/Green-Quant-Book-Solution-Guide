---
sidebar_position: 1
---

# Screwy Pirates

## Problem

<p style={{ fontSize: "1.2rem", fontStyle: "italic" }}>
Five pirates looted a chest full of 100 gold coins. Being a bunch of democratic pirates, they agree on the following method to divide the loot.

The most senior pirate will propose a distribution of the coins. All pirates, including the most senior pirate, will then vote. If at least 50% of the pirates accept, the gold is divided as proposed. Otherwise, the senior pirate is fed to the shark...

How will the gold coins be divided in the end?
</p>
---

## Hints

<details>
  <summary>Hint 1</summary>

  Pirates are perfectly rational: they will do anything to survive, then maximize their gold, and prefer fewer pirates on board if everything else is equal.
</details>

<details>
  <summary>Hint 2</summary>

First solve what happens with only 1 pirate. Who gets what, and why? And then go for 2,3,4, and 5 pirates.
</details>

<details>
  <summary>Hint 3</summary>

Work backward from the simplest scenario. What happens to each pirate if the current proposer is thrown to the sharks?
</details>
---

## Solution

<details>
  <summary className="show-sol">Show Solution</summary>
  
Let the pirates be denoted as $$P_1, P_2, P_3, P_4, P_5$$ with $$P_5$$ being the most senior and $$P_1$$ the least senior. The pirates follow these preferences:  
1. Stay alive  
2. Maximize coins  
3. Prefer fewer pirates if indifferent  

---

**Case $$n=1$$:**  
Only one pirate:  
- $$P_1: 100$$

---

**Case $$n=2$$:**  
$$P_2$$ proposes, needing 50% of 2 votes (1 vote).  
They vote for themselves:  
- $$P_2: 100$$  
- $$P_1: 0$$

---

**Case $$n=3$$:**  
$$P_3$$ proposes, needs 2 out of 3 votes.  
Looking ahead if $$P_3$$ is thrown to the sharks, from the $$n=2$$ case:  
- $$P_2: 100$$  
- $$P_1: 0$$  

$$P_1$$ would get 0, so $$P_3$$ can offer $$P_1$$ one coin, which is better than zero:  
- $$P_3: 99$$  
- $$P_2: 0$$  
- $$P_1: 1$$

---

**Case $$n=4$$:**  
$$P_4$$ proposes, needs 2 out of 4 votes.  
If $$P_4$$ is thrown overboard, then from $$n=3$$:  
- $$P_3: 99$$  
- $$P_2: 0$$  
- $$P_1: 1$$  

$$P_2$$ gets 0 in that scenario, so $$P_4$$ can buy their vote with 1 coin:  
- $$P_4: 99$$  
- $$P_3: 0$$  
- $$P_2: 1$$  
- $$P_1: 0$$

---

**Case $$n=5$$:**  
$$P_5$$ proposes, needs 3 out of 5 votes.  
If $$P_5$$ is thrown overboard, then from $$n=4$$:  
- $$P_4: 99$$  
- $$P_3: 0$$  
- $$P_2: 1$$  
- $$P_1: 0$$  

$$P_3$$ gets 0, $$P_1$$ gets 0, so $$P_5$$ can buy their votes with 1 coin each:  
- $$P_5: 98$$  
- $$P_4: 0$$  
- $$P_3: 1$$  
- $$P_2: 0$$  
- $$P_1: 1$$

---

Therefore the final division for $$n=5$$ is:  
$$
P_5: 98, \quad P_4: 0, \quad P_3: 1, \quad P_2: 0, \quad P_1: 1
$$
</details>

## Follow-up Question

<details class="followup">
  <summary>Rather than 5, what about $n$ pirates?</summary>

  As observed from the solution above, the pattern is to look at the previous case $(n-1)$, identify which pirates would otherwise get zero coins, and bribe them with one coin to secure their vote.  

  Therefore, for general $n$, the most senior pirate $P_n$ will keep as much as possible, distributing coins as follows:

  $$
  P_n: 100 - \left( \left\lceil \frac{n}{2} \right\rceil - 1 \right)
  $$

  and then assign 1 coin each to
  $$
  P_{n-2},\ P_{n-4},\ P_{n-6},\ \dots
  $$
  All other pirates receive 0. 

  
  And if you want to prove this more rigorously true for all cases, I suggest using induction as a starting point.
</details>
