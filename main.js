document.addEventListener("DOMContentLoaded", function () {
  const calculateButton = document.getElementById("calculateButton");
  calculateButton.addEventListener("click", calculateEOSG);

  function calculateEOSG() {
    const basicSalaryInput = document.getElementById("basicSalary");
    const startDateInput = document.getElementById("startDate");
    const endDateInput = document.getElementById("endDate");
    const basicSalaryError = document.getElementById("basicSalaryError");
    const startDateError = document.getElementById("startDateError");
    const endDateError = document.getElementById("endDateError");
    const resultContainer = document.getElementById("result");

    // Reset error messages
    basicSalaryError.textContent = "";
    startDateError.textContent = "";
    endDateError.textContent = "";

    // Validate input values
    if (!basicSalaryInput.value || isNaN(basicSalaryInput.value)) {
      basicSalaryError.textContent = ".من فضلك أدخل الراتب الأساسي";
      return;
    }

    if (!startDateInput.value) {
      startDateError.textContent = "من فضلك أدخل تاريخ التعيين.";
      return;
    }

    if (!endDateInput.value) {
      endDateError.textContent = "من فضلك أدخل تاريخ نهاية الخدمة";
      return;
    }

    const basicSalary = parseFloat(basicSalaryInput.value);
    const startDate = new Date(startDateInput.value);
    const endDate = new Date(endDateInput.value);

    // Calculate EOSG logic
    const totalMilliseconds = endDate - startDate;
    const years = totalMilliseconds / (365 * 24 * 60 * 60 * 1000);
    const monthin = endDate.getMonth() - startDate.getMonth();
    const yearin = endDate.getFullYear() - startDate.getFullYear();
    // Calculate EOSG amount
    const gratuityDays = years <= 5 ? 21 * years : 21 * 5 + 30 * (years - 5);
    const dailyRate = basicSalary / 30;
    const eosgAmount = dailyRate * gratuityDays;

    // Display result
    if (years > 0) {
      document.getElementById("rescol").style.backgroundColor = "#f5f5f5";
    }
    resultContainer.innerHTML = `
        <h3>إجمالي المكافأة لمدة دامت :</h3>
        <p>${yearin.toFixed(0)} سنة  و ${monthin.toFixed(0)} أشهر</p>
        <h3>مكافأة نهاية الخدمة :</h3>
        <p>${eosgAmount.toFixed(2)} درهم إماراتي </p>
    `;
  }
});
