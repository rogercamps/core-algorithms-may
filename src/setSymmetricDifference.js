export default function setSymmetricDifference(){
  let a = []
  let b = []
  let c
  for (var i = 0; i<b.length; i++){
    c = a.indexOf(b[i]);
    if (c > -1){
      a.splice(c,1)
    }
  }
return c
}
