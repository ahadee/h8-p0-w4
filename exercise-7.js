function urutkanAbjad(str) {
    var hurufUrut = 'abcdefghijklmnopqrstuvwxyz'
    var strUrut = ''

    for (i=0; i<hurufUrut.length; i++) {
        for (j=0; j<str.length ; j++) {
            if (hurufUrut[i] == str[j]) {
                strUrut += str[j]
            }
        }
    }

    return strUrut
    
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'