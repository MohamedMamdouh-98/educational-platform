document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("units-grid-assessment");

  const params = new URLSearchParams(window.location.search);
  const assessmentSlug = decodeURIComponent(params.get("assessment"));

  const assessment = pre_assessments.find(
    (item) => item.name.replace(/\s+/g, "-") === assessmentSlug,
  );

  if (!assessment) {
    container.innerHTML = "<p>Assessment not found</p>";
    return;
  }

  const instructionsList = assessment.instructions
    .map((instruction) => `<li>${instruction}</li>`)
    .join("");

  const card = document.createElement("div");
  card.classList.add("unit-card");

  card.innerHTML = `
    <div class="card-header">
      <div class="card-number">${assessment.assessment_number}</div>
    </div>

    <div class="unit-icon">
      <img src="${assessment.assessment_img}" alt="icon">
    </div>

    <h3>${assessment.name}</h3>

    <p>Dear student teacher, please follow these instructions:</p>

    <ul class="assessment-instructions">
      ${instructionsList}
    </ul>

    <a 
      href="${assessment.link_form}" 
      target="_blank"
      class="btn btn-primary start-assessment-btn"
    >
      Start Assessment
    </a>
  `;

  container.appendChild(card);
});
