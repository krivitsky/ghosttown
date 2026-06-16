---
date: 2023-04-13
subject: "Re: technical excellence: automated & synergistic design -> Generative Design"
to: candidate-less-trainers@googlegroups.com
url: https://groups.google.com/d/msgid/candidate-less-trainers/53ebe0db-8341-4a8f-b6ae-89de1c4596cdn%40googlegroups.com
---

now 2 years later this is called *Generative Design*, and double-clicking,
gonna be disruptive. i predict those that thrive will be those that become
masters of these tools (as shared below)

2 examples of generative design (one not yet generally released)
===================================== *** EXAMPLE 1 *** copilot generates
TESTS!
>>> i wrote this comment:
// test function called test_name_parse that tests function "name_parse"
assuming that it takes 1 argument of the full name and returns the first,
optional middle, and last name in an array

>>> it created both the solution & test code
function name_parse(full_name) {
  var names = full_name.split(" ");
  return [names[0], names[1], names[2]];
}

function test_name_parse() {
  var result = name_parse("John Doe");
  if (result[0] !== "John") {
    throw new Error('name_parse("John Doe")[0] should be "John"');
  }
  if (result[1] !== undefined) {
    throw new Error('name_parse("John Doe")[1] should be undefined');
  }
  if (result[2] !== "Doe") {
    throw new Error('name_parse("John Doe")[2] should be "Doe"');
  }
}

===================================== *** EXAMPLE 2 *** copilot is soon
gonna...
... integrate gpt4 as a discussion assistant so that one can dialog with it
about code under discussion, change it together, etc

these are amazing times that never thought would see, and this re-invents
some of sw dev, and someday soon parts of prod dev

c
