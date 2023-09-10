function CalculateTotalCartValue(){
   let totalvalue = 0;
   for(let i = 0; i < arguments.length; i++){
    totalvalue += arguments[i];
   }
   console.log(`The total value is ${totalvalue}`);
   return totalvalue;
}
CalculateTotalCartValue(30, 40, 90);