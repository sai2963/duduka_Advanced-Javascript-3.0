function one(call) {
  console.log("one");
  call();
}
function two() {
  console.log("two");
}
one(two);
