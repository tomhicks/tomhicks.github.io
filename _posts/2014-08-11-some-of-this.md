---
title: Some of this
layout: post
category: code
featured: true
---

Bjorn Tipling wrote an interesting [article](http://bjorn.tipling.com/all-this)
about the ```this``` keyword in JavaScript. Whilst it did explain lots of the different
ways in which ```this``` manifests itself, it was incredibly long, and I think approached
the explanation from the wrong direction, leading to a very complex explanation of
a simple concept.

The problem is that the explanation was based around the question: "what is ```this```
for this piece of code that I've written?"

The way JavaScript works, the ```this``` keyword is not defined at the time you write
the code, but at the time you execute it, which makes answering the above question
pretty pointless. It is akin to describing how to use a hammer in terms of the types
of wood you can join together with it: you can probably come up with a useful list, but
it won't be exhaustive, and it doesn't help you understand much about hammers.

Whenever I have to explain ```this``` to people, I explain it as follows:

* ```this``` is the thing before the dot when a function is called
* if there is no dot, ```this``` is the global object (or ```undefined``` in strict mode)
* if the function has been explicitly bound (using ```call```, ```apply``` or ```bind```),
it trumps either of the above rules
* if the function is invoked with the ```new``` keyword, this refers to an object
whose prototype is equal to the function's ```prototype``` property

That's it.

To go on and explain what jQuery sets ```this``` to in its each method, etc. is
to describe a library implementation detail. Just to know that it _can_ be defined
by a library author is enough - the actual detail should be in that library's docs.

So I would urge people to try and avoid thinking about ```this``` in terms of what
other languages do. Although it does work a bit like ```this``` in other languages
in certain circumstances, it's a mistake to take that as your starting point, because
you then have to have lots of "oh but in X case is does Y" rules in your head.

If you start with the (correct) assumption that ```this``` is defined at call-time,
not at write-time, it'll be a whole lot easier to understand.
