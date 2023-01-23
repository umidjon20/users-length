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
         console.log(users[i].name + ' '+ 'bu  ism 4 harfdan kup')
      }else {
         console.log(users[i].name + ' ' + 'bu ismda 4 harf bor')
    }
   }
}
calclength()










