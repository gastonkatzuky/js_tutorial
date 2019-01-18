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

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return  this.content.toLowerCase();
  }
  // Returns true for a palindrome, false otherwise.
  this.palindrome = function palindrome(string) {
    return this.processedContent() === reverse(this.processedContent());
  }

    // Makes the phrase LOUDER.
  this.louder = function() {
    return this.content.toUpperCase();
  }
}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Returns translation processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.translation.toLowerCase();
  }

}

TranslatedPhrase.prototype = new Phrase();
