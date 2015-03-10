function palindromeDetector() {
	
	var word = document.getElementById("palindrome").value;

    var newWord = word.replace(/[^A-z0-9]/g,"");
    newWord= newWord.toLowerCase();
	
	function isPalindrome(newWord) {
		if (newWord.length == 1) {
			return true; 
		}
		if (newWord.length==2) {
			return (newWord.charAt(0)==newWord.charAt(1));
		}
		
		return (newWord.charAt(0)==newWord.charAt(newWord.length-1) && isPalindrome(newWord.substring(1,newWord.length-1)));
	}

	if (isPalindrome(newWord)){
		document.getElementById("results").innerHTML = "<h2>Results</h2> <p>Your input <blockquote>" + word + "</blockquote> is a palindrome</p><br />";
	}
	else {
        document.getElementById("results").innerHTML = "<h2>Results</h2> <p>Your input <blockquote>" + word + "</blockquote> is NOT a palindrome</p><br />";
    }

	

	
}