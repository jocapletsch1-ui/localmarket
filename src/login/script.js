function login(){
    var nome = $("#nome").val();
    var senha = $("#senha").val();

    if(nome && senha && nome === "admin" && senha === "admin0"){

    }else{
        document.getElementById("errorModal").style.display = "flex";
        document.getElementById("nome").style.borderBottom = "5px solid #ff0000";
        document.getElementById("senha").style.borderBottom = "5px solid #ff0000";
    }
}