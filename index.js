const clickBtn = document.getElementById('btn')
const numberBtn = document.getElementById('age')

function getinnet(){
      const promise = new Promise((resolve,reject) => {
          const get = numberBtn.value
     if(get == 15){
         resolve('урра вы угадали')
     }else{
         reject('Ты не угадал')
     }
   
 })

promise.then((result)=>{
     console.log(result);
},(text)=>{
     console.log(text);
})

}

clickBtn.addEventListener('click', getinnet)