AOS.init();
AOS.init({
  
  offset: 120, 
  delay: 0, 
  duration: 700, 
  easing: "ease", 
  once: false, 
  mirror: false, 
  anchorPlacement: "top-bottom", 
});


document.addEventListener('DOMContentLoaded', function() {
  // Typing effect for the text
  const typingText = document.querySelector('.typing-2');
  const textArray = ["a PA", "a Butler", "a House Manager", "a Caregiver"];
  let textIndex = 0;
  let charIndex = 0;

  function type() {
      if (charIndex < textArray[textIndex].length) {
          typingText.textContent += textArray[textIndex].charAt(charIndex);
          charIndex++;
          setTimeout(type, 100);
      } else {
          setTimeout(erase, 2000);
      }
  }

  function erase() {
      if (charIndex > 0) {
          typingText.textContent = textArray[textIndex].substring(0, charIndex - 1);
          charIndex--;
          setTimeout(erase, 100);
      } else {
          textIndex = (textIndex + 1) % textArray.length;
          setTimeout(type, 1000);
      }
  }

  type();
});
