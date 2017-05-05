export default function setUnion(a,b){

  let result = a.concat(b)
  let sortedResult = []
  for(var i = 0; i < result.length - 1; i++){
    if (sortedResult[i+1] == sortedResult[i]){
      sortedResult.push(result[i])
    }
  }
  return sortedResult
}
