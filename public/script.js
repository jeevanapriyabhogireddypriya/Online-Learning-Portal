async function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });
    const data = await response.json();
    if (data.success) {
      // Store user role in sessionStorage
      sessionStorage.setItem("userRole", data.role);
      sessionStorage.setItem("username", username);
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid credentials");
    }
  } catch (err) {
    alert("Login failed");
  }
}

function loadCourse() {

  let course = document.getElementById("courseSelect").value;

  let materials = document.getElementById("materials");

  if(course === "Python") {

    materials.innerHTML = `
      <h3>Python Learning Path</h3>

      <ul>
        <li>Step 1: Variables</li>
        <li>Step 2: Loops</li>
        <li>Step 3: Functions</li>
        <li>Step 4: Projects</li>
      </ul>

      <h3>📄 PDF Materials</h3>

      <a href="https://www.python.org/doc/" target="_blank">
      Python PDF Notes
      </a>

      <h3>🎥 Video Tutorials</h3>

      <a href="https://www.youtube.com/watch?v=rfscVS0vtbw" target="_blank">
      Learn Python Video
      </a>
    `;
  }

  else if(course === "Java") {

    materials.innerHTML = `
      <h3>Java Learning Path</h3>

      <ul>
        <li>Step 1: Basics</li>
        <li>Step 2: OOP Concepts</li>
        <li>Step 3: Collections</li>
        <li>Step 4: Mini Projects</li>
      </ul>

      <h3>📄 PDF Materials</h3>

      <a href="https://www.w3schools.com/java/" target="_blank">
      Java PDF Notes
      </a>

      <h3>🎥 Video Tutorials</h3>

      <a href="https://www.youtube.com/watch?v=eIrMbAQSU34" target="_blank">
      Learn Java Video
      </a>
    `;
  }

  else if(course === "C Programming") {

    materials.innerHTML = `
      <h3>C Programming Learning Path</h3>

      <ul>
        <li>Step 1: Syntax</li>
        <li>Step 2: Loops</li>
        <li>Step 3: Arrays</li>
        <li>Step 4: Functions</li>
      </ul>

      <h3>📄 PDF Materials</h3>

      <a href="https://www.tutorialspoint.com/cprogramming/index.htm" target="_blank">
      C Programming Notes
      </a>

      <h3>🎥 Video Tutorials</h3>

      <a href="https://www.youtube.com/watch?v=KJgsSFOSQv0" target="_blank">
      Learn C Programming
      </a>
    `;
  }

else if(course === "Web Development") {

    materials.innerHTML = `
      <h3>Web Development Learning Path</h3>

      <ul>
        <li>Step 1: HTML</li>
        <li>Step 2: CSS</li>
        <li>Step 3: JavaScript</li>
        <li>Step 4: Build Projects</li>
      </ul>

      <h3>📄 PDF Materials</h3>

      <a href="https://developer.mozilla.org/en-US/docs/Learn" target="_blank">
      Web Development Notes
      </a>

      <h3>🎥 Video Tutorials</h3>

      <a href="https://www.youtube.com/watch?v=916GWv2Qs08" target="_blank">
      Learn Web Development
      </a>
    `;
  }

  else if(course === "Data Science") {

    materials.innerHTML = `
      <h3>Data Science Learning Path</h3>

      <ul>
        <li>Step 1: Python for Data Science</li>
        <li>Step 2: Statistics & Probability</li>
        <li>Step 3: Data Analysis with Pandas</li>
        <li>Step 4: Data Visualization</li>
      </ul>

      <h3>📄 PDF Materials</h3>

      <a href="https://www.kaggle.com/learn" target="_blank">
      Data Science Notes
      </a>

      <h3>🎥 Video Tutorials</h3>

      <a href="https://www.youtube.com/watch?v=ua-CiDNNj30" target="_blank">
      Learn Data Science
      </a>
    `;
  }

  else if(course === "Cloud Computing") {

    materials.innerHTML = `
      <h3>Cloud Computing Learning Path</h3>

      <ul>
        <li>Step 1: Cloud Fundamentals</li>
        <li>Step 2: AWS Basics</li>
        <li>Step 3: Azure Essentials</li>
        <li>Step 4: Cloud Deployment</li>
      </ul>

      <h3>📄 PDF Materials</h3>

      <a href="https://aws.amazon.com/documentation/" target="_blank">
      Cloud Computing Notes
      </a>

      <h3>🎥 Video Tutorials</h3>

      <a href="https://www.youtube.com/watch?v=SoxgCkFIorw" target="_blank">
      Learn Cloud Computing
      </a>
    `;
  }

  else if(course === "AI Basics") {

    materials.innerHTML = `
      <h3>AI Basics Learning Path</h3>

      <ul>
        <li>Step 1: Introduction to AI</li>
        <li>Step 2: Neural Networks</li>
        <li>Step 3: Natural Language Processing</li>
        <li>Step 4: AI Projects</li>
      </ul>

      <h3>📄 PDF Materials</h3>

      <a href="https://www.ibm.com/watson/ai-artificial-intelligence" target="_blank">
      AI Basics Notes
      </a>

      <h3>🎥 Video Tutorials</h3>

      <a href="https://www.youtube.com/watch?v=Gwgnw9LIJuQ" target="_blank">
      Learn AI Basics
      </a>
    `;
  }

  else if(course === "Machine Learning") {

    materials.innerHTML = `
      <h3>Machine Learning Learning Path</h3>

      <ul>
        <li>Step 1: ML Fundamentals</li>
        <li>Step 2: Supervised Learning</li>
        <li>Step 3: Unsupervised Learning</li>
        <li>Step 4: Deep Learning</li>
      </ul>

      <h3>���� PDF Materials</h3>

      <a href="https://www.tensorflow.org/learn" target="_blank">
      Machine Learning Notes
      </a>

      <h3>🎥 Video Tutorials</h3>

      <a href="https://www.youtube.com/watch?v=i_LgotR8Cb4" target="_blank">
      Learn Machine Learning
      </a>
    `;
  }

  else if(course === "Cyber Security") {

    materials.innerHTML = `
      <h3>Cyber Security Learning Path</h3>

      <ul>
        <li>Step 1: Security Fundamentals</li>
        <li>Step 2: Network Security</li>
        <li>Step 3: Ethical Hacking</li>
        <li>Step 4: Incident Response</li>
      </ul>

      <h3>📄 PDF Materials</h3>

      <a href="https://www.cybrary.it/catalog/" target="_blank">
      Cyber Security Notes
      </a>

      <h3>🎥 Video Tutorials</h3>

      <a href="https://www.youtube.com/watch?v=OnM8E8F8D8w" target="_blank">
      Learn Cyber Security
      </a>
    `;
  }

  else {

    materials.innerHTML = `
      <p>Please select a course.</p>
    `;
  }
}

// MCQ Questions Database
const quizQuestions = {
  "Python": [
    {
      question: "What is the correct way to create a variable in Python?",
      options: ["var x = 5", "x = 5", "int x = 5", "let x = 5"],
      answer: 1
    },
    {
      question: "Which function is used to get user input in Python?",
      options: ["input()", "get()", "read()", "scan()"],
      answer: 0
    },
    {
      question: "What is the output of print(2 + 3 * 2)?",
      options: ["10", "8", "12", "11"],
      answer: 1
    },
    {
      question: "Which keyword is used to define a function in Python?",
      options: ["function", "def", "func", "define"],
      answer: 1
    },
    {
      question: "What is the correct way to create a list in Python?",
      options: ["list = (1, 2, 3)", "list = [1, 2, 3]", "list = {1, 2, 3}", "list = <1, 2, 3>"],
      answer: 1
    }
  ],
  "Java": [
    {
      question: "What is the correct way to declare a variable in Java?",
      options: ["x = 5", "var x = 5", "int x = 5", "let x = 5"],
      answer: 2
    },
    {
      question: "Which keyword is used to define a class in Java?",
      options: ["class", "Class", "DEFINE CLASS", "new"],
      answer: 0
    },
    {
      question: "What is the output of System.out.println(5/2)?",
      options: ["2.5", "2", "2.5", "Error"],
      answer: 1
    },
    {
      question: "Which access modifier makes a member visible only within the same class?",
      options: ["public", "private", "protected", "default"],
      answer: 1
    },
    {
      question: "What is the entry point of a Java program?",
      options: ["start()", "main()", "run()", "init()"],
      answer: 1
    }
  ],
  "C Programming": [
    {
      question: "What is the correct way to declare a variable in C?",
      options: ["x = 5", "int x = 5", "var x = 5", "let x = 5"],
      answer: 1
    },
    {
      question: "Which function is used to print output in C?",
      options: ["print()", "printf()", "echo()", "write()"],
      answer: 1
    },
    {
      question: "What does the %d format specifier represent?",
      options: ["Float", "Character", "Integer", "String"],
      answer: 2
    },
    {
      question: "Which keyword is used to define a function in C?",
      options: ["function", "def", "func", "No keyword needed"],
      answer: 3
    },
    {
      question: "What is the size of int in C on most systems?",
      options: ["2 bytes", "4 bytes", "8 bytes", "1 byte"],
      answer: 1
    }
  ],
"Web Development": [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"],
      answer: 0
    },
    {
      question: "Which CSS property is used to change text color?",
      options: ["text-color", "font-color", "color", "text-style"],
      answer: 2
    },
    {
      question: "What is the correct way to declare a variable in JavaScript?",
      options: ["var x = 5", "x = 5", "int x = 5", "variable x = 5"],
      answer: 0
    },
    {
      question: "Which HTML tag is used for the largest heading?",
      options: ["<h6>", "<h1>", "<heading>", "<head>"],
      answer: 1
    },
    {
      question: "What does CSS stand for?",
      options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
      answer: 1
    }
  ],
  "Data Science": [
    {
      question: "What is Pandas in Python used for?",
      options: ["Web Development", "Data Analysis", "Game Development", "Mobile Apps"],
      answer: 1
    },
    {
      question: "Which library is used for data visualization in Python?",
      options: ["React", "Matplotlib", "Express", "Django"],
      answer: 1
    },
    {
      question: "What is NumPy primarily used for?",
      options: ["Database Management", "Numerical Computing", "Web Scraping", "GUI Apps"],
      answer: 1
    },
    {
      question: "Which method is used to read CSV files in Pandas?",
      options: ["read_file()", "read_csv()", "load_csv()", "import_csv()"],
      answer: 1
    },
    {
      question: "What is a DataFrame?",
      options: ["A database", "2D labeled data structure", "A chart", "A function"],
      answer: 1
    }
  ],
  "Cloud Computing": [
    {
      question: "What does IaaS stand for?",
      options: ["Internet as a Service", "Infrastructure as a Service", "Integration as a Service", "Internal as a Service"],
      answer: 1
    },
    {
      question: "Which cloud platform is by Amazon?",
      options: ["Azure", "Google Cloud", "AWS", "IBM Cloud"],
      answer: 2
    },
    {
      question: "What is SaaS?",
      options: ["Software as a Service", "System as a Service", "Storage as a Service", "Server as a Service"],
      answer: 0
    },
    {
      question: "Which service provides virtual machines?",
      options: ["IaaS", "PaaS", "SaaS", "FaaS"],
      answer: 0
    },
    {
      question: "What is a cloud datacenter?",
      options: ["A local server", "Physical facility with computing resources", "A mobile app", "A programming language"],
      answer: 1
    }
  ],
  "AI Basics": [
    {
      question: "What does AI stand for?",
      options: ["Artificial Intelligence", "Advanced Internet", "Automated Interface", "Active Intelligence"],
      answer: 0
    },
    {
      question: "What is a neural network based on?",
      options: ["Computer hardware", "Human brain", "Operating system", "Database"],
      answer: 1
    },
    {
      question: "What is Machine Learning a subset of?",
      options: ["AI only", "Data Science only", "Both AI and Data Science", "Cloud Computing"],
      answer: 2
    },
    {
      question: "What is NLP used for?",
      options: ["Image processing", "Text/speech processing", "Database management", "Network security"],
      answer: 1
    },
    {
      question: "What is Deep Learning?",
      options: ["Advanced programming", "Neural networks with multiple layers", "Secure coding", "Fast computing"],
      answer: 1
    }
  ],
  "Machine Learning": [
    {
      question: "What is supervised learning?",
      options: ["Learning with no data", "Learning with labeled data", "Learning without computer", "Learning by watching"],
      answer: 1
    },
    {
      question: "Which algorithm is used for classification?",
      options: ["Linear Regression", "Logistic Regression", "PCA", "K-Means"],
      answer: 1
    },
    {
      question: "What is overfitting?",
      options: ["Model performs well on new data", "Model memorizes training data", "Model is too simple", "No training needed"],
      answer: 1
    },
    {
      question: "What is the purpose of training data?",
      options: ["To test the model", "To build the model", "To deploy the model", "To delete the model"],
      answer: 1
    },
    {
      question: "Which metric is used for regression?",
      options: ["Accuracy", "MSE", "F1-Score", "Precision"],
      answer: 1
    }
  ],
  "Cyber Security": [
    {
      question: "What is a firewall?",
      options: ["A type of virus", "Security system that monitors traffic", "A programming language", "A database"],
      answer: 1
    },
    {
      question: "What does encryption do?",
      options: ["Deletes data", "Secures data by coding", "Speeds up computer", "Formats hard drive"],
      answer: 1
    },
    {
      question: "What is a virus?",
      options: ["A valid program", "Malicious software", "An operating system", "A network"],
      answer: 1
    },
    {
      question: "What is phishing?",
      options: ["A programming language", "Fraudulent attempt to obtain information", "A type of firewall", "A database"],
      answer: 1
    },
    {
      question: "What is a strong password?",
      options: ["Your name", "123456", "Mix of characters and numbers", "Password"],
      answer: 2
    }
  ]
};

let currentQuizCourse = "";
let currentQuestions = [];
let userAnswers = [];

// Check if user is logged in (simple check using sessionStorage)
function isLoggedIn() {
  return sessionStorage.getItem("userRole") !== null;
}

// Get current user role
function getUserRole() {
  return sessionStorage.getItem("userRole");
}

function startQuiz() {
  const course = document.getElementById("quizCourse").value;
  
  if (!course) {
    alert("Please select a course for the quiz!");
    return;
  }
  
  // Check if user is logged in
  if (!isLoggedIn()) {
    alert("Please login first to access the quiz!");
    window.location.href = "index.html";
    return;
  }
  
  // Open quiz in new page automatically
  window.open("quiz.html?course=" + encodeURIComponent(course), "_blank");
}

function submitQuiz() {
  let correct = 0;
  
  currentQuestions.forEach((q, index) => {
    const selected = document.querySelector('input[name="question' + index + '"]:checked');
    if (selected) {
      userAnswers[index] = parseInt(selected.value);
      if (userAnswers[index] === q.answer) {
        correct++;
      }
    } else {
      userAnswers[index] = -1;
    }
  });
  
  const score = Math.round((correct / currentQuestions.length) * 100);
  const quizResult = document.getElementById("quizResult");
  
  let message = "";
  if (score >= 75) {
    message = "Excellent Performance 🚀 Keep Learning!";
  } else if (score >= 50) {
    message = "Good Job 👍 Practice More!";
  } else {
    message = "Don't Give Up 💪 You Can Improve!";
  }
  
  quizResult.innerHTML = "<p><strong>Your Score: " + score + "% (" + correct + "/" + currentQuestions.length + ")</strong></p>" +
    "<p>" + message + "</p>";
}

// Function to open quiz in a new page
function openQuizInNewPage() {
  const course = document.getElementById("quizCourse").value;
  
  if (!course) {
    alert("Please select a course for the quiz!");
    return;
  }
  
  // Check if user is logged in
  if (!isLoggedIn()) {
    alert("Please login first to access the quiz!");
    window.location.href = "index.html";
    return;
  }
  
  // Open quiz.html in a new window/tab
  window.open("quiz.html?course=" + encodeURIComponent(course), "_blank");
}

// Logout function
function logout() {
  sessionStorage.clear();
  window.location.href = "index.html";
}

// AI Chatbot functions
async function sendMessage() {
  const input = document.getElementById("chatInput");
  const message = input.value.trim();
  
  if (!message) return;
  
  // Check if user is logged in
  if (!isLoggedIn()) {
    alert("Please login first to use the chatbot!");
    window.location.href = "index.html";
    return;
  }
  
  // Display user message
  const chatMessages = document.getElementById("chatMessages");
  chatMessages.innerHTML += '<div style="text-align: right; margin: 5px 0;"><strong>You:</strong> ' + message + '</div>';
  
  // Clear input
  input.value = "";
  
  // Show loading
  chatMessages.innerHTML += '<div style="text-align: left; margin: 5px 0;"><strong>AI:</strong> Thinking...</div>';
  chatMessages.scrollTop = chatMessages.scrollHeight;
  
  try {
    const response = await fetch("/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });
    const data = await response.json();
    
    // Remove loading message and show response
    const loadingMsg = chatMessages.querySelector('div:contains("Thinking...")');
    if (loadingMsg) loadingMsg.remove();
    
    chatMessages.innerHTML += '<div style="text-align: left; margin: 5px 0;"><strong>AI:</strong> ' + data.reply + '</div>';
    chatMessages.scrollTop = chatMessages.scrollHeight;
  } catch (err) {
    const loadingMsg = chatMessages.querySelector('div:contains("Thinking...")');
    if (loadingMsg) loadingMsg.remove();
    
    chatMessages.innerHTML += '<div style="text-align: left; margin: 5px 0;"><strong>AI:</strong> Sorry, something went wrong. Please try again.</div>';
  }
}

// Allow pressing Enter to send message
document.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    const chatInput = document.getElementById("chatInput");
    if (chatInput && document.activeElement === chatInput) {
      sendMessage();
    }
  }
});
