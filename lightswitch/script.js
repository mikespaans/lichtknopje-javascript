var btn = document.createElement('button');
btn.style.margin = '10px';
btn.innerHTML = '...';
document.body.appendChild(btn);

// schijf hier tussen je code


function KnopAan_Uit(){
    if (btn.innerHTML == "switch light off" ) {;
        btn.innerHTML = 'switch light on';
        console.log("light is off")
        document.body.style.backgroundColor = "black";


   }else {
        btn.innerHTML = "switch light off";
        console.log("light is on")
        document.body.style.backgroundColor = "yellow";
    }}


document.body.style.backgroundColor = "black";
btn.innerHTML = "switch light on"
btn.onclick = KnopAan_Uit


// schijf hier tussen je code