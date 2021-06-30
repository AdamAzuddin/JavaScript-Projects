rgb=null
let new_html=""
const body_el=document.getElementById("body-el")
const nct_el=document.getElementById("nct")
let hex=""

function  rgb_to_hex(rgb_val){
    // Taking only number from rgb string and converting it to a hexadecimal value,stored in x variable
    var a = rgb_val.split("(")[1].split(")")[0];
    a = a.split(",");
    hex = a.map(function(x){
    x = parseInt(x).toString(16); 
    return (x.length==1) ? "0"+x : x; 
    })
    hex = "#"+hex.join("");
    hex=`${hex}`
    hex=hex.toUpperCase()
    hex=`${hex}`
    return hex
}

function change_bg_color(){
    random_color()
    rgb_to_hex(rgb)
    // new string to add to html file using innerHTML method
    new_html=
    `
<body id="body-el">
    <div  style="background: ${hex};" id="container">
        <div id="info-container">${rgb}<br>${hex}<span id="color_name"></span></div>
        <br>
        <button style="background: ${hex};" id="color-btn" onclick="change_bg_color()">Random color</button>
        <script language="JavaScript" type="text/javascript" src="./index.js"></script>
    </div>
</body>
    `
    body_el.innerHTML=new_html
}
function random_color(){
    // Generating a random number in from 0 to 255 to use for RGB value
    const red=Math.floor(Math.random()*255)
    const green=Math.floor(Math.random()*255)
    const blue=Math.floor(Math.random()*255)
    rgb=`rgb(${red},${green},${blue})`
    return rgb
}




