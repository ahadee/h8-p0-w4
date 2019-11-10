function checkAB(num) {
    // var indexA = ''
    // var indexB = ''
    // var hurufA = 0
    // var hurufB = 0


    // for (i=0; i<num.length; i++) {
    //     if (num[i] == 'b') {
    //         hurufA = i
    //     }break
    // }

    // for (j=num.length-1; j>=0; j--) {
    //     if (num[i] == 'a') {
    //         hurufB = i
    //     }break
    // }

    // // console.log(hurufB)
    // // console.log(hurufA)

    // temp = hurufB - hurufA;

    // if (temp == 4) {
    //     return true
    // }
    // else if (temp < 4) {
    //     return false
    // }

    for (var i = 0; i < num.length; i++) {
		if (num[i] === 'a' && num[i + 4] === 'b') {
			return true;
		}
		else if (num[i] === 'b' && num[i + 4] === 'a') {
			return true;
        }
        // else {
        //     return false
        // }
	}
	return false;

  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false