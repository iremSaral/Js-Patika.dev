function getName (){

    let name = prompt("Give your name ","");
    const date = new Date();
console.log(date)

    if (name != null && date != null ) {
        document.getElementById("myName").innerHTML =
          name ;
          document.getElementById("myClock").innerHTML =
          date ;
      }
}