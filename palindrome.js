// Reverses a string.
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Returns true for a palindrome, false otherwise.
function palindrome(string) {
  let processedContent = string.toLowerCase();
  return processedContent === reverse(processedContent);
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns true for a palindrome, false otherwise.
  this.palindrome = function palindrome(string) {
    let processedContent = this.content.toLowerCase();
    return processedContent === reverse(processedContent);
  }

    // Makes the phrase LOUDER.
  this.louder = function() {
    return this.content.toUpperCase();
  };

}
