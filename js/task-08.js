const inputRef = document.querySelector(".login-form");

inputRef.addEventListener("submit", (event) => {
    event.preventDefault();
    const  {
        elements: { email, password }
      } = event.currentTarget;

        
    if (email.value === "" || password.value === "") {
        alert(`Всі поля мають бути заповненими`);
    } else {

        
    console.log({email: email.value, password: password.value});
    
}
event.currentTarget.reset();
});
  