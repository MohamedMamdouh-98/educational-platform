// document.addEventListener("DOMContentLoaded", () => {
//   const params = new URLSearchParams(window.location.search);
//   const slug = params.get("module");

//   const module = modules.find((m) => m.name.replace(/\s+/g, "-") === slug);
//   if (!module) return;

//   // BASIC DATA
//   document.getElementById("module-title").textContent = module.name;
//   document.getElementById("module-description").textContent =
//     module.description;
//   document.getElementById("module-video").src = module.video;

//   // SLIDER
//   const book = document.getElementById("book");
//   book.innerHTML = "";
//   module.images.forEach((img) => {
//     const page = document.createElement("div");
//     page.className = "page";
//     page.innerHTML = `<img src="../../${img}" alt="${module.name}" />`;
//     book.appendChild(page);
//   });

//   // QUIZ
//   let currentQuestion = 0;
//   const questionEl = document.getElementById("quiz-question");
//   const optionsEl = document.getElementById("quiz-options");
//   const progressFill = document.getElementById("quiz-progress-fill");
//   const progressText = document.getElementById("quiz-progress-text");

//   function renderQuestion() {
//     const q = module.quiz[currentQuestion];
//     questionEl.textContent = q.question;
//     optionsEl.innerHTML = "";

//     q.options.forEach((option, i) => {
//       optionsEl.innerHTML += `
//         <div class="option">
//           <input type="radio" name="answer" id="opt${i}">
//           <label for="opt${i}" class="option-label">
//             <span class="option-letter">${String.fromCharCode(65 + i)}</span>
//             <span class="option-text">${option}</span>
//           </label>
//         </div>
//       `;
//     });

//     progressFill.style.width = `${((currentQuestion + 1) / module.quiz.length) * 100}%`;
//     progressText.textContent = `Question ${currentQuestion + 1} of ${module.quiz.length}`;
//   }

//   renderQuestion();

//   document.querySelector(".hint-btn").onclick = () => {
//     alert(module.quiz[currentQuestion].hint || "No hint available");
//   };

//   document.querySelector(".next-btn").onclick = () => {
//     if (currentQuestion < module.quiz.length - 1) {
//       currentQuestion++;
//       renderQuestion();
//     }
//   };

//   document.querySelector(".check-btn").onclick = () => {
//     const selected = document.querySelector("input[name='answer']:checked");
//     if (!selected) return alert("Choose an answer");

//     const index = parseInt(selected.id.replace("opt", ""));
//     const answer = module.quiz[currentQuestion].options[index];

//     alert(
//       answer === module.quiz[currentQuestion].correct_answer
//         ? "Correct ✅"
//         : "Wrong ❌",
//     );
//   };
// });

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("module");

  const module = modules.find((m) => m.name.replace(/\s+/g, "-") === slug);
  if (!module) return;

  // BASIC DATA
  document.getElementById("module-title").textContent = module.name;
  document.getElementById("module-description").textContent =
    module.description;
  document.getElementById("module-video").src = module.video;

  // SLIDER
  const book = document.getElementById("book");
  book.innerHTML = "";
  module.images.forEach((img) => {
    const page = document.createElement("div");
    page.className = "page";
    page.innerHTML = `<img src="../../${img}" alt="${module.name}" />`;
    book.appendChild(page);
  });

  // QUIZ
  let currentQuestion = 0;
  const questionEl = document.getElementById("quiz-question");
  const optionsEl = document.getElementById("quiz-options");
  const progressFill = document.getElementById("quiz-progress-fill");
  const progressText = document.getElementById("quiz-progress-text");
  const hintBtn = document.getElementById("hint-btn");
  const nextBtn = document.getElementById("next-btn");
  const checkBtn = document.getElementById("check-btn");
  const resultEl = document.getElementById("quiz-result");

  // Function to display the question
  function renderQuestion() {
    const q = module.quiz[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";

    // Create the options correctly while maintaining the style
    q.options.forEach((option, i) => {
      const optionDiv = document.createElement("div");
      optionDiv.className = "option";

      const optionId = `opt${currentQuestion}_${i}`;

      optionDiv.innerHTML = `
                <input type="radio" name="answer" id="${optionId}" class="option-input">
                <label for="${optionId}" class="option-label">
                    <span class="option-letter">${String.fromCharCode(65 + i)}</span>
                    <span class="option-text">${option}</span>
                </label>
            `;

      optionsEl.appendChild(optionDiv);
    });

    // Progress Update
    const progressPercentage =
      ((currentQuestion + 1) / module.quiz.length) * 100;
    progressFill.style.width = `${progressPercentage}%`;
    progressText.textContent = `Question ${currentQuestion + 1} of ${module.quiz.length}`;

    // Hide the result of the previous question
    resultEl.style.display = "none";
    resultEl.innerHTML = "";

    // Re-enable control buttons
    checkBtn.disabled = false;
    checkBtn.innerHTML = '<i class="fas fa-check-circle"></i> Check Answer';
  }

  // Function to display the result

  // Function to display the result with confetti for correct answers
  function showResult(isCorrect, correctAnswer) {
    resultEl.innerHTML = "";
    resultEl.className = "result-container";

    if (isCorrect) {
      // Displaying the success message
      resultEl.innerHTML = `
            <div class="result-correct">
                <i class="fas fa-check-circle"></i>
                <div>
                    <h3>Correct! ✅</h3>
                    <p>Well done! You selected the right answer.</p>
                </div>
            </div>
        `;
      resultEl.classList.add("result-correct");

      // Enable confetti effect
      triggerConfetti();
    } else {
      resultEl.innerHTML = `
            <div class="result-incorrect">
                <i class="fas fa-times-circle"></i>
                <div>
                    <h3>Incorrect ❌</h3>
                    <p>The correct answer is: <strong>${correctAnswer}</strong></p>
                </div>
            </div>
        `;
      resultEl.classList.add("result-incorrect");
    }

    resultEl.style.display = "block";

    // Disable radio buttons after answering
    document.querySelectorAll(".option-input").forEach((input) => {
      input.disabled = true;
    });

    // Change the verification button
    checkBtn.disabled = true;
    checkBtn.innerHTML = '<i class="fas fa-check-circle"></i> Answered';
  }

  // The triggerConfetti function with modifications to work with the existing confetti library
  function triggerConfetti() {
    var count = 200;
    var defaults = {
      origin: { y: 0.7 },
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    fire(0.2, {
      spread: 60,
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }

  // Function of the answer
  function checkAnswer() {
    const selected = document.querySelector("input[name='answer']:checked");
    if (!selected) {
      resultEl.innerHTML = `
                <div class="result-warning">
                    <i class="fas fa-exclamation-circle"></i>
                    <p>Please select an answer first!</p>
                </div>
            `;
      resultEl.style.display = "block";
      return;
    }

    const optionId = selected.id;
    const index = parseInt(optionId.split("_")[1]);
    const answer = module.quiz[currentQuestion].options[index];
    const isCorrect = answer === module.quiz[currentQuestion].correct_answer;

    // تلوين الخيارات
    document.querySelectorAll(".option-label").forEach((label, i) => {
      const optionText = module.quiz[currentQuestion].options[i];
      if (optionText === module.quiz[currentQuestion].correct_answer) {
        label.classList.add("option-correct");
      } else if (i === index && !isCorrect) {
        label.classList.add("option-incorrect");
      }
    });

    showResult(isCorrect, module.quiz[currentQuestion].correct_answer);
  }

  // تهيئة الأسئلة
  renderQuestion();

  // إضافة أحداث النقر
  hintBtn.addEventListener("click", () => {
    const hint =
      module.quiz[currentQuestion].hint ||
      "No hint available for this question.";
    resultEl.innerHTML = `
            <div class="result-hint">
                <i class="fas fa-lightbulb"></i>
                <div>
                    <h3>Hint 💡</h3>
                    <p>${hint}</p>
                </div>
            </div>
        `;
    resultEl.style.display = "block";
  });

  nextBtn.addEventListener("click", () => {
    if (currentQuestion < module.quiz.length - 1) {
      currentQuestion++;
      renderQuestion();
    } else {
      // عرض نتيجة الاختبار الكامل
      resultEl.innerHTML = `
                <div class="result-complete">
                    <i class="fas fa-trophy"></i>
                    <div>
                        <h3>Quiz Complete! 🎉</h3>
                        <p>You have completed all questions in this module.</p>
                    </div>
                </div>
            `;
      resultEl.style.display = "block";
      nextBtn.disabled = true;
    }
  });

  checkBtn.addEventListener("click", checkAnswer);

  // إضافة حدث النقر على الخيارات
  optionsEl.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("option-label") ||
      e.target.classList.contains("option-letter") ||
      e.target.classList.contains("option-text")
    ) {
      const optionInput = e.target
        .closest(".option")
        .querySelector(".option-input");
      if (optionInput) {
        optionInput.checked = true;
      }
    }
  });
});
