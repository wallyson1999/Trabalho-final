function geradorDeTagsDeIdentificacao(nome) {
return nome.toUpperCase(); 
}

function verificarSePodeSerAdotado(idade, porte) {
  const idadepode = idade <= 2;

  const portepode = porte === 'P';

  if (idadepode || portepode) {
    return true;
  } else {
    return false;
  }
}

function calcularConsumoDeRacao(nome, idade, peso) {
  const consumoPorKg = 300;
  const total = peso * consumoPorKg;
  return total;
}

function decidirTipoDeAtividadePorPorte(porte) {
  if (porte === 'pequeno') {
    return 'brincar dentro de casa';
  } else if (porte === 'medio') {
    return 'caminhada no quarteirão';
  } else if (porte === 'grande') {
    return 'correr no parque';
  } else {
    return 'porte inválido';
  }
}

async function buscarDadoAsync() {
  return 'Pipoca';
}

export {
geradorDeTagsDeIdentificacao,
verificarSePodeSerAdotado,
calcularConsumoDeRacao,
decidirTipoDeAtividadePorPorte,
buscarDadoAsync
}