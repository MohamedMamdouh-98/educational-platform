// document.addEventListener("DOMContentLoaded", () => {
//   const container = document.getElementById("units-grid");

//   modules.forEach((module) => {
//     const radius = 20;
//     const circumference = 2 * Math.PI * radius;
//     const offset = circumference - (module.progress_rate / 100) * circumference;

//     const slug = module.name.replace(/\s+/g, "-");

//     const card = document.createElement("div");
//     card.classList.add("unit-card");
//     card.innerHTML = `
//     <div class="card-header">
//       <div class="card-number">${module.module_number}</div>
//       <div class="progress-circle-container">
//         <svg class="progress-circle-svg" width="45" height="45" viewBox="0 0 45 45">
//           <circle class="progress-circle-bg" cx="22.5" cy="22.5" r="20" fill="none" stroke="#f0f0f0" stroke-width="4"/>
//           <circle class="progress-circle" cx="22.5" cy="22.5" r="20" fill="none" stroke="currentColor" stroke-width="4"
//                   stroke-dasharray="${circumference}" stroke-dashoffset="${offset}" stroke-linecap="round"/>
//         </svg>
//         <div class="progress-circle-overlay">${module.progress_rate}%</div>
//       </div>
//     </div>
//     <div class="unit-icon">
//       <img src="${module.module_img}" alt="icone">
//     </div>
//     <h3>${module.name}</h3>
//     <div class="unit-description">${module.description}</div>
//   `;

//     card.addEventListener("click", () => {
//       const slug = module.name.replace(/\s+/g, "-");
//       window.location.href = `details/index.html?module=${slug}`;
//     });

//     container.appendChild(card);
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("units-grid");

  modules.forEach((module, index) => {
    const radius = 20;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (module.progress_rate / 100) * circumference;

    const card = document.createElement("div");
    card.classList.add("unit-card");

    // خلي الكليك بس لأول عنصر
    if (index === 0) {
      card.classList.add("clickable");
    } else {
      card.classList.add("disabled");
    }

    card.innerHTML = `
      <div class="card-header">
        <div class="card-number">${module.module_number}</div>
        
      </div>
      <div class="unit-icon">
        <img src="${module.module_img}" alt="icone">
      </div>
      <h3>${module.name}</h3>
      <div class="unit-description">${module.description}</div>
     <button class="card-button-module">
            Enter Module
            <i class="fas fa-sign-in-alt"></i>
          </button>
    `;

    const button = card.querySelector(".card-button-module");

    if (index === 0) {
      button.addEventListener("click", (e) => {
        e.stopPropagation();
        window.location.href = "/modules/tpack-model/objectives/";
      });
    } else {
      button.disabled = true;
      button.style.opacity = "0.5";
      button.style.cursor = "not-allowed";
    }

    container.appendChild(card);
  });
});
