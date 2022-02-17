$(document).ready(()=>{

    $(".cart-icon").on('click', ()=>{
        $(".cart-items-section").css("display","block");
    });
    $(".cart-close").on('click', ()=>{
        $(".cart-items-section").css("display","none");
        })
    })