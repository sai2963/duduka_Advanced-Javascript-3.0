let stocks = {
    fruits: ["strawberry", "apple", "mango", "banana"],
    liquid: ["water", "juice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
  };
  
  let is_shop_open = true;
  
  let time =(ms)=>{
    return new Promise((resolve, reject) => {
      if(is_shop_open){
        setTimeout(resolve,ms);
      }
      else{
        reject(console.log('Sorry For Inconvience Our Shop is not open now'))
      }
    })
  }
  
  async function kitchen(){
    try{
      await time(2000);
      console.log(`The friut  is ${stocks.fruits[1]}`)
      console.log('The production has Started')
      await time(2000);
      console.log('The friuts are chopped')
      await time(1000);
      console.log(`The Liquids are added ${stocks.liquid[0] }and ${stocks.liquid[1]}`)
      await time(1000);
      console.log('The Machine Has Started')
      await time(2000);
      console.log(`The Icecream is put on ${stocks.holder[0]}`)
      await time(3000);
      console.log(`The topping is ${stocks.toppings[0]}`)
      await time(2000);
      console.log('The Iccecream has been served')
    }
    catch(error){
      console.log('The Customer Has Left')
    }
    finally{
      console.log('Thank You')
    }
  }
  kitchen();
  
  
  
  
  
  
  
  
  
  
  
  
  
  