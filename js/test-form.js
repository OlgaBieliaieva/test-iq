document.addEventListener("DOMContentLoaded", function () {
  const testFormRef = document.querySelector(".test-form");
  const formItemsRef = document.querySelectorAll(".test-form fieldset");
  const inputsRef = document.querySelectorAll("input[type=radio]");
  const nextStepButtons = document.querySelectorAll(".cta-btn.form");
  const progressBarRef = document.querySelector(".progress-bar");
  const loaderRef = document.querySelector(".result-load");
  let currentStep = 0;

  function updateProgress() {
    const percent = (currentStep / (formItemsRef.length - 1)) * 100;
    progressBarRef.style.width = percent + "%";
  }

  function showStep(stepIndex) {
    formItemsRef.forEach((step, index) => {
      if (index === stepIndex) {
        step.style.display = "flex";
      } else {
        step.style.display = "none";
      }
    });
  }

  function nextStep(e) {
    if (currentStep < formItemsRef.length - 1) {
      currentStep++;
      showStep(currentStep);
      updateProgress();
    }
    if (e.target.name === formItemsRef.length.toString()) {
      testFormRef.style.display = "none";
      loaderRef.style.display = "block";
      nextPage();
    }
  }

  function nextPage() {
    const timerId = setTimeout(() => {
      location.replace("./result.html");
    }, 2000);

    console.log(timerId);
  }

  function handleButton(e) {
    const targetBtnRef = document.querySelector(
      `.cta-btn.form[name="${e.target.name}"]`
    );
    targetBtnRef.removeAttribute("disabled");
    targetBtnRef.classList.remove("disabled");
    targetBtnRef.classList.add("active");
  }

  nextStepButtons.forEach((button) => {
    button.addEventListener("click", nextStep);
  });
  inputsRef.forEach((input) => {
    input.addEventListener("click", handleButton);
  });
  showStep(currentStep);
  updateProgress();
});
