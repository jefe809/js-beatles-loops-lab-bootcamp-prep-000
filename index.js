function theBeatlesPlay(musicians, instruments){
   var array = [];
    for(let i = 0; i < 4; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts){
  var array = [];
  let i = 0;
  while (i < 4){
    
   array.push(`${facts[i]}` + '!!!');
    i++;
    
    if(i === 4){
      return array;
    }
  }
   
}