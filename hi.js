function generateRandomLettersWithVowels() {
  const vowels = "aeiou";
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let result = "";

  // Generate at least 2 vowels
  let vowelCount = 0;
  for (let i = 0; i < 4; i++) {
    if (vowelCount < 2) {
      // Ensure at least 2 vowels
      const randomIndex = Math.floor(Math.random() * vowels.length);
      result += vowels.charAt(randomIndex);
      vowelCount++;
    } else {
      // Fill remaining letters with consonants
      const randomIndex = Math.floor(Math.random() * consonants.length);
      result += consonants.charAt(randomIndex);
    }
  }

  // Shuffle the result to randomize the order
  result = shuffleString(result);

  return result;
}

// Function to shuffle a string (Fisher-Yates shuffle algorithm)
function shuffleString(str) {
  let array = str.split("");
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.join("");
}

// Example usage:
const randomLetters = generateRandomLettersWithVowels();
console.log(randomLetters); // Outputs something like 'eblm'
