// document.addEventListener("DOMContentLoaded", () => {
//   document
//     .querySelectorAll(".quiz-section")
//     .forEach((section, sectionIndex) => {
//       const questions = section.querySelectorAll(".quiz-question-item");
//       const progressFill = section.querySelector(".progress-fill");
//       const progressText = section.querySelector(".quiz-progress-text");
//       const prevBtn = section.querySelector(".prev-btn");
//       const nextBtn = section.querySelector(".next-btn");
//       const checkBtn = section.querySelector(".check-btn");
//       const resultEl = section.querySelector(".result-container");

//       let currentQuestion = 0;
//       const totalQuestions = questions.length;
//       const answerMap = { a: 0, b: 1, c: 2, d: 3 };

//       questions.forEach((question, qIndex) => {
//         question.querySelectorAll(".option").forEach((option, oIndex) => {
//           const input = option.querySelector(".option-input");
//           const label = option.querySelector(".option-label");

//           const uniqueId = `quiz${sectionIndex}_${qIndex}_opt${oIndex}`;
//           input.id = uniqueId;
//           input.name = `answer${qIndex}`;
//           label.setAttribute("for", uniqueId);
//         });
//       });

//       function decodeAnswer(encoded) {
//         try {
//           return atob(encoded); // Base64
//         } catch {
//           return null;
//         }
//       }

//       function renderQuestion() {
//         questions.forEach((q, i) => {
//           q.style.display = i === currentQuestion ? "block" : "none";
//         });

//         const progress = ((currentQuestion + 1) / totalQuestions) * 100;
//         progressFill.style.width = progress + "%";
//         progressText.textContent = `Question ${currentQuestion + 1} of ${totalQuestions}`;

//         resultEl.style.display = "none";
//         resultEl.innerHTML = "";

//         checkBtn.disabled = false;
//         checkBtn.innerHTML = '<i class="fas fa-check-circle"></i> Check Answer';

//         questions[currentQuestion]
//           .querySelectorAll(".option-label")
//           .forEach((label) => {
//             label.classList.remove("option-correct", "option-incorrect");
//           });

//         questions[currentQuestion]
//           .querySelectorAll(".option-input")
//           .forEach((input) => {
//             input.disabled = false;
//             input.checked = false;
//           });

//         prevBtn.disabled = currentQuestion === 0;
//         nextBtn.disabled = currentQuestion === totalQuestions - 1;
//       }

//       function checkAnswer() {
//         const current = questions[currentQuestion];
//         const correctChar = decodeAnswer(current.dataset.correct);
//         const correctIndex = answerMap[correctChar];

//         const options = current.querySelectorAll(".option");
//         const questionIndex = [...questions].indexOf(current);
//         const selected = current.querySelector(
//           `input[name='answer${questionIndex}']:checked`,
//         );

//         if (!selected) {
//           resultEl.innerHTML = `
//           <div class="result-warning">
//             <i class="fas fa-exclamation-circle"></i>
//             <p>Please select an answer first!</p>
//           </div>`;
//           resultEl.style.display = "block";
//           return;
//         }

//         const selectedIndex = [...options].findIndex(
//           (opt) => opt.querySelector(".option-input") === selected,
//         );

//         options.forEach((opt, i) => {
//           const label = opt.querySelector(".option-label");
//           if (i === correctIndex) label.classList.add("option-correct");
//           else if (i === selectedIndex) label.classList.add("option-incorrect");
//         });

//         const isCorrect = selectedIndex === correctIndex;

//         resultEl.innerHTML = isCorrect
//           ? `<div class="result-correct">
//             <i class="fas fa-check-circle"></i>
//             <h3>Correct! 🎉</h3>
//           </div>`
//           : `<div class="result-incorrect">
//             <i class="fas fa-times-circle"></i>
//             <h3>Incorrect ❌</h3>
//           </div>`;

//         resultEl.style.display = "block";

//         current
//           .querySelectorAll(".option-input")
//           .forEach((i) => (i.disabled = true));
//         checkBtn.disabled = true;

//         if (isCorrect && typeof confetti === "function") {
//           confetti({ particleCount: 120, spread: 80, origin: { y: 0.7 } });
//         }
//       }

//       nextBtn.addEventListener("click", () => {
//         if (currentQuestion < totalQuestions - 1) {
//           currentQuestion++;
//           renderQuestion();
//         }
//       });

//       prevBtn.addEventListener("click", () => {
//         if (currentQuestion > 0) {
//           currentQuestion--;
//           renderQuestion();
//         }
//       });

//       checkBtn.addEventListener("click", checkAnswer);

//       renderQuestion();
//     });
// });

/************************************************* */

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(".quiz-section")
    .forEach((section, sectionIndex) => {
      const questions = section.querySelectorAll(".quiz-question-item");
      const progressFill = section.querySelector(".progress-fill");
      const progressText = section.querySelector(".quiz-progress-text");
      const prevBtn = section.querySelector(".prev-btn");
      const nextBtn = section.querySelector(".next-btn");
      const checkBtn = section.querySelector(".check-btn");
      const resultEl = section.querySelector(".result-container");

      let currentQuestion = 0;
      const totalQuestions = questions.length;
      const answerMap = { A: 0, B: 1, C: 2, D: 3 };

      // Assign unique IDs for each input and link label
      questions.forEach((question, qIndex) => {
        question.querySelectorAll(".option").forEach((option, oIndex) => {
          const input = option.querySelector(".option-input");
          const label = option.querySelector(".option-label");
          const uniqueId = `quiz_${sectionIndex}_${qIndex}_opt${oIndex}`;
          input.id = uniqueId;
          input.name = `answer_${sectionIndex}_${qIndex}`;
          label.setAttribute("for", uniqueId);
        });
      });

      function decodeAnswer(encoded) {
        try {
          return atob(encoded).toUpperCase();
        } catch {
          return null;
        }
      }

      function renderQuestion() {
        questions.forEach((q, i) => {
          q.style.display = i === currentQuestion ? "block" : "none";
          q.querySelectorAll(".option-label").forEach((label) =>
            label.classList.remove("option-correct", "option-incorrect"),
          );
          q.querySelectorAll(".option-input").forEach((input) => {
            input.disabled = false;
            input.checked = false;
          });
        });

        const progress = ((currentQuestion + 1) / totalQuestions) * 100;
        if (progressFill) progressFill.style.width = progress + "%";
        if (progressText)
          progressText.textContent = `Question ${currentQuestion + 1} of ${totalQuestions}`;

        if (resultEl) {
          resultEl.style.display = "none";
          resultEl.innerHTML = "";
        }

        if (checkBtn) {
          checkBtn.disabled = false;
          checkBtn.innerHTML =
            '<i class="fas fa-check-circle"></i> Check Answer';
        }

        if (prevBtn) prevBtn.disabled = currentQuestion === 0;
        if (nextBtn) nextBtn.disabled = currentQuestion === totalQuestions - 1;
      }

      function checkAnswer() {
        const current = questions[currentQuestion];
        const correctChar = decodeAnswer(current.dataset.correct);
        const correctIndex = answerMap[correctChar];
        const options = current.querySelectorAll(".option");
        const selected = current.querySelector(".option-input:checked");

        if (!selected) {
          if (resultEl) {
            resultEl.innerHTML = `
            <div class="result-warning">
              <i class="fas fa-exclamation-circle"></i>
              <p>Please select an answer first!</p>
            </div>`;
            resultEl.style.display = "block";
          }
          return;
        }

        const selectedIndex = [...options].findIndex(
          (opt) => opt.querySelector(".option-input") === selected,
        );

        options.forEach((opt, i) => {
          const label = opt.querySelector(".option-label");
          if (i === correctIndex) label.classList.add("option-correct");
          else if (i === selectedIndex) label.classList.add("option-incorrect");
        });

        const isCorrect = selectedIndex === correctIndex;

        if (resultEl) {
          resultEl.innerHTML = isCorrect
            ? `<div class="result-correct"><i class="fas fa-check-circle"></i><h3>Correct! 🎉</h3></div>`
            : `<div class="result-incorrect"><i class="fas fa-times-circle"></i><h3>Incorrect ❌</h3></div>`;
          resultEl.style.display = "block";
        }

        current
          .querySelectorAll(".option-input")
          .forEach((i) => (i.disabled = true));
        if (checkBtn) checkBtn.disabled = true;

        if (isCorrect && typeof confetti === "function") {
          confetti({ particleCount: 120, spread: 80, origin: { y: 0.7 } });
        }
      }

      if (nextBtn)
        nextBtn.addEventListener("click", () => {
          if (currentQuestion < totalQuestions - 1) {
            currentQuestion++;
            renderQuestion();
          }
        });

      if (prevBtn)
        prevBtn.addEventListener("click", () => {
          if (currentQuestion > 0) {
            currentQuestion--;
            renderQuestion();
          }
        });

      if (checkBtn) checkBtn.addEventListener("click", checkAnswer);

      renderQuestion();
    });
});
