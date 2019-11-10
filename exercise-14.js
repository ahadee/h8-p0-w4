function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    
    var obj = {}

    for (var i=0; i<arrPenumpang.length; i++) {
        // var obj = {}
        var namaPenumpang = arrPenumpang[i][0]
        var berangkat = arrPenumpang[i][1]
        var sampai = arrPenumpang[i][2]

        obj[namaPenumpang] = {
            penumpang: namaPenumpang,
            naikDari: berangkat,
            tujuan: sampai,
            harga: 0
        }

        for (var j=0; j<rute.length; j++) {
            if (berangkat == rute[j]) {
                var tujuanAwal = j
            }
            else if (sampai == rute[j]) {
                var tujuanAkhir = j
            }
        }

        obj[namaPenumpang].harga = 2000 * (tujuanAkhir - tujuanAwal)
    }
    var hasil = Object.values(obj)
    return hasil
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]