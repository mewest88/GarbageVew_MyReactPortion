import React from 'react';

let loop = (array) => {
  console.log('gets here');
  var sum = 0
  // for (var i = 0; i < array.length; i++) {
  console.log('array');
  console.log(array);
  for (var np in array){
    console.log('np');
    console.dir(np);
    for (var i = 0; i < np.length; i++) {
      console.log('obj');
      var obj = np[i];
      console.log(obj);
      var val = obj[i];
      sum += val.gctime;
    // for (var gc in np) 
    // {
    //   console.log('gc');
    //   console.dir(gc);
    //   console.log(gc.time);
    //   sum += gc.gctime;
    //   console.log(sum);
    // }
    }
  }
  return sum;
}
// {"np":[{"gctype":"test1","gctime":25,"id":0}]}

const NetPerformance = (gcs) => { //not destructuring gcs
  console.log(gcs);
  var stuff = JSON.stringify(gcs);
  console.log(stuff);
  var sum = loop(gcs.np)
  console.log(sum);

  return sum;
}

export default NetPerformance;