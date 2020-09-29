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


