// @ Diseñado y programado por el Ing Nelson Lozano, diseñador web  front end.
const numberRegex = /^[0-9]+$/;
const mailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function isValidMail(email) {  
  return mailregex.test(String(email).toLowerCase());
}

function isInputNumber(evt){
  var dataInput = String.fromCharCode(evt.which);
  if(!(numberRegex.test(dataInput))){
    evt.preventDefault();
  }
}

function isValidDocument(docId){
  return numberRegex.test(Number(docId));
}

function isValidDocumentFormat(){
  var documento = document.getElementById("documento").value;
  var documentoCaja = document.getElementById("documento");
  if(!isValidDocument(documento) || !documento ){
    documentoCaja.className = 'error';
    return false;
  } else {
    documentoCaja.className = '';
    return true;
  }
};

function isValidName(){
  var nombre = document.getElementById("name").value;
  var nombreCaja = document.getElementById("name");
  if (!nombre) {
    nombreCaja.className = 'error';
    return false;
  } else {
    nombreCaja.className = '';
    return true;    
  }
}

function isValidLastName(){
  var apellido = document.getElementById("lastnames").value;
  var apellidoCaja =  document.getElementById("lastnames");

  if (!apellido) {
    apellidoCaja.className = 'error';
    return false;
  } else {
    apellidoCaja.className = '';
    return true;    
  }
}

function isValidMailType(){
  var correo = document.getElementById("mail").value;  
  var mailCaja =  document.getElementById("mail");

  if(!isValidMail(correo)){
    mailCaja.className = 'error'
    return false;
  } else{
    mailCaja.className = ''
    return true;
  }
}

function validarCampos(){
  if( isValidMailType() && isValidDocumentFormat() && isValidName() && isValidLastName()){
    return true;
  } else {
    return false;
  } 
}

function cerrarSuscribir(){
  var  formModal = document.getElementById("formSubscribe");
  formModal.style.display = "none";
}

function enviardatos(){
  var  formSaveData = document.getElementById("formSave"); 
  formSaveData.style.display = "block";
  setTimeout(function loadModal() {
    formSaveData.style.display = "none";
  }, 3000);
  cerrarSuscribir();
}

function suscribir() {
   if(!validarCampos()){
    console.log('error');
   } else{
    enviardatos();
   }
}
