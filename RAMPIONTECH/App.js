//Animation on scroll
AOS.init({
    duration:1200
});

//Project images

const span_details = document.querySelectorAll('.row a');
console.log(span_details);

span_details.forEach((item)=>{
    let spanText = item.querySelector('span');
    item.addEventListener('mouseover',()=>{
        spanText.style.display="block";
    })

    item.addEventListener('mouseout',()=>{
            spanText.style.display = "none";
    })
})

/*Number countdown*/
var client_no =100;
var proj_no = 420;
var counter = 10 , intervalID1, intervalID2;

window.onload = calcClient();

window.onload = calcProject();



function calcClient(){
  intervalID1 =  setInterval(() => {
        var client_value = document.getElementById("client_no").innerHTML;
        var res = Number(client_value)+counter;
        document.getElementById("client_no").innerHTML = res;
        Number(document.getElementById("client_no").innerHTML)==client_no? clearInterval(intervalID1) : null
    }, 100); 
}

function calcProject(){
    intervalID2 = setInterval(()=>{
        var proj_value = document.getElementById("proj_no").innerHTML;
        var res = Number(proj_value) + counter;
        document.getElementById("proj_no").innerHTML = res;
        Number(document.getElementById("proj_no").innerHTML)==proj_no? clearInterval(intervalID2): null
    },100);
}