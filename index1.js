const Users = ["Gaurav", "Amit", "Mithun", "Rohit", "Shubham", "Rohan"];
function isUserPresent(user){
    if(Users.includes(user)){
    console.log(`Yes, ${user} is a valid user`);
    return true;
}
else{
    console.log(`No, ${user} is not a valid user`);
    return true;
}
}

isUserPresent("Mithun")
isUserPresent("Hera")