document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("units-grid-assessment");

  pre_assessments.forEach((assessment) => {
    const card = document.createElement("div");
    card.classList.add("unit-card");
    card.innerHTML = `
    <div class="card-header">
      <div class="card-number">${assessment.assessment_number}</div>
    </div>
    <div class="unit-icon">
      <img src="${assessment.assessment_img}" alt="icone">
    </div>
    <h3>${assessment.name}</h3>
  `;

    card.addEventListener("click", () => {
      const slug = assessment.name.replace(/\s+/g, "-");
      window.location.href = `details/index.html?assessment=${slug}`;
    });

    container.appendChild(card);
  });
});
