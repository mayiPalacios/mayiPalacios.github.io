const inputs = document.querySelectorAll("#formulario input");
const inpsalary = document.getElementById("inp-salary");
const inpYear = document.getElementById("inp-years");
const inpDays = document.getElementById("inp-days");

const validacionesForm = (e) => {
  switch (e.target.name) {
    case "salary":
      const salary = Number.parseFloat(e.target.value);
      if (salary <= 0) {
        document
          .getElementById("inp-salary")
          .classList.add("input-numer-error");
      } else {
        document
          .getElementById("inp-salary")
          .classList.remove("input-numer-error");
      }

      break;
    case "years":
      const year = Number.parseFloat(e.target.value);
      if (year < 0 || year > 35) {
        document.getElementById("inp-years").classList.add("input-numer-error");
      } else {
        document
          .getElementById("inp-years")
          .classList.remove("input-numer-error");
      }

      break;
    case "days":
      const days = Number.parseFloat(e.target.value);
      if (days <= 0 || days > 365) {
        document.getElementById("inp-days").classList.add("input-numer-error");
      } else {
        document
          .getElementById("inp-days")
          .classList.remove("input-numer-error");
      }

      break;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validacionesForm);
});

document.getElementById("btn-aguinaldo").addEventListener("click", function () {
  if (inpsalary.value == "") {
    document
      .querySelector("#groupSalary .alert-empty ")
      .classList.add("quitAler-empty");
  } else {
    document
      .querySelector("#groupSalary .alert-empty ")
      .classList.remove("quitAler-empty");
  }
  if (inpYear.value == "") {
    document
      .querySelector("#group-years .alert-empty ")
      .classList.add("quitAler-empty");
  } else {
    document
      .querySelector("#group-years .alert-empty ")
      .classList.remove("quitAler-empty");
  }
  if (inpDays.value == "") {
    document
      .querySelector("#group-days .alert-empty ")
      .classList.add("quitAler-empty");
  } else {
    document
      .querySelector("#group-days .alert-empty ")
      .classList.remove("quitAler-empty");
  }

  const nSalary = Number.parseFloat(inpsalary.value);
  const nYear = Number.parseInt(inpYear.value);
  const nDay = Number.parseInt(inpDays.value);

  if (nSalary != 0 && nYear >= 0 && nYear < 35 && nDay > 0 && nDay < 365) {
    if (nYear < 1) {
      const dias = nSalary / 2;
      const aguinaldo1 = Number(((nDay * dias) / 365).toFixed(1));
      var dshow = document.getElementById("aguinaldoV");
      var p = document.createElement("p");
      p.appendChild(document.createTextNode("$ " + aguinaldo1));
      dshow.appendChild(p);
      document.getElementById("ven-agui").style.display = "block";
    }
    if (nYear >= 1 && nYear <= 3) {
      const aguinaldo2 = Number(((nSalary * 15) / 30).toFixed(1));

      var dshow = document.getElementById("aguinaldoV");
      var p = document.createElement("p");
      p.appendChild(document.createTextNode("$ " + aguinaldo2));
      dshow.appendChild(p);
      document.getElementById("ven-agui").style.display = "block";
    }
    if (nYear > 3 && nDay > 1 && nYear <= 10) {
      const aguinaldo3 = Number(((nSalary * 19) / 30).toFixed(1));

      var dshow = document.getElementById("aguinaldoV");
      var p = document.createElement("p");
      p.appendChild(document.createTextNode("$ " + aguinaldo3));
      dshow.appendChild(p);
      document.getElementById("ven-agui").style.display = "block";
    }
    if (nYear > 10 && nDay > 1) {
      const aguinaldo4 = Number(((nSalary * 21) / 30).toFixed(1));

      var dshow = document.getElementById("aguinaldoV");
      var p = document.createElement("p");
      p.appendChild(document.createTextNode("$ " + aguinaldo4));
      dshow.appendChild(p);
      document.getElementById("ven-agui").style.display = "block";
    }
  }
});

function closed() {
  document.getElementById("ven-agui").style.display = "none";
  location.reload();
}
