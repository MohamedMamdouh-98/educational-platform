document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("units-grid-assessment");
  if (!container) return;

  /* ===============================
     1️⃣ GET ASSESSMENT FROM URL
  =============================== */
  const params = new URLSearchParams(window.location.search);
  const assessmentParam = params.get("assessment");

  if (!assessmentParam) {
    container.innerHTML = "<p>Assessment not found</p>";
    return;
  }

  const assessmentSlug = decodeURIComponent(assessmentParam)
    .trim()
    .toLowerCase();

  const assessment = pre_assessments.find(
    (item) =>
      item.name.trim().toLowerCase().replace(/\s+/g, "-") === assessmentSlug,
  );

  if (!assessment) {
    container.innerHTML = "<p>Assessment not found</p>";
    return;
  }

  /* ===============================
     2️⃣ OBJECTIVES (CONDITIONAL)
  =============================== */
  const objectivesSection =
    assessment.objectives && assessment.objectives.length
      ? `
        <div class="objectives-section">
          <h2 class="objectives-title">
            ${assessment.objectives_title || "This test aims to measure your ability to:"}
          </h2>
          <ul class="objectives-list">
            ${assessment.objectives.map((obj) => `<li>${obj}</li>`).join("")}
          </ul>
        </div>
      `
      : "";

  /* ===============================
     3️⃣ INSTRUCTIONS
  =============================== */
  const instructionsList =
    assessment.instructions && assessment.instructions.length
      ? assessment.instructions
          .map((instruction) => `<li>${instruction}</li>`)
          .join("")
      : "";

  const instructionsSection = instructionsList
    ? `
        <div class="instructions-section">
          <h2 class="instructions-title">
            ${assessment.instructions_title || "Instructions"}
          </h2>

          ${
            assessment.instructions_intro
              ? `<div class="instructions-intro">${assessment.instructions_intro}</div>`
              : ""
          }

          <ul class="instructions-list">
            ${instructionsList}
          </ul>
        </div>
      `
    : "";

  /* ===============================
     4️⃣ BUILD CARD
  =============================== */
  const card = document.createElement("div");
  card.className = "unit-card";

  card.innerHTML = `
    <div class="card-container">
      <!-- IMAGE -->
      <div class="image-section">
        <div class="badge">${assessment.badge}</div>
        <img src="${assessment.assessment_img}" alt="${assessment.title}">
        ${
          assessment.image_caption
            ? `<div class="image-caption">${assessment.image_caption}</div>`
            : ""
        }
      </div>

      <!-- CONTENT -->
      <div class="content-section">
        <div>
          <div class="header-card">
            <div class="test-category">
              ${assessment.badge.toUpperCase()}
            </div>

            <h5>${assessment.title}</h5>

            ${assessment.description ? `<p>${assessment.description}</p>` : ""}

           <!-- OBJECTIVES -->
           ${objectivesSection}

            ${
              assessment.test_info
                ? `
              <div class="test-info">
                ${
                  assessment.test_info.time_limit
                    ? `
                  <div class="info-item">
                    <i class="far fa-clock"></i>
                    <span>Time Limit: ${assessment.test_info.time_limit}</span>
                  </div>`
                    : ""
                }

                ${
                  assessment.test_info.total_questions
                    ? `
                  <div class="info-item">
                    <i class="far fa-question-circle"></i>
                    <span>Total Questions: ${assessment.test_info.total_questions}</span>
                  </div>`
                    : ""
                }

                ${
                  assessment.test_info.target
                    ? `
                  <div class="info-item">
                    <i class="fas fa-graduation-cap"></i>
                    <span>For: ${assessment.test_info.target}</span>
                  </div>`
                    : ""
                }
              </div>`
                : ""
            }
          </div>

          

          <!-- INSTRUCTIONS -->
          ${instructionsSection}
        </div>

        <!-- BUTTON -->
        <div class="button-section">
          <button class="btn start-assessment-btn">
            ${assessment.button_text || "Start"}
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  `;

  container.appendChild(card);

  /* ===============================
     5️⃣ BUTTON ACTION
  =============================== */
  const startBtn = card.querySelector(".start-assessment-btn");
  startBtn.addEventListener("click", () => {
    if (assessment.start_alert_message) {
      alert(assessment.start_alert_message);
    }
  });
});
