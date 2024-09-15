const keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');  
const keyboardContainer = document.getElementById('keyboard');  
const display = document.getElementById('display');  

 
keys.forEach(key => {  
    const keyElement = document.createElement('div');  
    keyElement.textContent = key;  
    keyElement.classList.add('key');  

    
    keyElement.addEventListener('click', function() {  
        display.textContent = `Key pressed: ${key}`;  
    });  

    keyboardContainer.appendChild(keyElement);  
});
window.addEventListener('keydown', function(event) {  
   const key = event.key.toUpperCase(); 
   if (keys.includes(key)) {  
       display.textContent = `Key pressed: ${key}`; 
   }  
}); 