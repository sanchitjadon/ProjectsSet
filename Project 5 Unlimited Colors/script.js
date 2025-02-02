const randomColor = function() {
    const hex = "0123456789ABCDEF";
    let color = '#';
    for(let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random()*16)];
    }
    return color;
  };
  let changeId;
  const startChangingColor = function(){
    if(!changeId) {
      changeId = setInterval(changecolor, 1000)
    }
    function changecolor(){
      document.body.style.backgroundColor = randomColor()
    }
  }
  const stopChangingColor = function(){
    clearInterval(changeId);
    changeId = null;
  }
  
  document.querySelector('#start').addEventListener('click',startChangingColor);
  document.querySelector('#stop').addEventListener('click',stopChangingColor);