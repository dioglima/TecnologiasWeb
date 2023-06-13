function moda(array) {
    var contador = {};
    var Moda;
    var frequenciaMaisAlta = 0;
  
    for (var i = 0; i < array.length; i++) {
      var item = array[i];
      contador[item] = (contador[item] || 0) + 1;
  
      if (contador[item] > frequenciaMaisAlta) {
        frequenciaMaisAlta = contador[item];
        Moda = item;
      }
    }
  
    return Moda;
  }

  array = [12,54,12,33,33,78,87,87,87];

  console.log(moda(array))