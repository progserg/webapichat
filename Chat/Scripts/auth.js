$(document).ready(function () {
    
    if (sessionStorage.getItem("user") != null || sessionStorage.getItem("user")!= "") {
        $("#name").val(sessionStorage.getItem("user"));
    }
    else {
        sessionStorage.setItem("user", "user" + Math.random(Math.round(Date.now())));
    }

    $("#login").click(
        function setUser() {
            sessionStorage.setItem("user", $("#name").val());
        }
    );
});