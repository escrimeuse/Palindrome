function palindromeDetector() {
	
	var word = document.getElementById("palindrome").value; 
	
	function isPalindrome(word) {
		if (word.length == 1) {
			return true; 
		}
		if (word.length==2) {
			return (word.charAt(0)==word.charAt(1)); 
		}
		
		return (word.charAt(0)==word.charAt(word.length-1) && isPalindrome(word.substring(1,word.length-1)));
	}

	if (isPalindrome(word)){
		document.getElementById("results").innerHTML = "<h2>Results</h2> <p>Your input <blockquote>" + word + "</blockquote> is a palindrome</p>";
	}
	else {
		document.getElementById("results").innerHTML = "<h2>Results</h2> <p>Your input is NOT a palindrome</p>";
	}

	

	
}