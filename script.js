function loading(){
    alert("Loading weather report...");
}

function temp(element){
    var x = element.value;
    if (x == "fahrenheit"){
        document.querySelector("#today .hot").innerText="75\u00B0";
        document.querySelector("#tomorrow .hot").innerText="80\u00B0";
        document.querySelector("#friday .hot").innerText="69\u00B0";
        document.querySelector("#saturday .hot").innerText="78\u00B0";
        document.querySelector("#today .cold").innerText="65\u00B0";
        document.querySelector("#tomorrow .cold").innerText="66\u00B0";
        document.querySelector("#friday .cold").innerText="61\u00B0";
        document.querySelector("#saturday .cold").innerText="70\u00B0";
    }
    else {
        document.querySelector("#today .hot").innerText="24\u00B0";
        document.querySelector("#tomorrow .hot").innerText="27\u00B0";
        document.querySelector("#friday .hot").innerText="21\u00B0";
        document.querySelector("#saturday .hot").innerText="26\u00B0";
        document.querySelector("#today .cold").innerText="18\u00B0";
        document.querySelector("#tomorrow .cold").innerText="19\u00B0";
        document.querySelector("#friday .cold").innerText="16\u00B0";
        document.querySelector("#saturday .cold").innerText="21\u00B0";
    }
}

function accept(){
    document.querySelector("#cookie").remove();
}