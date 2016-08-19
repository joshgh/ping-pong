# _Ping Pong_

#### _Takes a numerical input and counts up to it while replacing some numbers with words, August 19 2016_

#### By _**Joshua Huffman**_

## Description

_This webpage allows a user to input a number and counts up to it, replacing numbers divisible by 3 with "ping", replacing numbers divisible by 5 with "pong", and replacing numbers divisible by 15 with "ping-pong". The page has buttons at the top which allow the user to switch between my styling of the page and styling which mimics that of the example shown in the project description. This webpage was created as the independent project for week 3 of the Epicodus Intro to Programming class._

## Specifications

* It can count up to the provided number.
  * Example input: 3
  * Example output: [1,2,3]

* It determines whether a number is divisible by 3.
  * Example input: 6
  * Example output: true

* It determines whether a number is divisible by 5.
  * Example input: 20
  * Example output: true

* It determines whether a number is divisible by 15.
  * Example input: 30
  * Example output: true

* It replaces numbers divisible by 3 with "ping".
  * Example input: 9
  * Example output: "ping"

* It replaces numbers divisible by 5 with "pong".
  * Example input: 10
  * Example output: "pong"

* It replaces numbers divisible by 15 with "ping-pong".
  * Example input: 60
  * Example output: "ping-pong"

* It will perform the above replacements for an array of multiple numbers.
  * Example input: [1,2,5,6,10,11,12,14,15,19,20]
  * Example output: [1,2,"pong", "ping", "pong", 11, "ping", 14, "ping-pong", 19, "pong"]



## Setup/Installation Requirements

* _Clone this repository to your computer (type "git clone https://github.com/joshgh/ping-pong" at a terminal prompt if you have git installed)_

* _Open index.html in your web browser of choice_

## Known Bugs

_The sidebar and content divs  in the example styling view do not grow when the page lengthens due to list items being inserted dynamically, it would be better if they updated to 100% of the page height._

## Support and contact details

_Please contact me at j.m.huffman@gmail.com with any questions or comments_

## Technologies Used

_This webpage uses JavaScript and the jQuery library for functionality and the Bootstrap framework for some styling._

### License

*MIT License*

Copyright (c) 2016 **_Joshua Huffman_**
