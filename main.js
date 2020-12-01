
//setup the images and testimonials
const pattern_1 = document.getElementById('first_pattern');
const pattern_2 = document.getElementById('second_pattern');
var i = 0;
var patterns = [];
//var time = 10000;
patterns[0] =  pattern_1.style.display = 'block';
patterns[1] = pattern_2.style.display = 'none';


//window.onload =  initSlider();

function initSlider(){
      if (i < patterns.length - 1)
    {

        patterns[0] =  pattern_1.style.display = 'none';
        patterns[1] = pattern_2.style.display = 'block';

        i++;
    }else{
    patterns[0] =  pattern_1.style.display = 'block';
    patterns[1] = pattern_2.style.display = 'none';
    i = 0;


    }  
}