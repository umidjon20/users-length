let users = [
   {
      name: 'Kamol'
     },
   {
      name: 'Dilshod'
   },
   {
      name: 'Umar'
   },
   {
      name: 'Jahongir'
   },
   {
      name: 'Muhammadali'
   },
   {
      name: 'Jasur'
   },
   {
      name: 'Jamshid'
   },
   {
      name: 'Maftuna'
   },
   {
      name: 'Umid'
   },
   {
      name: 'Tura'
   }
]
function calclength(){
for(let i = 0;i < users.length;i++){

      if(users[i].name.length > 5) {
         console.log(users[i].name + 'bu  ism 4 harfdan kup')
      }else {
         console.log(users[i].name + 'bu ismda 4 harf bor')
    }
   }
}
calclength()










// function calcLength(usersData){
// let result = users[i].name.length
// for(let i = 0;i < users.length;i++){
//    if(result > 5) {
//       console.log(users[i].name + 'bu  ism 4 harfdan kup')
//    }else {
//       console.log(users[i].name + 'bu ismda 4 harf bor')
//    }
// }
// }


//  let result = users[i].name.length
//  console.log(result)
 
// if(result > 5) {
//    console.log (users[i].name + ' ' + 'bu  ism 4 harfdan kup')
//  }else {
//     console.log(users[i].name + ' ' + 'bu ismda 4 harf bor')
//  }





// for(let i = 0; i > 10; i++){
//    calcLength(users[i])
//    // console.log(users)
// }
