---
sidebar_position: 3
---

# Card Game

## Problem

<p style={{ fontSize: "1.2rem", fontStyle: "italic" }}>

A casino offers a card game using a normal deck of 52 cards. The rule is that you turn over two cards each time. For each pair, if both are black, they go to the dealer's pile; if both are red, they go to your pile; if one black and one red, they are discarded. The process is repeated until you go through all 52 cards. If you have more cards in your pile, you win $100; otherwise (including ties) you get nothing. The casino allows you to negotiate the price you want to pay for the game. How much would you be willing to pay to play this game?

</p>

---

## Hints

<details>
  <summary>Hint 1</summary>

  Think about symmetry — what happens to the total number of red and black cards as you discard pairs?
</details>

<details>
  <summary>Hint 2</summary>

  Each discarded pair has one black and one red card. What does that tell you about the number of leftover cards for you and the dealer?
</details>

---

## Solution

<details>
  <summary className="show-sol">Show Solution</summary>

  $0
</details>

<details>
  <summary className="show-sol">Show Explanation</summary>

  Let’s break this down. The casino lets you place pairs of cards into piles:  
  - two black cards go to the dealer  
  - two red cards go to you  
  - one black and one red card are discarded  

  There are 26 black cards and 26 red cards total in a standard deck. Every discarded pair of one red and one black **removes exactly one red and one black from play**, keeping the counts balanced.  

  That means the only cards left to be scored will be all the leftover red pairs for you and black pairs for the dealer. Since there were the same total number of red and black cards to begin with, and each discarded pair takes away an equal one of each color, the amount of cards left for you (reds) and for the dealer (blacks) will **always** be identical.  

  Because ties go to the casino, you have no chance to win in the long run. You should pay **zero** to play this game.
</details>

