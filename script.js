// Evento para o Regulamento
linkRegulamento.addEventListener('click', function(){
  regulamento.style.visibility = 'visible';
});

fechaContainer.addEventListener('click', function(){
  regulamento.style.visibility = 'hidden';
});

// Evento para a confirmação do cadastro

cadastrar.addEventListener('click', function(){
  confirmacao.style.visibility = 'visible';
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