let stocks = {
    fruits: ["strawberry", "apple", "mango", "banana"],
    liquid: ["water", "juice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
  };
  
  let is_shop_open = true;
  
  let order = (time, work) => {
    return new Promise((resolve, reject) => {
      if (is_shop_open) {
        setTimeout(() => {
          resolve(work());
        }, time);
      } else {
        reject(
          console.log("Sorry for the inconvenience, our shop is not open right now")
        );
      }
    });
  };
  order(2000,()=>(console.log(`${stocks.fruits[0]}`)))
  
  .then(()=>{
    return order(0,()=>(console.log('The Production has Started')))
  })
  
  .then(()=>{
    return order(2000,()=>(console.log('The Friut Has been Chopped')))
  })
  
  .then(()=>{
    return order(1000,()=>(console.log(`Added ${stocks.liquid[0]} and ${stocks.liquid[1]}`)))
  })
  
  .then(()=>{
    return order(1000,()=>(console.log('The machine has started')))
  })
  
  .then(()=>{
    return order(2000,()=>(console.log(`The Ice cream is on the ${stocks.holder[0]}`)))
  })
  
  .then(()=>{
    return order(3000,()=>(console.log(`the toping is ${stocks.toppings[0]}`)))
  })
  
  .then(()=>{
    return order(2000,()=>(console.log('The Ice Cream Has Been Served')))
  
  })
  .catch(()=>{
    console.log('The Customer Has Left')
  })
  .finally(()=>{
    console.log('Thank You')
  })
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  