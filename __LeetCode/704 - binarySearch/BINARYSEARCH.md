A recursive binary search in JavaScript

This post seeks to clarify the idea of recursion using an algorithm that almost begs to be implemented recursively: the binary search. Before we jump into the JavaScript implementation, let’s review how a binary search works.
Imagine we have a list of names that are sorted alphabetically.

We want to find out two things:
Is the name “Brian” in the list?
If so, where is the name located in the list?
One way to do this programmatically is to check every name in our list until we either find the name or reach the end of the list. However, because our list of names is sorted, a binary search will achieve our goals much faster.
A binary search works by comparing the name that we want to find (“Brian”) to the name in the middle of the list (“Darcy”). Since “Darcy” comes after “Brian” in the alphabet, then we know that “Brian” cannot be anywhere after “Darcy” in our list.

Next, we repeat the process (psst: recursion) using only the first half of our list. Our list now has four names, so depending on our code, either “Betsy” or “Brian” could be the middle of our list. Let’s assume that our code guesses “Betsy” as the middle name.

“Betsy” comes before “Brian”, and we eliminate both “Betsy” and “Alan”. On our third guess, our binary search will guess “Brian” and end the search.

If the name had not been in the list, our binary search would have reduced the list to one name before determining that the name could not be found.
Javascript Implementation
Let’s take a look at this algorithm in the form of a JavaScript function:
var binarySearch = function(array, target, min, max) {
if (min === undefined) min = 0;
if (max === undefined) max = array.length - 1;

    var guess = Math.floor(((max - min) / 2) + min);
    if (max <= min && array[guess] !== target) return null;
    else if (array[guess] === target) return guess;
    else if (array[guess] < target) return binarySearch(array, target, guess + 1, max);
    else return binarySearch(array, target, min, guess - 1);

};
This is a recursive function, which means that it calls itself. But before we get into the recursive aspects of the function, let’s start at the top.
The parameter array is our list of names and target is the name we are looking for. The parameters min and max determine the section of the list that we are examining. These sections get smaller as we eliminate parts of our list.
In the first line of the function, we copy the array so as not to modify the original. Next, we check if any arguments were passed for min and max. If no arguments have been passed, we set min to 0 (the beginning of the array) and max to array.length-1 (the end of the array).
Next, the program assigns guess to be the median of the valid section of the array. In other words, guess is an index. The first time that binarySearch is called, guess will be the median of the whole array. If the length of the array is 9, then guess will be (9–0)/2 + 0, which is then rounded down using Math.floor(), giving a value of 4. If the length is 8, then guess will be (8–0)/2 + 0, again 4. So, unlike the example above, this code will round down if the length is even.
The function then compares the name at the index guess to the target. If the array has been narrowed down to one name, and that name is not the target, binarySearch will return null. If the name at guess is the same as the target, binarySearch returns guess, the index where the name is located in the array.
Otherwise, if the name located at guess comes before the target in the alphabet, we call binarySearch again on a reduced section of the array. This is the central idea of recursion; instead of creating a loop for the second half of the function, we can just call the function again with a different set of arguments. In the example here, our new function call will set the min to one place after guess. This works in the other direction as well; if the name at guess is smaller than the target, then the new max becomes one less than guess.
Conclusion
Binary searches are a great example of an algorithm looks elegant when implemented recursively. However, keep in mind that recursion is more costly than looping in terms of performance.
This post was inspired by the following GitHub repository, which I highly recommend if you’re looking to practice recursion: https://github.com/JS-Challenges/recursion-prompts
