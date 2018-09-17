
//  var userInput='8:00-12:00';
//  var userInput='8:00-12:00;14:00-17:30';
// var userInput='8:00-12:00;14:00-17:30;18:30-21:00';
function jscut(a) {
  var userInput=a;
  var isCut=1;
  var timeList=[];
  var flagTime=[];
  var indexList=[0];
  var helpList=[];
//  var t=patch(userInput,'\\;');
////  if(t<1){
////    userInput+=';';
////
////  }
  if(isCut){
    var testData=userInput.split(";");
    for(var i=0;i<testData.length;i++){
      testData[i]=testData[i].split("-");
      flagTime.push(testData[i][testData[i].length-1]);
      for(var d=0;d<testData[i].length;d++){
        if(testData[i][d]){
          testData[i][d]='2018-01-01'+' '+ testData[i][d]
        }
        var startDate=new Date(testData[i][0]);
        var startTime=startDate.getTime();
        var endDate=new Date(testData[i][1]);
        var endTime=endDate.getTime();
        for(var list=[];startTime<endTime;list.push(startTime)){
          startTime=startTime+30*60*1000;
        }
        if(list.indexOf(startTime)==-1){
          list.unshift(startTime)
        }
        console.log(list)
        for(var c=0;c<list.length;c++){
          list[c]=timestampToTime(list[c]);
          timeList.push(list[c])
        }
      }
      console.log(timeList)
    }
    for(var e=0;e<timeList.length;e++) {
      if (timeList[e].length == 16) {
        timeList[e] = timeList[e].slice(10, 14)
      } else {
        timeList[e] = timeList[e].slice(10, 15)
      }
    }
    console.log(timeList);
    console.log(flagTime);
    for(var i=0;i<flagTime.length;i++){
      if(timeList.indexOf(flagTime[i])!=-1){
        var index=timeList.indexOf(flagTime[i]);
        indexList.push(index+1)
      }
    }
    for(var i=0;i<indexList.length-1;i++){
      helpList[i]=timeList.slice(indexList[i],indexList[i+1])
    }
    for(var i=0;i<helpList.length;i++){
      helpList[i][helpList[i].length-1]+=";";
      helpList[i]=helpList[i].toString()
    }
    helpList=helpList.toString();
    var reg1 = new RegExp( ';,' , "g" );
    helpList= helpList.replace(reg1,';');
    helpList=helpList.substr(0,helpList.length-1);
    if(helpList.indexOf(";")==-1){
      helpList+=";"
    }
    userInput=helpList;
    console.log(userInput);
    console.log(indexList)
  }else{
    var reg2 = new RegExp( '-' , "g" );
    userInput=userInput.replace(reg2,',');
    console.log(userInput)
  }

//找到';'出现的次数
//  function patch(s, re) {
//    re = eval("/" + re + "/ig");
//    return s.match(re) ? s.match(re).length : 0;
//  }
  function timestampToTime(timestamp) {
    var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    var D = date.getDate() + ' ';
    var h = date.getHours() + ':';
    var m = date.getMinutes() + ':';
    if(m=='0:'){
      m='00:'
    }
    var s = date.getSeconds();
    return Y+M+D+h+m+s;
  }
 return userInput
}
export default jscut
