const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        const Id = event.target.id
        switch(Id) {
            case 'grey' : 
                body.style.backgroundColor = Id
                break;
            case 'yellow' : 
                body.style.backgroundColor = Id
                break;
            case 'white' : 
                body.style.backgroundColor = Id
                break;
            case 'green' : 
                body.style.backgroundColor = Id
                break;
            case 'blue' : 
                body.style.backgroundColor = Id
                break;
            case 'red' : 
                body.style.backgroundColor = Id
                break;
            default :
                body.style.backgroundColor = Id
        }
    })
})

// const buttons = document.querySelectorAll('.button')
// // console.log(button)
// const body = document.querySelector("body")
// // console.log(body)

// buttons.forEach(function(button){
//   console.log(button)
//   button.addEventListener('click',function(event) {
//     // console.log(event)
//     // console.log(event.target)

//     if(event.target.id === 'grey'){
//       body.style.backgroundColor=event.target.id;
//     }
//     if(event.target.id === 'white'){
//       body.style.backgroundColor=event.target.id;
//     }
//     if(event.target.id === 'blue'){
//       body.style.backgroundColor=event.target.id;
//     }
//     if(event.target.id === 'yellow'){
//       body.style.backgroundColor=event.target.id;
//     }
//     if(event.target.id === 'green'){
//       body.style.backgroundColor=event.target.id;
//     }
//     if(event.target.id === 'red'){
//         body.style.backgroundColor=event.target.id;
//       }
//   })
// })