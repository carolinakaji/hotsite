let linkRegulamento = document.getElementsByClassName('linkRegulamento');
let inputRadio = document.querySelectorAll('input[type="radio"]');
let checkbox = document.querySelector('input[type="checkbox"]');


// Evento para o Regulamento
Array.from(linkRegulamento).forEach(elem => {
  elem.addEventListener('click', function(){
    regulamento.style.visibility = 'visible';
  });
});
fechaContainer.addEventListener('click', function(){
  regulamento.style.visibility = 'hidden';
});

// Valida Campos do formulário:
cadastrar.addEventListener('click', function(){
if((nomeCompleto.value === '') || (nascimento.value === '') || (rgNumero.value === '') || (rgDigito.value === '') || (cpfNumero.value === '') || (endereco.value === '') || (checkbox.checked == false)){
  erroConfirmacao.style.visibility = 'visible';
} else {
  confirmacao.style.visibility = 'visible';
}
});

limpar.addEventListener('click', function(){
  let inputRadio = document.querySelectorAll('input[type="radio"]');
  let checkbox = document.querySelector('input[type="checkbox"]');

  nomeCompleto.value = '';
  nascimento.value = '';
  rgNumero.value = '';
  rgDigito.value = '';
  cpfNumero.value = '';
  cpfDigito.value = '';
  endereco.value = '';
  enderecoComplemento.value = '';
  email.value = '';
  telefone.value = '';

  for(var i = 0; i < inputRadio.length; i++){
    inputRadio[i].checked = false;
  }
  checkbox.checked = false;
});


