function ubahHuruf(kata) {
    var x = ''
    var huruf = 'abcdefghijklmnopqrstuvwxyz'
    for (i=0; i<kata.length; i++) {
        for (j= huruf.length-1; j>=0; j--) {
            // console.log(huruf[j])
            if (kata[i] === huruf[j]) {
                x = x + huruf[j + 1]
            }
        }
    }
    return x
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu