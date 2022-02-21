// declaraciones

const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");
const inputName = document.getElementById("inpNm");
const stcheck = document.getElementById("checkSta");
const assig = document.querySelectorAll("#myDropdown a");
const tBody = document.querySelector(".body-table");
const inputDelete = document.getElementById("inp-delete");
const divId = document.getElementById("inpDiv");
const inputSearch = document.getElementById("inp-search");
const assig2 = document.querySelectorAll("#myDropdown2 a");
const assig3 = document.querySelectorAll("#myDropdown3 a");

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

function myFunction3() {
  document.getElementById("myDropdown3").classList.toggle("show");
}

window.onload = (valor) => {
  valor = "onload";
  fulltable(valor);

  insertId();
};

// validar inputs

const validacionesForm = (e) => {
  switch (e.target.name) {
    case "namep":
      if (e.target.value.length > 100) {
        e.target.value = e.target.value.slice(0, 100);
      }
      break;

    case "id":
      if (e.target.value.length > 100) {
        e.target.value = e.target.value.slice(0, 100);
      }
      break;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validacionesForm);
  input.addEventListener("blur", validacionesForm); //comprobar cuando den click afuera del input
});

// insert id in DOM

const insertId = () => {
  var pId = document.createElement("p");
  pId.appendChild(document.createTextNode(generateId()));
  pId.classList.add("idValue");
  divId.appendChild(pId);
};

//get value from dropdown

var assigValue;

const obtAssig = (e) => {
  switch (e.target.id) {
    case "frank":
      assigValue = "frank";
      document.getElementById("myDropdown").classList.remove("show");

      break;
    case "john":
      assigValue = "john";
      document.getElementById("myDropdown").classList.remove("show");
      break;
    case "alice":
      assigValue = "alice";
      document.getElementById("myDropdown").classList.remove("show");
      break;
    case "mary":
      assigValue = "mary";
      document.getElementById("myDropdown").classList.remove("show");
      break;
  }
};

assig.forEach((a) => {
  a.addEventListener("click", obtAssig);
});

/*      get value date                         */
function fecha() {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hora = date.getHours();
  let minuto = date.getMinutes();
  let segundo = date.getSeconds();

  let uDates =
    day + "-" + month + "-" + year + "-" + hora + "-" + minuto + "-" + segundo;

  return uDates;
}

document.getElementById("saveReg").addEventListener("click", function () {
  const idValue = document.querySelector(".idValue");
  var permiso = 0;
  var estado;
  const date = fecha();
  if (inputName.value == "") {
    document
      .querySelector("#grupo_name .alert_input_id")
      .classList.add("formulario_input_activo");
  } else {
    document
      .querySelector("#grupo_name .alert_input_id")
      .classList.remove("formulario_input_activo");
    permiso += 1;
  }

  if (stcheck.checked) {
    estado = "Done";
  } else {
    estado = "Pending";
  }

  if (permiso == 1) {
    const usuario = {
      Id: idValue.innerHTML.toString(),
      Name: inputName.value,
      State: estado,
      Assignee: assigValue,
      Cdate: date,
    };
    document
      .querySelector("#grupo_id .alert_input")
      .classList.remove("formulario_input_activo");
    const usuarioString = JSON.stringify(usuario);
    if (usuario.Id in localStorage) {
      console.log("ya existe");
      document
        .querySelector("#grupo_id .alert_input")
        .classList.add("formulario_input_activo");
    } else {
      const tBody = document.querySelector(".body-table");
      localStorage.setItem(usuario.Id, usuarioString);

      var fila = document.createElement("tr"),
        id = document.createElement("td"),
        nombre = document.createElement("td"),
        estado = document.createElement("td"),
        assign = document.createElement("td"),
        cdate = document.createElement("td");
      fila.classList.add("table-tr");
      id.appendChild(document.createTextNode(usuario.Id));
      nombre.appendChild(document.createTextNode(usuario.Name));
      estado.appendChild(document.createTextNode(usuario.State));
      assign.appendChild(document.createTextNode(usuario.Assignee));
      cdate.appendChild(document.createTextNode(usuario.Cdate));

      fila.appendChild(id);
      fila.appendChild(nombre);
      fila.appendChild(estado);
      fila.appendChild(assign);
      fila.appendChild(cdate);
      tBody.appendChild(fila);
    }
    location.reload();
    //
  }
});

// We fill the table with what is saved in localstorage

function fulltable(comprobar, userL) {
  switch (comprobar) {
    case "onload":
      for (var i = 0; i < localStorage.length; i++) {
        var clave = localStorage.key(i);
        const usuarioT = JSON.parse(localStorage.getItem(clave));
        var fila = document.createElement("tr"),
          id = document.createElement("td"),
          nombre = document.createElement("td"),
          estado = document.createElement("td"),
          assign = document.createElement("td"),
          cdate = document.createElement("td");
        fila.classList.add("table-tr");

        id.appendChild(document.createTextNode(usuarioT.Id));
        nombre.appendChild(document.createTextNode(usuarioT.Name));
        estado.appendChild(document.createTextNode(usuarioT.State));
        assign.appendChild(document.createTextNode(usuarioT.Assignee));
        cdate.appendChild(document.createTextNode(usuarioT.Cdate));

        fila.appendChild(id);
        fila.appendChild(nombre);
        fila.appendChild(estado);
        fila.appendChild(assign);
        fila.appendChild(cdate);
        tBody.appendChild(fila);
      }

      break;

    case "search":
      var fila = document.createElement("tr"),
        id = document.createElement("td"),
        nombre = document.createElement("td"),
        estado = document.createElement("td"),
        assign = document.createElement("td"),
        cdate = document.createElement("td");

      fila.classList.add("table-tr");
      id.appendChild(document.createTextNode(userL.Id));
      nombre.appendChild(document.createTextNode(userL.Name));
      estado.appendChild(document.createTextNode(userL.State));
      assign.appendChild(document.createTextNode(userL.Assignee));
      cdate.appendChild(document.createTextNode(userL.Cdate));

      fila.appendChild(id);
      fila.appendChild(nombre);
      fila.appendChild(estado);
      fila.appendChild(assign);
      fila.appendChild(cdate);
      tBody.appendChild(fila);
      window.reload();

      break;

    case "statu":
      var fila = document.createElement("tr"),
        id = document.createElement("td"),
        nombre = document.createElement("td"),
        estado = document.createElement("td"),
        assign = document.createElement("td"),
        cdate = document.createElement("td");

      fila.classList.add("table-tr");
      id.appendChild(document.createTextNode(userL.Id));
      nombre.appendChild(document.createTextNode(userL.Name));
      estado.appendChild(document.createTextNode(userL.State));
      assign.appendChild(document.createTextNode(userL.Assignee));
      cdate.appendChild(document.createTextNode(userL.Cdate));

      fila.appendChild(id);
      fila.appendChild(nombre);
      fila.appendChild(estado);
      fila.appendChild(assign);
      fila.appendChild(cdate);
      tBody.appendChild(fila);
      break;
  }
}

//inputs of table

//erase username
document.getElementById("btn-deleteU").addEventListener("click", function () {
  if (inputDelete.value in localStorage) {
    localStorage.removeItem(inputDelete.value);
    document
      .querySelector("#grupo-delete .alert_input")
      .classList.remove("formulario_input_activo");
    location.reload();
  } else {
    document
      .querySelector("#grupo-delete .alert_input")
      .classList.add("formulario_input_activo");
  }
});

//search username

document.getElementById("btn-searchU").addEventListener("click", function (e) {
  if (inputSearch.value in localStorage) {
    for (var i = 0; i < localStorage.length; i++) {
      itemts = document.querySelector(".table-tr");
      document.querySelector(".body-table").removeChild(itemts);
    }

    document
      .querySelector("#grupo-search .alert_input")
      .classList.remove("formulario_input_activo");
    const userSearch = JSON.parse(localStorage.getItem(inputSearch.value));
    fulltable("search", userSearch);
  } else {
    document
      .querySelector("#grupo-search .alert_input")
      .classList.add("formulario_input_activo");
  }
});

//Id generation

const generateId = () => Math.random().toString(36).substring(2, 18);

// status
const obtAssig2 = (e) => {
  var counter = 0;
  switch (e.target.id) {
    case "done":
      var cElementosTableDone =
        document.getElementsByClassName("table-tr").length;
      for (var j = 0; j < cElementosTableDone; j++) {
        const bTr = document.querySelector(".table-tr");
        document.querySelector(".body-table").removeChild(bTr);
      }
      let status = [];
      for (var i = 0; i < localStorage.length; i++) {
        const llave = localStorage.key(i);
        const uState = JSON.parse(localStorage.getItem(llave));

        if (uState.State == "Done") {
          status.push(uState);
        }
      }
      for (var j = 0; j < status.length; j++) {
        var fila = document.createElement("tr"),
          id = document.createElement("td"),
          nombre = document.createElement("td"),
          estado = document.createElement("td"),
          assign = document.createElement("td"),
          cdate = document.createElement("td");

        fila.classList.add("table-tr");
        id.appendChild(document.createTextNode(status[j].Id));
        nombre.appendChild(document.createTextNode(status[j].Name));
        estado.appendChild(document.createTextNode(status[j].State));
        assign.appendChild(document.createTextNode(status[j].Assignee));
        cdate.appendChild(document.createTextNode(status[j].Cdate));

        fila.appendChild(id);
        fila.appendChild(nombre);
        fila.appendChild(estado);
        fila.appendChild(assign);
        fila.appendChild(cdate);
        tBody.appendChild(fila);
      }

      document.getElementById("myDropdown2").classList.remove("show");

      break;

    case "pending":
      var cElementosTable = document.getElementsByClassName("table-tr").length;

      for (var j = 0; j < cElementosTable; j++) {
        const bTr = document.querySelector(".table-tr");
        document.querySelector(".body-table").removeChild(bTr);
      }
      let status2 = [];
      for (var i = 0; i < localStorage.length; i++) {
        const llave = localStorage.key(i);
        const uState = JSON.parse(localStorage.getItem(llave));

        if (uState.State == "Pending") {
          status2.push(uState);
        }
      }
      for (var j = 0; j < status2.length; j++) {
        var fila = document.createElement("tr"),
          id = document.createElement("td"),
          nombre = document.createElement("td"),
          estado = document.createElement("td"),
          assign = document.createElement("td"),
          cdate = document.createElement("td");

        fila.classList.add("table-tr");
        id.appendChild(document.createTextNode(status2[j].Id));
        nombre.appendChild(document.createTextNode(status2[j].Name));
        estado.appendChild(document.createTextNode(status2[j].State));
        assign.appendChild(document.createTextNode(status2[j].Assignee));
        cdate.appendChild(document.createTextNode(status2[j].Cdate));

        fila.appendChild(id);
        fila.appendChild(nombre);
        fila.appendChild(estado);
        fila.appendChild(assign);
        fila.appendChild(cdate);
        tBody.appendChild(fila);
      }
      document.getElementById("myDropdown2").classList.remove("show");

      break;
  }
};

assig2.forEach((e) => {
  e.addEventListener("click", obtAssig2);
});

// date

const obtAssig3 = (e) => {
  switch (e.target.id) {
    case "recent":
      let fecha = [];
      var cElementosTableRecent =
        document.getElementsByClassName("table-tr").length;
      for (var y = 0; y < cElementosTableRecent; y++) {
        const bTr = document.querySelector(".table-tr");
        document.querySelector(".body-table").removeChild(bTr);
      }

      for (var i = 0; i < localStorage.length; i++) {
        const llave = localStorage.key(i);

        const userS = JSON.parse(localStorage.getItem(llave));

        fecha.push(userS);
      }
      fecha.sort((a, b) => {
        if (a.Cdate > b.Cdate) {
          return -1;
        }
        if (a.Cdate < b.Cdate) {
          return 1;
        }
        return 0;
      });
      for (var j = 0; j < localStorage.length; j++) {
        var fila = document.createElement("tr"),
          id = document.createElement("td"),
          nombre = document.createElement("td"),
          estado = document.createElement("td"),
          assign = document.createElement("td"),
          cdate = document.createElement("td");

        fila.classList.add("table-tr");
        id.appendChild(document.createTextNode(fecha[j].Id));
        nombre.appendChild(document.createTextNode(fecha[j].Name));
        estado.appendChild(document.createTextNode(fecha[j].State));
        assign.appendChild(document.createTextNode(fecha[j].Assignee));
        cdate.appendChild(document.createTextNode(fecha[j].Cdate));

        fila.appendChild(id);
        fila.appendChild(nombre);
        fila.appendChild(estado);
        fila.appendChild(assign);
        fila.appendChild(cdate);
        tBody.appendChild(fila);
      }

      document.getElementById("myDropdown3").classList.remove("show");

      break;

    case "late":
      let fecha2 = [];
      var cElementosTable = document.getElementsByClassName("table-tr").length;

      for (var y = 0; y < cElementosTable; y++) {
        const bTr = document.querySelector(".table-tr");
        document.querySelector(".body-table").removeChild(bTr);
      }

      for (var i = 0; i < localStorage.length; i++) {
        const llave = localStorage.key(i);

        const userS = JSON.parse(localStorage.getItem(llave));

        fecha2.push(userS);
      }
      fecha2.sort((a, b) => {
        if (a.Cdate > b.Cdate) {
          return -1;
        }
        if (a.Cdate < b.Cdate) {
          return 1;
        }
        return 0;
      });
      for (var j = localStorage.length - 1; j >= 0; j--) {
        var fila = document.createElement("tr"),
          id = document.createElement("td"),
          nombre = document.createElement("td"),
          estado = document.createElement("td"),
          assign = document.createElement("td"),
          cdate = document.createElement("td");

        fila.classList.add("table-tr");
        id.appendChild(document.createTextNode(fecha2[j].Id));
        nombre.appendChild(document.createTextNode(fecha2[j].Name));
        estado.appendChild(document.createTextNode(fecha2[j].State));
        assign.appendChild(document.createTextNode(fecha2[j].Assignee));
        cdate.appendChild(document.createTextNode(fecha2[j].Cdate));

        fila.appendChild(id);
        fila.appendChild(nombre);
        fila.appendChild(estado);
        fila.appendChild(assign);
        fila.appendChild(cdate);
        tBody.appendChild(fila);
      }
      document.getElementById("myDropdown3").classList.remove("show");
      break;
  }
};

assig3.forEach((e) => {
  e.addEventListener("click", obtAssig3);
});
