---
title: JavaScript interview questions
layout: post
category: code
featured: true
---

I read (The Best JavaScript Interview Question)[http://www.technofattie.com/2014/09/03/the-best-javascript-interview-question.html]
the other day, and thought I'd put my own set of interview questions out there.

I've compiled the following set of questions/exercises over many interviews as a way to quickly judge
whether or not someone really knows JavaScript. I think these kind of questions are better for contractors
than perms, because when hiring a contractor you really should be getting someone who is immediately
productive rather than considering a candidate's long-term prospects and ability to improve.

I've stolen some questions from interviews I've been given, made up some of my own, and also just made
one up as I was writing this. I think they cover a good proportion of the language, and someone who
can nail these is likely to be comfortable writing in a range of styles, and probably writes JavaScript-y
JavaScript (as opposed to thinking JavaScript is crazy, man).

Doing them all can take a while, so I'll often just pick some of them to do. You can drop out gracefully
at any point to avoid any embarassment, and some of the exercises can lead to some good talking points,
so I think you can be quite flexible. Some are pretty academic, some have pretty much one answer, and
some are more open-ended. None of them really get into application architecture, writing clean, consistent
APIs or any of that higher-level stuff - it's mainly to judge the interviewee's knowledge of the language
that they so proudly put atop their CV.

## Object creation

<blockquote>
    <p>I need to be able to create a car, allowing me to pass the colour of the car as a parameter.
    If I do not specify a colour, it should default to black.</p>
    <p>The car should have a 'honk' method, which sets its 'honking' property to true immediately,
    and sets its honking property to false after 1 second.</p>
    <p>The car should have a 'run' method, which sets its 'running' property to true.</p>
    <p>I will be creating many thousands of these rapidly, so I need it to be as efficient as possible
    for memory usage and speed of creation.</p>
</blockquote>

### One solution

{% highlight javascript %}
function Car(color) {
    this.color = color || 'black';
}

Car.prototype.honk = function () {
    this.honking = true;

    setTimeout(function () {
        this.honking = false;
    }.bind(this), 1000);
};

Car.prototype.run = function () {
    this.running = true;
};

var blueCar = new Car('blue');
var blackCar = new Car();
{% endhighlight %}

This can also be done with ```Object.create```, but then we still need a factory function to allow us
to pass the optional colour on creation.

### Discussion

This covers:

* prototypes
* binding/closure
* idiomatic JavaScript

The use of prototypes is important here. This minimizes the memory usage and maximizes the speed of
creation. If you don't use the prototype, or understand why it helps

This also covers binding, because otherwise the ```setTimeout``` callback won't work correctly. Using
a scoped variable a la ```var self = this``` is fine, too.

Seeing how the default colour is assigned is interesting. I think the short-circuiting assignment conveys
intent and is pretty standard. Testing ```color == null``` or ```color === null || color === undefined```
is fine, too, if not a little heavy-handed. Yes, you can get into type-checking and throwing errors,
but I'd be a little worried about overengineering, and the reduction in clarity and terseness that it
brings.

The best candidates here will hopefully write something very short, as it's a very simple problem. They
also get into discussions around:

* the tolerance of the ```color``` parameter. Should I throw if a non-string is passed? What
about an empty string?
* how the API might look if we start to add multiple parameters. Should we accept a config object instead?
How do we deal with required parameters vs optional parameters?
* binding vs closure.
* uppercase letters for constructor functions.
* constructor functions vs ```Object.create``` vs factories.
* point out the potential issue with honking again within a second of a previous honk. Should we queue
honks? Should we clear the timeout and start again?

Then we move on...

## Functional JavaScript

<blockquote>
    <p>Given the following array, build me an array of cars with those colours.</p>
{% highlight javascript %}
var colors = ['blue', 'black', 'red'];
var cars = ...;
{% endhighlight %}
</blockquote>

### One solution

{% highlight javascript %}
var colors = ['blue', 'black', 'red'];
var cars = colors.map(buildCar);

function buildCar (color) {
    return new Car(color);
}
{% endhighlight %}

### Discussion

If they wrote a factory function wrapping ```Object.create``` in the first step, they can just map
directly to that function, which makes this a bit more elegant.

If efficiency is mentioned, then an iterative approach is fine, but I'd expect to see either the array
length cached, or any other way of improving performance. Yes, these are micro-optimisations, but it's
good to know that they understand the implications of what they're writing. If they do a plain old iteration
up to ```colors.length``` then I'll ask about performance.

I personally prefer to use a ```map``` here because it's more elegant than iteration, and if someone
immediately thinks of using ```map``` they're probably comfortable writing in a more functional style.
If you've been around JavaScript for a while, and studied it at all, you'll probably know how to use
its functional nature to your advantage.

Now we can get a bit more tricky...

## Dynamic objects

<blockquote>
    <p>I've created an array of 1000 ```cars```. When I call ```run``` on the first car, I want it to
    run as normal. When I call ```run``` on any of the others <em>and any cars created in the future</em>, I
    want it to run as normal, but also log <code>The {color} car is now running.</code> to the console.</p>
</blockquote>

### One solution

{% highlight javascript %}
cars[0].run = cars[0].run;

var oldRun = Car.prototype.run;
Car.prototype.run = function () {
    console.log("The " + this.color + " car is now running");
    return oldRun.apply(this, arguments);
};
{% endhighlight %}

### Discussion

This covers:

* property lookup on objects
* the use of ```apply``` or ```call```
* changing the behaviour of existing objects by modifying the prototype

I had one candidate question the usefulness of modifying a prototype like this, but this is exactly
what allows jQuery to have late binding of plugins, by modifying ```jQuery.fn```.

This one can take a while to get to. I think half the problem is my ability to express the desired
functionality, so I'd like to find a better way of testing these areas, or a better way of asking the
question.

## Call and apply

This similar to the previous question, but a little simpler.

<blockquote>
<p>A truck object exists:</p>
{% highlight javascript %}
var truck = {
    turnLightsOn: function () {
        this.lightsOn = true;
    }
};
{% endhighlight %}
<p>I want to use the truck's method to turn the first car's lights on.</p>
</blockquote>

### One solution

There is pretty much one solution here.

{% highlight javascript %}
truck.turnOnLights.call(cars[0]);
{% endhighlight %}

### Discussion

Often people will go for copying the method onto the car, so I'll ask for them to do it without doing
that, and that JavaScript has a specific mechanism for this. That usually does it.

## Binding shim

This is very much an academic exercise. I can't see why anyone would ever have to write this in the
wild, but it covers quite a few important concepts.

> Can you shim the ```bind``` function?

### One solution

{% highlight javascript %}
Function.prototype.bind = function (context) {
    var self = this;
    return function () {
        return self.apply(context, arguments);
    }
};
{% endhighlight %}

### Discussion

This can also be done by writing a ```bind``` function like underscore or CoffeeScript does, which is
good if you don't want to be modifying JavaScript built-ins.

This seems quite tricky at the outset, but most people actually get it with a bit of prompting. For
example, 'what does ```bind``` return?' gets the ```return function {}``` bit. 'What does the returned
function have to do?' often gets ```self()``` and from there you can then sort out the context and
arguments bit.

## Conclusion

Hopefully they cover what most people would consider to be the important parts of JavaScript. With these
you should be able to write elegant, efficient and idiomatic code, and you definitely know:

* how prototypes work and how they can be of benefit
* how dynamic ```this``` works
* how binding works
* about the first-class nature of functions
