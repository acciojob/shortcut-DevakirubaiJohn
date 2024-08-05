function shortcut(s1, s2) {
  // Check if either string is empty
  if (s1.length === 0 || s2.length === 0) {
    // If either string is empty, return an empty string
    return '';
  } else {
    // If both strings are not empty, return the initials
    return s1[0] + s2[0];
  }
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
