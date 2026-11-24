const age = prompt("Please enter your age:");

if (age === null){
    alert("Please enter your age");
}else {

    if (age >= 18) {
        alert("You are majeur.");
    } else {
        alert("You are not majeur. You are a minor !!");
    }
}