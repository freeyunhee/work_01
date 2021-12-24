$(function(){

    $('body').on('mousewheel',function(e){
        var wheel = e.originalEvent.wheelDelta;
        
        var curr = $(window).scrollTop();
        // console.log(curr)

        if(curr > $(window).height()){

        if(wheel > 0){
            $('.logo_area').removeClass('up');
        } else {
            $('.logo_area').addClass('up');

        }  
        
        if(curr > 1){
            $('.logo_area').addClass('on');
        } else {
            $('.logo_area').removeClass('on');

        } 
    }
    });


    $(window).scroll(function(){

        curr = $(this).scrollTop();

    // 스크롤바가 맨 위를 찍을 때 메뉴 gnb 표출    
        if (curr < 1){
            $('.logo_area').removeClass('on');
        }
    });


    // $('.nav_area').hide();
    $('.logo_area .menu_all').click(function(e){
        e.preventDefault();
        $('.logo_area').toggleClass('on');
        $('.nav_area').toggleClass('on');
    });


    main = gsap.timeline({});

    main.fromTo(".sc_intro img",{
        scale:0,
    },{
        stagger:0.4,
        scale:1,
        duration:1.1,
    })

    main.to(".sc_intro",{
        y:-100+"%",
        duration:1.5,
        "filter":"blur(10px)",
    })

    main.fromTo(".sc_intro .bg_opacity",{
        opacity:0,
    },{
        opacity:0.8,
        duration:1.5,
    },'-=1')

    main.fromTo(".sc_main video",{
        scale:1.4,
    },{
        scale:1.2,
        duration:1,
    })

    main.to(".sc_main .over_txt span",{
        y:0,
        duration:1.2,
    })

    main.fromTo(".sc_main .shop_all",{
        opacity:0,
        y:100+'%',
    },{
        opacity:1,
        duration:1,
        y:0
    },'-=1')

    main.fromTo(".sc_main .btn_down",{
        opacity:0,
        y:100+'%',
    },{
        opacity:1,
        duration:1,
        y:0
    },'-=1')

    main.fromTo("header .logo_area",{
        opacity:0,
        y:-100+'%',
    },{
        opacity:1,
        duration:0.5,
        y:0
    },'-=1')


    $('.sc_main .btn_down').click(function(e){
        e.preventDefault();

        var offset = $('.sc_introduce').offset();

        $('html,body').animate({scrollTop:offset.top},1000);

    });


    gsap.to('.sc_introduce img',{
        scrollTrigger:{
            trigger:'.sc_introduce',
            start:'top 50%',
            end:'50% top',
            // markers:true,
            // toggleActions: 'restart none none resume',
        },
        opacity:1,
        stagger: 0.3,
        duration: 1,
    })

    gsap.to('.sc_introduce .over_txt span',{
        scrollTrigger:{
            trigger:'.sc_introduce',
            start:'top 50%',
            end:'50% top',
            // markers:true,
            // toggleActions: 'restart none none resume',
        },
        y:0,
        stagger: 0.5,
        duration: 1,
    })


    gsap.to('.recomm_main .txt_container',{
        scrollTrigger:{
            trigger:'.recomm_main',
            start:'top 30%',
            end:'bottom top',
            // markers:true,
            // toggleActions: 'restart none none resume',
        },
        opacity:1,
        duration: 1.5,
    })


    gsap.to('.sc_detail .content_img .item img',{
        scrollTrigger:{
            trigger:'.sc_detail',
            start:'top 30%',
            end:'bottom top',
            // markers:true,
            // toggleActions: 'restart none none resume',
        },
        opacity:1,
        y:0,
        duration: 1.5,
    })

    gsap.to('.sc_detail .content_img .item p',{
        scrollTrigger:{
            trigger:'.sc_detail',
            start:'top 30%',
            end:'bottom top',
            // markers:true,
            // toggleActions: 'restart none none resume',
        },
        opacity:1,
        y:0,
        duration: 1.5,
        delay: 0.9,
    })

    gsap.to(".sc_main video",{
        scrollTrigger:{
            trigger:".sc_main",
            start:"top 30%",
            end:"bottom top",
            // markers:true,
            scrub:1,
        },
        yPercent:-10,
        duration: 1,
    })

    gsap.to(".recomm_vis .bg",{
        scrollTrigger:{
            trigger:".recomm_vis",
            start:"-30% top",
            end:"bottom 20%",
            // markers:true,
            scrub:1,
        },
        yPercent:15,
    })


    gsap.to(".sc_detail .content_vis .bg",{
        scrollTrigger:{
            trigger:".sc_detail .content_vis",
            start:"top 10%",
            end:"bottom 30%",
            // markers:true,
            scrub:1,
        },
        yPercent:-10,
    })

    gsap.to(".sc_join_us .content .bg",{
        scrollTrigger:{
            trigger:".sc_join_us .content",
            start:"top 30%",
            end:"bottom 30%",
            // markers:true,
            scrub:1,
        },
        yPercent:-10,
    })


    
    var swiper = new Swiper(".lookbook_swiper", {
        spaceBetween: 15,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 800,
          disableOnInteraction: false,
        },
      });





    

})//지우지말것!!









