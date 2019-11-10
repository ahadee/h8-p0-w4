function graduates (students) {
    let arrKelas = [];
    let obj = {};
    
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
    // console.log(arrKelas)

    for (j=0; j<arrKelas.length; j++) {
        let kelasKey = arrKelas[j]
        obj[kelasKey] = []
    }

    
    for (let key in obj) {
        for (let k=0; k<students.length; k++) {
            let murid = students[k].class;
            let nilai = students[k].score;
            if (nilai > 75) {
                if (murid === key) {
                    obj[key].push(students[k]);
                }
            }
        }
    }

    // console.log(obj)
    
    // // DELETING KEY CLASS FROM OBJECT school (as output expected)
    for (let key in obj) {
        for (let l=0; l<obj[key].length; l++) {
            delete obj[key][l].class;
        }
    }
    
    return obj;
}

console.log(graduates([
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
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }
console.log(graduates([
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
  
  // {
  //   foxes: [
  //     { name: 'Alexander', score: 100 },
  //     { name: 'Vladimir', score: 92 }
  //   ],
  //   wolves: [
  //     { name: 'Alisa', score: 76 },
  //   ],
  //   tigers: [
  //     { name: 'Viktor', score: 80 }
  //   ]
  // }
  
  
  console.log(graduates([])); //{}