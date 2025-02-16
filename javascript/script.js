const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log("submit");
  const firstname = document.querySelector('#firstname');
  console.log('firstname');
    
    
});

console.log(form);
