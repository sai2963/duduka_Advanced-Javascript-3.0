//with normal  function
function one(call) {
  console.log("one");
  call();
}
function two() {
  console.log("two");
}
one(two);
//with arrow function
let stocks = {
  friuts: ["strawberry", "apple", "mango", "bannana"],
  liqiud: ["water", "juice"],
  holder: ["cone", "cup", "stick"],
  toopings: ["choclate ", "peanuts"],
};
let order = (friut_name, call_production ,served) => {
  setTimeout(() => {
    console.log(`${stocks.friuts[friut_name]}`);
    call_production();
    served();
  }, 2000);
};
let production = () => {
  setTimeout(() => {
    console.log("production has started");
    setTimeout(() => {
      console.log("The friuts are chopped");
      setTimeout(() => {
        console.log(`added ${stocks.liqiud[0]} and ${stocks.liqiud[1]}`);
        setTimeout(() => {
          console.log(`The Machine has started`);
          setTimeout(() => {
            console.log(`The container is ${stocks.holder[1]}`);
            setTimeout(() => {
              console.log(`The topings selected are ${stocks.toopings[0]} and ${stocks.toopings[1]}`);
              setTimeout(()=>{
                console.log('The Ice crream has been Served')
              },2000)
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0);
};
let serve=()=>{
  setTimeout(()=>{
    console.log('The Ice crream has been Served')
  },2000)
}
order(0, production,serve);
