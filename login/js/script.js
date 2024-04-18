$(document).ready(function () {
    $("form").sumbit(function (e) {
        let user = $('#user').val();
        let pwd = $("pwd").val();

        if(user == "jonh@gmail.com" && pwd== "secreto") {
            alert("Welcome!");
        } else {
            alert("User or Password incorrect!")
        }
    });
});