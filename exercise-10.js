function changeMe(arr) {
    var id = {}
    // console.log(arr[0])
    // console.log(arr[0][0])

    for (i=0; i<arr.length; i++) {
        id.firstName = arr[i][0]
        id.LastName = arr[i][1]
        id.gender = arr[i][2]
        if (arr[i][3] == undefined) {
            id.age = 'Invalid Birth Year' 
        }
        else {
            id.age = 2019 - arr[i][3]
        }
    console.log(id)
    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""