//  palindrome.js
//  Defined here is a recursive function to determine if a word, phrase, or sequence of numbers is a palindrome.
//  Author: Cathryn Griffiths - cathryn.griffiths@gmail.com - github.com/escrimeuse/

function palindromeDetector() {
	
	var word = document.getElementById("palindrome").value;

    var newWord = word.replace(/[^A-z0-9]/g,"");    // remove all whitespace and non-alphanumeric characters
    newWord= newWord.toLowerCase(); // make all letters lowercase

    if (isPalindrome(newWord)){
        document.getElementById("results").innerHTML = "<h2>Results</h2> <p>Your input <blockquote>" + word + "</blockquote> is a palindrome</p><br />";
    }
    else {
        document.getElementById("results").innerHTML = "<h2>Results</h2> <p>Your input <blockquote>" + word + "</blockquote> is NOT a palindrome</p><br />";
    }

	function isPalindrome(newWord) {

        // Base cases:
		if (newWord.length == 1) {
			return true; 
		}
		if (newWord.length==2) {
			return (newWord.charAt(0)==newWord.charAt(1));
		}

        // Recursive case:
		return (newWord.charAt(0)==newWord.charAt(newWord.length-1) && isPalindrome(newWord.substring(1,newWord.length-1)));
	}

	
}