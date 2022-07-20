function saveData()
{
    var first_name =  document.getElementById("first_name").value;
    sessionStorage.first_name = first_name;
}


function init()
{
    var  regForm = document.getElementById("registerForm");
    regForm.onsubmit = saveData;
}

window.onload = init;