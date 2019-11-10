function highestScore (students) {
    // console.log(students[0].class)
    var arrKelas = []
    var obj = {}
    var belumAda
    let findHighestStudent = {};


    for (i=0; i<students.length; i++) {
        belumAda = true
        for (j=0; j<arrKelas.length; j++) {
            if (students[i].class == arrKelas[j]) {
                belumAda = false;
                break
            }
        }
        if (belumAda) {
            arrKelas.push(students[i].class)
        }
    }

    for (j=0; j<arrKelas.length; j++) {
        obj[arrKelas[j]] = {name: [], score: []}
    }

    // console.log(arrKelas)
    // console.log(obj)

    for (k=0; k<students.length; k++) {
        for (l=0; l<arrKelas.length; l++) {
            if (students[k].class == 'foxes') {
                obj.foxes.name.push(students[k].name)
                obj.foxes.score.push(students[k].score)
                break
            }
            else if (students[k].class == 'wolves'){
                obj.wolves.name.push(students[k].name)
                obj.wolves.score.push(students[k].score)
                break
            }
            else {
                obj.tigers.name.push(students[k].name)
                obj.tigers.score.push(students[k].score)
                break
            }
        }
    }

    for (let m=0; m<arrKelas.length; m++) {
        let classKey = arrKelas[m];
        let array1 = obj[classKey].score;
        let array2 = obj[classKey].name;
        // console.log(arrKelas)
        
        // SORT EACH CLASS
        sortArraysInSync(array1,array2);
    }

    function sortArraysInSync (x, y) {  
        let arr = [];
        
        let l1 = Math.min(y.length, x.length);
        let l2 = Math.min(y.length, x.length);
        
        while (l1--) arr.push({ name: x[l1], score: y[l1]});  
        
        arr.sort(function(a, b) {
            return a.score - b.score; });  
        
        while (l2--)
        {  
            x[l2] = arr[l2].name;  
            y[l2] = arr[l2].score;  
        }
    }

    for (let n=0; n<arrKelas.length; n++) {
        
        let schoolKey = arrKelas[n];
        findHighestStudent[schoolKey] = {};
        
        findHighestStudent[schoolKey].name = obj[schoolKey].name[obj[schoolKey].name.length-1];
        findHighestStudent[schoolKey].score = obj[schoolKey].score[obj[schoolKey].score.length-1]
    }

  return findHighestStudent
}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// // {
// //   foxes: { name: 'Alexander', score: 100 },
// //   wolves: { name: 'Alisa', score: 76 },
// //   tigers: { name: 'Viktor', score: 80 }
// // }


console.log(highestScore([])); //{}