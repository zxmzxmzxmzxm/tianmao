//banner轮播
{
    let imgs = document.querySelectorAll(".banner_img li");
    let pagers = document.querySelectorAll(".pager li");
    let banner = document.querySelector("#banner");
    pagers.forEach(function (ele, index) {
        ele.onclick = function () {
            for (let i = 0; i < imgs.length; i++) {
                imgs[i].classList.remove("active1");
                pagers[i].classList.remove("active1");
            }
            this.classList.add("active1");
            imgs[index].classList.add("active1");
            n = index;
        }
    })
    let n = 0;
    let l=imgs.length;
    let t = setInterval(move, 3000);
    function move() {
        n++;
        // n=n%5;
        if (n === l) {
            n = 0;
        }
        if (n < 0) {
            n = imgs.length - 1;
        }
        for (let i = 0; i < l; i++) {
            imgs[i].classList.remove("active1");
            pagers[i].classList.remove("active1");
        }
        imgs[n].classList.add("active1");
        pagers[n].classList.add("active1");
    }
    banner.onmouseenter = function () {
        clearInterval(t);
    };
    banner.onmouseleave = function () {
        t = setInterval(move, 3000);
    }
    pagers.onclick=function () {
        move();
    }
}

// /topbar
{
    let topbar=document.querySelector(".topbar");
    let leftbar=document.querySelector(".leftbar");
    window.onscroll=function () {
        let st=document.documentElement.scrollTop;
        if(st>1000){
            topbar.style.display="block";
        }else{
            topbar.style.display="none";
        }
        if(st>700){
            leftbar.style.display="block";
        }else{
            leftbar.style.display="none";
        }
    }
}
//楼层
{
    let tips=document.querySelectorAll(".tips");
    let containers=document.querySelectorAll(".container");
    let flag=true;
    tips.forEach(function (ele,index) {
        flag=false;
        ele.onclick=function(){
            let ot=containers[index].offsetTop-50;
            let now=document.documentElement.scrollTop;
            let speed=(ot-now)/10;
            let time=0;
            let t=setInterval(function(){
                time+=25;
                now+=speed;
                if(time===250){
                    clearInterval(t);
                    flag=true;
                }
                document.documentElement.scrollTop=now;
            },25)
        }
    });
    window.addEventListener("scroll",function(ele,index){
        if(flag){
            let st=document.documentElement.scrollTop;
            for(let i=0;i<containers.length;i++){
                if(st>containers[i].offsetTop-50){
                    for(let i=0;i<tips.length;i++){
                        tips[i].classList.remove("active");
                    }
                    tips[i].classList.add("active");
                }
            }
        }
    })

    let totop=document.querySelector(".leftbar_totop");
    totop.onclick=function () {
        // document.documentElement.scrollTop=0;
        let st=document.documentElement.scrollTop;
        let t=setInterval(function () {
            st-=200;
            if(st<0){
                st=0;
                clearInterval(t);
            }
            document.documentElement.scrollTop=st;
        },25)
    }
}

//rightbar
{
    let labels=document.querySelectorAll(".rightbar_label");
    let menus=document.querySelectorAll(".rightbar_hidden");
    let obj=menus[0];
    labels.forEach(function(ele,index){
        ele.onmouseenter=function(){
            obj.style.display="none";
            menus[index].style.display="block";
            menus[index].style.left="-90px";
            // menus[index].style.opacity="1";
            obj=menus[index];
        }
        ele.onmouseleave=function(){
            menus[index].style.display="none";
        }
    })

    let totop=document.querySelector(".rightbar_totop");
    totop.onclick=function () {
        // document.documentElement.scrollTop=0;
        let st=document.documentElement.scrollTop;
        let t=setInterval(function () {
            st-=200;
            if(st<0){
                st=0;
                clearInterval(t);
            }
            document.documentElement.scrollTop=st;
        },25)
    }
}
//head_right选项卡
{
    let labels=document.querySelectorAll(".head_right_label");
    let menus=document.querySelectorAll(".head_right_label_item");
    let obj=menus[0];
    labels.forEach(function(ele,index){
        ele.onmouseenter=function(){
            obj.style.display="none";
            menus[index].style.display="block";
            obj=menus[index];
        }
        ele.onmouseleave=function(){
            menus[index].style.display="none";
        }
    })
}

//banner选项卡
{
    let labels=document.querySelectorAll(".banner_nav_label");
    let menus=document.querySelectorAll(".banner_nav_box");
    let obj=menus[0];
    labels.forEach(function(ele,index){
        ele.onmouseenter=function(){
            obj.style.display="none";
            menus[index].style.display="block";
            obj=menus[index];
        }
        ele.onmouseleave=function(){
            menus[index].style.display="none";
        }
    })
}
//购物车
{
    let box=document.querySelector(".rightbar_car_word");
    let hover=document.querySelector(".rightbar_buycar_hidden");
    box.onmouseenter=function () {
        hover.style.display="block";
    }
    box.ommouseleave=function () {
        hover.style.display="none";
    }
}

