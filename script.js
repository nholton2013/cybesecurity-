// Array of words with their corresponding hints


    // Each object represents a word and its hint
    let words = [
      {
        word: "phishing",
        hint: "Fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity in electronic communication"
      },
      {
        word: "malware",
        hint: "Malicious software designed to disrupt, damage, or gain unauthorized access to computer systems"
      },
      {
        word: "firewall",
        hint: "Network security system that monitors and controls incoming and outgoing traffic based on predetermined security rules"
      },
      {
        word: "encryption",
        hint: "Process of converting data into a format that can only be read or deciphered by authorized parties"
      },
      {
        word: "two-factor authentication",
        hint: "Security process that requires two forms of identification before granting access to a system or account"
      },
      {
        word: "data breach",
        hint: "Unauthorized access, disclosure, or exposure of sensitive information"
      },
      {
        word: "cyberattack",
        hint: "Deliberate exploitation of computer systems, networks, or devices to compromise data or disrupt operations"
      },
      {
        word: "vulnerability",
        hint: "Weakness or flaw in a system that could be exploited by attackers to compromise security"
      },
      {
        word: "ransomware",
        hint: "Type of malware that encrypts data and demands payment for its release"
      },
      {
        word: "authentication",
        hint: "Process of verifying the identity of a user or system"
      },
      {
        word: "intrusion detection",
        hint: "Monitoring and analyzing network traffic to detect and respond to unauthorized activity"
      },
      {
        word: "cyber hygiene",
        hint: "Practices and measures implemented to maintain cybersecurity and prevent attacks"
      },
      {
        word: "social engineering",
        hint: "Psychological manipulation of individuals to gain confidential information or access to systems"
      },
      {
        word: "zero-day exploit",
        hint: "Vulnerability or weakness in software that is unknown to the software developer"
      },
      {
        word: "patch",
        hint: "Software update designed to fix security vulnerabilities or improve functionality"
      },
      {
        word: "phishing",
        hint: "Fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity in electronic communication"
      },
      {
        word: "endpoint security",
        hint: "Protection of devices or endpoints such as computers, smartphones, and tablets from cyber threats"
      },
      {
        word: "security audit",
        hint: "Systematic evaluation of an organization's security policies, procedures, and controls"
      },
      {
        word: "access control",
        hint: "Mechanism or process to regulate who or what can view or use resources in a computing environment"
      },
      {
        word: "incident response",
        hint: "Structured approach to addressing and managing the aftermath of a security breach or cyberattack"
      },
      {
        word: "threat intelligence",
        hint: "Information about potential or current threats that can be used to inform cybersecurity decisions and defenses"
      }
    ];
    
  const wordText = document.querySelector(".word"),
    hintText = document.querySelector(".hint span"),
    timeText = document.querySelector(".time b"),
    inputField = document.querySelector("input"),
    refreshBtn = document.querySelector(".refresh-word"),
    checkBtn = document.querySelector(".check-word");
  
  let correctWord, timer;
  
  // Function to initialize the timer
  const initTimer = (maxTime) => {
    clearInterval(timer);
    timer = setInterval(() => {
      if (maxTime > 0) {
        maxTime--;
        return (timeText.innerText = maxTime);
      }
      alert(`Time off! ${correctWord.toUpperCase()} was the correct word`);
      initGame();
    }, 1000);
  };
  
  // Function to initialize the game
  const initGame = () => {
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
  };
  initGame();
  
  // Function to check the user's input word
  const checkWord = () => {
    let userWord = inputField.value.toLowerCase();
    if (!userWord) return alert("Please enter the word to check!");
    if (userWord !== correctWord)
      return alert(`Oops! ${userWord} is not a correct word`);
    alert(`Congrats! ${correctWord.toUpperCase()} is the correct word`);
    initGame();
  };
  
  // Event listeners for the refresh and check buttons
  refreshBtn.addEventListener("click", initGame);
  checkBtn.addEventListener("click", checkWord);

  $(window).on('load', function (event) {
    $('.preloader').delay(500).fadeOut('500');
  })