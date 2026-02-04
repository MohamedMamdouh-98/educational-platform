document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("units-grid-assessment");

  pre_assessments.forEach((assessment) => {
    const card = document.createElement("div");
    card.classList.add("unit-card");

    card.innerHTML = `
      <div class="small-card">
        <div class="card-image">
          <div class="card-badge">${assessment.assessment_number}</div>
          <img src="${assessment.assessment_img}" alt="Card Image">
        </div>

        <div class="card-content">
          <h3 class="card-title">${assessment.name}</h3>
          <button class="card-button">
            Enter Exam
            <i class="fas fa-sign-in-alt"></i>
          </button>
        </div>
      </div>
    `;

    const button = card.querySelector(".card-button");
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      const slug = assessment.name.replace(/\s+/g, "-");
      window.location.href = `details/index.html?assessment=${slug}`;
    });

    container.appendChild(card);
  });
});
