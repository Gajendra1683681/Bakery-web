const bars=document.querySelector('#bars');
const navbar=document.querySelector('nav ul');
const overlaycontiner=document.querySelector('.overlay-continer')
// const cross=document.querySelector('.cross')


bars.addEventListener(
    'click',
    function(){
        navbar.classList.add('open');
        overlaycontiner.classList.add('open-overlay-continer');
       
        

    }
)

overlaycontiner.addEventListener(
    'click',
    function(){
        navbar.classList.remove('open')
        overlaycontiner.classList.remove('open-overlay-continer')
        
    }

)

document.addEventListener(
    'scroll',
    function(e){
        
        if(window.scrollY > 48){
            document.body.classList.add('stick')
        }
        else{
            document.body.classList.remove('stick')
        }
        
    }
)



$('.autoplay').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
  autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



  // var content=document.querySelectorAll('.lover-pizza')
  // var pizza=document.querySelectorAll('.pizza')
  // var accordinbtn=document.querySelectorAll('.accordian')

  // pizza.forEach(
  //   function(button,index){
  //     accordinbtn.forEach(
  //       function(data,i){
  //         button.addEventListener(
  //           'click',
  //           function(){
  //             if(i==index){
  //               data.classList.toggle('accordian');
  //             }
  //             else{
  //               data.classList.remove('accordian');
  //             }
  //           }
  //         )
  //       }
  //     )
  //   }
  // )

  // pizza.forEach(
  //   function(button, index){
  //     button.addEventListener(
  //       'click',
  //       function(){
  //         content.forEach(
  //           function(d,i){
  //             if(i==index){
  //               d.classList.toggle('show')
  //             }
  //             else{
  //               d.classList.remove('show')
  //             }
  //           }
  //         )
  //       }
  //     )
  //   }
  // )