function shoppingTime(memberId, money) {
    var detailCustomer = {}
    var list = []
    var listBarang = [
                        ['Sepatu Stacattu', 1500000], 
                        ['Baju Zoro', 500000], 
                        ['Baju H&N', 250000], 
                        ['Sweater Uniklooh', 175000], 
                        ['Casing Handphone', 50000]
                    ]
    
    
    if (memberId == undefined && money ==undefined) {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }
    if (memberId == '') {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }
    else {
        detailCustomer.memberId = memberId
    }

    if (money < 50000) {
        return 'Mohon maaf, uang tidak cukup'
    }
    else {
        detailCustomer.money = money
    }

    var jumlah = 0
    for (var i=0; i<listBarang.length; i++) {
    
        // if (detailCustomer.listPurchased == undefined) {
        //     // detailCustomer.listPurchased = listBarang[i][0] + ', '
        //     list.push(listBarang[i][0])
        //     detailCustomer.listPurchased = list
        // }
        // else {
        //     // detailCustomer.listPurchased += listBarang[i][0] + ', '
        //     list.push(listBarang[i][0])
        //     detailCustomer.listPurchased = list
        // }
        if (money > listBarang[i][1]) {
            list.push(listBarang[i][0])
            detailCustomer.listPurchased = list
            jumlah = jumlah + listBarang[i][1]
        }
        detailCustomer.changeMoney = money - jumlah
    }   
    // console.log(detailCustomer)
    return detailCustomer;
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja