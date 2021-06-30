let count=0
let color=null
function check_positive_negative_num(num){
    if (num<0){
        color=`rgb(255,0,0)`
        document.getElementById("count_num").innerHTML=`<div id="count_num" style="red" >${count}</div>`
    }
    else{
        color=`rgb(0,255,0)`
        document.getElementById("count_num").innerHTML=count
    }
}


dec_btn=document.getElementById("decrease_btn").addEventListener("click",function(){
    count-=1
    // if (count<0){
    //     color=rgb(255,0,0)
    // }
    // else{
    //     color=rgb(255,0,0)
    // }
    // new_div=`
    // <body>
    // <div id="count_num" style="color: ${color};">${count}</div>
    // <br>
    // <button id="decrease_btn">Decrease</button>
    // <button id="reset_btn">Reset</button>
    // <button id="increase_btn">Increase</button>
    // <script src="./index.js"></script>
    // </body>`

    // // document.getElementsByTagName("body").innerHTML=new_div
    check_positive_negative_num(count)


})

res_btn=document.getElementById("reset_btn").addEventListener("click",function(){
    count=0
    document.getElementById("count_num").innerHTML=count
})

inc_btn=document.getElementById("increase_btn").addEventListener("click",function(){
    count+=1
    document.getElementById("count_num").innerHTML=count
    check_positive_negative_num(count)
})