let quote=[
    
    "You can get everything in life you want if you will just help enough other people get what they want.",
    "Inspiration does exist, but it must find you working.", 
    "Don't settle for average. Bring your best to the moment. Then, whether it fails or succeeds, at least you know you gave all you had.", 
    "Show up, show up, show up, and after a while the muse shows up, too.", 
    "Don't bunt. Aim out of the ballpark. Aim for the company of immortals.",
    "I have stood on a mountain of no’s for one yes.", 
    "If you believe something needs to exist, if it's something you want to use yourself, don't let anyone ever stop you from doing it.", "The best way out is always through.","If there is no struggle, there is no progress."
  



]
const i=Math.random()*10
const y=Number(Math.round(i))
console.log(y)



let ele=document.getElementsByClassName("box")
console.log(ele)
// ele[0].style.color="green"
ele[0].innerHTML=quote[y]