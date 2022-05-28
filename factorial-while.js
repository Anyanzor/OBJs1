function factorizar(num) {
    var resultado = num;
    while (num > 1) {
        num--;
        resultado = resultado * num;
    }
    return resultado;
  }
  factorizar(10);