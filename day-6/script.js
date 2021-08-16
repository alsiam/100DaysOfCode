 document.getElementById('login-btn').addEventListener('click',function(){
     const emailField = document.getElementById('user-email');
     const userEmail = emailField.value;
     
     const passwordField= document.getElementById('user-password');
     const userPassword= passwordField.value;

     if(userEmail == 'alsiamworld@gmail.com' && userPassword == 'asworld'){
         window.location.href= 'account.html';
     }else{
         console.log('Error - 504 . Learn more about ALSIAMWORLD')
     }

 })

