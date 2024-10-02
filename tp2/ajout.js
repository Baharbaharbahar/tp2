function verif(){
    login=document.getElementById("login").value ;
    password=document.getElementById("password").value;
    nom=document.getElementById("nom").value;
    prenom=document.getElementById("prenom").value;
    date_naiss=document.getElementById("date_naiss").value;
    heure=document.getElementById("heure").value;
    mail=document.getElementById("mail").value;
    homme=document.getElementById("homme").checked;
    femme=document.getElementById("femme").checked;
    foot=document.getElementById("foot").checked;
    hand=document.getElementById("hand").checked;
    tennis=document.getElementById("tennis").checked;
    pays=document.getElementById("pays").selectedIndex;
    remarques=document.getElementById("remarques").value;
    if (login==""){
        alert ("verif votre login");
    }else if (password==""){
        alert ("verif votre password");
    }else if (nom==""){
        alert ("verif votre nom");
    }else if (prenom==""){
        alert ("verif votre prenom");
    }else if (date_naiss==""){
        alert ("verif votre date_naiss");
    }else if (heure==""){
        alert ("verif votre heure");
    }else if (mail==""){
        alert ("verif votre mail");
    }else if (!homme & !femme ){
        alert ("verif votre sexe");
    }else if (!foot & !hand & !tennis ){
        alert ("verif votre Sports");
    }else if (pays==0 ){
        alert ("verif votre pays");
    }else if (remarques=""){
        alert ("verif votre remarques");
    }


}