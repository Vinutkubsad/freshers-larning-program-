window.onload =  function() {
    var button = document.getElementById("btn");
    var name =  document.getElementById("name");
    var pwd = document.getElementById("pwd");
    button.onclick = function() { 
        console.log('checked', name.value, pwd.value)
        {
            if (name.value === "" || pwd.value === "")
                alert("Name must be filled");
        
        }
    }
}
