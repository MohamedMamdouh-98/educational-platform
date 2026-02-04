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

  // card.innerHTML = `
  //   <div class="card-header">
  //     <div class="card-number">${assessment.assessment_number}</div>
  //   </div>

  //   <div class="unit-icon">
  //     <img src="${assessment.assessment_img}" alt="icon">
  //   </div>

  //   <h3>${assessment.name}</h3>

  //   <p>Dear student teacher, please follow these instructions:</p>

  //   <ul class="assessment-instructions">
  //     ${instructionsList}
  //   </ul>

  //   <a
  //     href="${assessment.link_form}"
  //     target="_blank"
  //     class="btn btn-primary start-assessment-btn"
  //   >
  //     Start Assessment
  //   </a>
  // `;

  card.innerHTML = `
   <div class="card-container">
        <div class="image-section">
            <div class="badge">Teaching Assessment</div>
            <img src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="Digital Teaching Skills Test">
            <div class="image-caption">Digital Teaching Skills Assessment</div>
        </div>
        
        <div class="content-section">
            <div>
                <div class="header-card">
                    <div class="test-category">TEACHING SKILLS ASSESSMENT</div>
                    <h5>The cognitive aspect test of digital teaching skills</h5>
                    <p>This assessment evaluates the cognitive components of digital teaching competencies, focusing on pedagogical knowledge, technological integration, and instructional decision-making in digital learning environments.</p>
                    
                    <div class="test-info">
                        <div class="info-item">
                            <i class="far fa-clock"></i>
                            <span>Time Limit: 75 minutes</span>
                        </div>
                        <div class="info-item">
                            <i class="far fa-question-circle"></i>
                            <span>Total Questions: 45</span>
                        </div>
                        <div class="info-item">
                            <i class="fas fa-graduation-cap"></i>
                            <span>For: Student Teachers</span>
                        </div>
                    </div>
                </div>
                
                <div class="instructions-section">
                    <h2 class="instructions-title">Test Instructions</h2>
                    
                    <div class="instructions-intro">
                        Dear Student Teacher, please follow these instructions carefully to ensure a smooth testing experience:
                    </div>
                    
                    <ul class="instructions-list">
                        <li>Ensure you have a stable internet connection before starting the test. The assessment requires continuous connectivity throughout the 75-minute duration.</li>
                        <li>Find a quiet environment free from distractions. This will help you concentrate on the pedagogical scenarios presented in the test.</li>
                        <li>Read each question carefully before selecting your answer. The test evaluates your cognitive decision-making processes in digital teaching contexts.</li>
                        <li>Use the provided tools and digital resources appropriately as you would in an actual digital teaching environment.</li>
                        <li>Monitor your time effectively. The test is timed, but you can navigate between questions using the provided controls.</li>
                        <li>Answer all questions to the best of your ability based on your knowledge of digital pedagogy and teaching methodologies.</li>
                        <li>Do not use external resources or assistance during the test, as this is an assessment of your individual cognitive skills.</li>
                        <li>Review your answers before submitting the test. Once submitted, you cannot return to modify your responses.</li>
                    </ul>
                </div>
            </div>
            
            <div class="button-section">
                <button class="btn" onclick="alert('The Digital Teaching Skills Test is now starting. You have 75 minutes to complete the assessment. Good luck!')">
                    Start Assessment
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    </div>
  `;

  container.appendChild(card);
});
