
const passwordBox=document.getElementById('inputtext')


const length=12;

const uppercase='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowercase=';abcdefghijklmnopqrstuvwxyz'
const number='0123456789'
const symbol='!@#$%^&*()[]{}<>/\_-+'

const allChars= uppercase+lowercase+number+symbol

  
 function createPassword(){

  let password=' '

    password+= uppercase[Math.floor(Math.random()*uppercase.length)]
    password+= lowercase[Math.floor(Math.random()*lowercase.length)]
    password+= number[Math.floor(Math.random()*number.length)]
    password+= symbol[Math.floor(Math.random()*symbol.length)]

    while(length>password.length){
        password+=allChars[Math.floor(Math.random()*allChars.length)]
    }
    
    passwordBox.value= password

 }


// COPY BUTTON

const copied=document.querySelector('.copy')


  copied.addEventListener('click', function() {
    const textToCopy = passwordBox.value;

    // Using the Clipboard API
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Text copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
});