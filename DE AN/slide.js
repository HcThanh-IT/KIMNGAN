const imgposition=document.querySelectorAll('.aspect-ratio-169 img')
        const imgcontainer=document.querySelector('.aspect-ratio-169')
        const dotitem=document.querySelectorAll('.dot')
        let imgnumber=imgposition.length
        let index=0
        //conole.log(imgposition)
        imgposition.forEach(function(image,index){
            image.style.left=index*100+ "%"
            dotitem[index].addEventListener("click",function(){
            slider(index)
            })
        })
        function imgslide(){
            index++;
            console.log(index)
            if(index>=imgnumber){index=0}
            slider(index)
        }
        function slider(index){
            imgcontainer.style.left="-"+index*100+"%"
            const dotactive=document.querySelector('.active')
            dotactive.classList.remove('active')
            dotitem[index].classList.add('active')
        }
        setInterval(imgslide,5000)