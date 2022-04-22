    const promises = new Promise((resolve,reject) => {

    let pro = prompt('“Сколько букв с слове javaScript”')

   if(pro == 10 ){
       resolve = alert('Урра вы угадали')
   }else{
       reject = alert('Повторите пожалуйста')
   }

   promises.then((text)=>alert(text),(text)=>alert(text))
   
})
