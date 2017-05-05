export default function setIntersection(a,b){
  let intersection = a.filter(x => b.has(x))
  return intersection
}
