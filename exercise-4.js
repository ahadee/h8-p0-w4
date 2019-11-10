function cariModus(arr) {
    // obj = {}
    // num = 0
    // for (i=0; i<arr.length; i++) {
    //     for (j=arr.length-1; j>=i+1; j--) {
    //         if (arr[i] == arr[j]) {
    //             obj[arr[i]] = num + 1
    //         }
    //     }
    // }
    // console.log(obj)
    // var hasil = Object.keys(obj);
    // if (hasil.length == 0) {
    //     return -1
    // }

    // return hasil

    var obj = {};
    for(var i = 0; i < arr.length; i++){
        if(obj[arr[i]] === undefined){
            obj[arr[i]] = 0;
        }        
            obj[arr[i]] += 1;
    }

    var greatestFreq = 0;
    var modus;
    for(var prop in obj){
        if(obj[prop] > greatestFreq){
            greatestFreq = obj[prop];
            modus = prop;
        }
    }
    return parseInt(modus);


    // return obj;
  }
  
  // TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1