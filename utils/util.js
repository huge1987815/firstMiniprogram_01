function converToCastsString(casts){
  var castsjoin="";
  for(var inx in casts){
    castsjoin=castsjoin+casts[inx].name+" / ";
  }
  return castsjoin.substring(0,castsjoin.length-2);
}

//遍历图片
function convertToCastInfos(casts){
  var castsArray=[];
  for(var idx in casts){
    var cast={
      img:casts[idx].avatars?casts[idx].avatars.large:"",
      name:casts[idx].name
    }
    castsArray.push(cast);
  }
  return castsArray;
}
//导出
export{
  converToCastsString,
  convertToCastInfos
}