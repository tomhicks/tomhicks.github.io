--- 
title: Evolving a codebase
layout: post
featured: true
---

As requirements and features change, a codebase changes with it. While consistency in a codebase is a good thing, it's difficult to maintain consistency and if every minor feature change means updating all previous code to follow the same pattern, it can make it very expensive to iterate a feature set and difficult to innovate.

Evolution requires three things:

1. Reproduction or replication
2. Variation from one generation to the next
3. Selective pressure to reward advantageous mutations

These three things can be achieved in a codebase in the following way:

1. Adding new features which are similar to previous features
2. Implementing a new feature in a slightly different way than previously.
3. Periodically reviewing the different approaches, picking a winner, and applying those ideas to existing and upcoming feature additions.

## Costs

This comes at a cost, however. Your code will be less consistent, which can make a codebase harder to learn. Having said that, if you strive to write code that is explicit, and that does not require much knowledge outside of the bit of code you're looking at, consistency is not as important. Essentially, more code that is simple to understand can be better than less code that is hard to understand.

## Benefits

Evolving a codebase in this way means you can try different approaches to familiar problems as cheaply as possible and gradually move towards the most fit solutions. You can shorten the up-front design process where you're trying to predict future requirements (YAGNI), and you get faster feedback on design decisions that didn't really work out. You also tend to end up with smaller refactors, and refactor safe in the knowledge that you've explored many possible solutions and are writing something that solves a well-explored problem.

## Examples

Some examples of this kind of code mutation that we've tried include:

* Changing how certain modules are instantiated with their dependencies. The idea was to make unit testing setup easier. It's actually resulted in us realising that we can/should decouple some parts of code from the application environment in which it runs, so we can use it across multiple products.
* Handling state differently when users are filling in forms in our apps. This has led to a more flexible, more testable approach by moving state from controllers into stores (it's a Flux app).
* Changing the use of our page objects for our UI automation. This is still under ongoing, but the intention is to make tests less sensitive to markup changes.

Each of these is an example of something fairly close to the core of the codebase. A sweeping refactor of everything in one go would have taken longer and been more risky. It also would have often taken several failed experiments to get to a decent solution, whereas we could try a few different solutions in parallel, and then later take all that knowledge we had gained to give us a result that takes into consideration a wide range of requirements.

## Conclusion

As new features are added to a product, try implementing the New Thing in a slightly different way than the Old Things so you can really see different solutions in action. Then periodically review your mutations, pick a winner (or winners) and refactor to your chosen, winning solution (or mix of solutions).

Ultimately what we're talking about here is incremental build-up of technical debt (in having inconsistent code), followed by a rigorous process of paying off that debt. In my opinion, this is preferential to a lengthy up-front design process that often leads to a solution that no longer works for the new features by the time it is finished.
