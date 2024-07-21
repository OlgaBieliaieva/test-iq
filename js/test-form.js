document.addEventListener("DOMContentLoaded", function () {
  const formItems = document.querySelectorAll(".test-form fieldset");
  const progressBar = document.querySelector(".progress-bar");
  let currentStep = 0;

  function updateProgress() {
    const percent = (currentStep + 1) / formItems.length * 100;
    progressBar.style.width = percent + "%";
  }

  function showStep(stepIndex) {
    formItems.forEach((step, index) => {
      if (index === stepIndex) {
        step.style.display = "flex";
      } else {
        step.style.display = "none";
      }
    });
  }

  function nextStep() {
    if (currentStep < formItems.length - 1) {
      currentStep++;
      showStep(currentStep);
      updateProgress();
    }
  }
  const nextStepButton = document.querySelector("#next-btn");
  nextStepButton.addEventListener("click", nextStep);
  //   nextStepButtons.forEach((button) => {
  //     button.addEventListener("click", nextStep);
  //   });
  showStep(currentStep);
  updateProgress();
});
