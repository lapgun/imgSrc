let images1='chim1';
let images2='chim2';
let images3='chim3';
let images4='chim4';
let images5='chim5';

function currentImg1() {
   let img1= document.getElementById('chim-1');
    if (images1==="chim1")
    {
        images1="ho1";
    }else if (images1==="ho1"){
        images1="hoa1";
    }else if (images1==="hoa1"){
        images1="chim1";
    }
    img1.src='images/' +images1+ '.jpg';
}
function currentImg2() {
    let  img2=document.getElementById('chim-2');
    if(images2==='chim2'){
        images2='ho2';
    }else if (images2==='ho2'){
        images2='hoa2';
    } else if (images2==='hoa2'){
        images2='chim2';
    }
    img2.src="images/"+images2+'.jpg';

}
function currentImg3() {
    let  img3=document.getElementById('chim-3');
    if(images3==='chim3'){
        images3='ho3';
    }else if (images3==='ho3'){
        images3='hoa3';
    } else if (images3==='hoa3'){
        images3='chim3';
    }
    img3.src="images/"+images3+'.jpg';

}
function currentImg4() {
    let  img4=document.getElementById('chim-4');
    if(images4==='chim4'){
        images4='ho4';
    }else if (images4==='ho4'){
        images4='hoa4';
    } else if (images4==='hoa4'){
        images4='chim4';
    }
    img4.src="images/"+images4+'.jpg';

}
function currentImg5() {
    let  img5=document.getElementById('chim-5');
    if(images5==='chim5'){
        images5='ho5';
    }else if (images5==='ho5'){
        images5='hoa5';
    } else if (images5==='hoa5'){
        images5='chim5';
    }
    img5.src="images/"+images5+'.jpg';

}
function check() {
    if (images1==='chim1'&&images2==='chim2'&&images3==='chim3'&&images4==='chim4'&&images5==='chim5'||
        images1==='ho1'&&images2==='ho2'&&images3==='ho3'&&images4==='ho4'&&images5==='ho5'||
        images1==='hoa1'&&images2==='hoa2'&&images3==='hoa3'&&images4==='hoa4'&&images5==='hoa5'){
        document.getElementById('check').innerHTML='bạn đã đúng';

    }else{
        document.getElementById('check').innerHTML='bạn đã sai';
    }
}