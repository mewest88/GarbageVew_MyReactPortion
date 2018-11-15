import React from 'react';

var getSum = (total, num) => { return total + num; }

const NetPerformance = ({ gcs, addTime }) => {

  var timeArr = []
  for (var i = 0; i < gcs.length; i++){
    timeArr.push(gcs[i].gctime)
  }
  timeArr.reduce(getSum, 0)
  // addTime(timeArr[timeArr.length-1])
  // console.log('timearr: ', timeArr)
  return (
    <div className="gc-perfomance">
      {timeArr}
      <span onChange={() => {addTime(timeArr[timeArr.length-1])}}></span>
      <button onClick={() => {addTime(timeArr[timeArr.length-1])}}>Delete Ninja</button>
      {() => {addTime(timeArr[timeArr.length-1])}}
    </div>
  );
}

export default NetPerformance;

/*
 <div className="collection-item" key={gc.id}>
          <span>{gc.gctime}</span>
          <span>{timeSum}</span>
        </div>
*/