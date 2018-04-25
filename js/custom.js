//custom js
(function(){ //iife starts ****

var start = document.getElementById('begin');
var count = 0;
var countEl = document.getElementById("count");
var add = document.getElementById('plus');
var sub = document.getElementById('minus');
var btn = document.getElementsByClassName('btn-large');
var close = document.getElementsByClassName('modal-button2');
var home = document.getElementById('logo');
var trigger1 = document.getElementById('trigger1');
var trigger2 = document.getElementById('trigger2');
var trigger3 = document.getElementById('trigger3');
var trigger4 = document.getElementById('trigger4');
var vehicle1 = document.getElementById('vehicleOne');
var vehicle2 = document.getElementById('vehicleTwo');
var vehicle3 = document.getElementById('vehicleThree');
var vehicle4 = document.getElementById('vehicleFour');
var carA = document.getElementsByClassName('btn-large');
var carB = document.getElementsByClassName('btn-large');
var carC = document.getElementsByClassName('btn-large');
var carD = document.getElementsByClassName('btn-large');

var rdValue; 
var radioValues = [];
var radioValues2 =[];
var radioValues3 = [];
var radioValues4 = [];
var valu = [];
var fuelCost = [];
var hireCost = [];
var totalCost = [];

init();

//this function holds all the event listeners and is invoked
//above
function init(){ 
    sub.addEventListener('click', minus, false);
    add.addEventListener('click', plus, false);
    start.addEventListener('click', enter, false);
    close[0].addEventListener('click', startAgain, false);
    close[1].addEventListener('click', startAgain, false);
    close[2].addEventListener('click', startAgain, false);
    close[3].addEventListener('click', startAgain, false);
    home.addEventListener('click', startAgain, false);
    btn[2].addEventListener('click', prevDiv, false);
    btn[0].addEventListener('click', nextDiv, false);
    btn[4].addEventListener('click', prevDiv2, false);
    btn[1].addEventListener('click', nextDiv2, false);
    btn[5].addEventListener('click', prevDiv3, false);
    btn[3].addEventListener('click', nextDiv3, false);
    btn[3].addEventListener('click', init2, false);
    trigger1.addEventListener('click', fillModal1, false);
    trigger2.addEventListener('click', fillModal2, false);
    trigger3.addEventListener('click', fillModal3, false);
    trigger4.addEventListener('click', fillModal4, false);
    add.addEventListener('click', buttonClickable, false);
    btn[3].style.pointerEvents = 'none';
}
//this function invokes all of these functions
// they are invoked by oneevent listener
function init2(){ 
    getRadioValue();
    getRadioValue2();
    getRadioValue3();
    distances();
    distances2();
    distances3();
    distances4();
    carInit();
   
  
}
//the following eight functions control the user flow 
// they control the next functions on the form they also have the
//validation 
function enter(){
    document.getElementById('splash-page').style.display = 'none';
    document.getElementById('main-content').style.display = 'grid';
}


function nextDiv(){
  if($('input:radio:checked').length > 0){
    document.getElementById('formOne').style.display = 'none';
    document.getElementById('formTwo').style.display = 'block';
    $('.tooltip').tooltipster('close');
} else{
   $('.tooltip').tooltipster('open');
}
}

function prevDiv(){
    document.getElementById('formTwo').style.display = 'none';
    document.getElementById('formOne').style.display = 'block';
}

function nextDiv2(){
 if($('input:radio:checked').length > 1){
    document.getElementById('formTwo').style.display = 'none';
    document.getElementById('formThree').style.display = 'block';
    $('.tooltip2').tooltipster('close');
} else{
   $('.tooltip2').tooltipster('open');
}
}

function prevDiv2(){
    document.getElementById('formThree').style.display = 'none';
    document.getElementById('formTwo').style.display = 'block';
}

function buttonClickable(){
    btn[3].style.pointerEvents = 'auto';
}

function nextDiv3(){
  if($('.radios').is(':checked') && $('#count').val().length > 0){
    document.getElementById('formThree').style.display = 'none';
    document.getElementById('formFour').style.display = 'block';
}  
}

function prevDiv3(){
    document.getElementById('formFour').style.display = 'none';
    document.getElementById('formThree').style.display = 'block';
    radioValues.pop();
    radioValues2.pop();
    radioValues3.pop();
    radioValues4.pop();
    valu.pop();
    reset1();
    reset2();
    reset3();
    reset4();
}
//the following four functions reset the modal
// they are invoked in the prevDiv3 function 
function reset1(){
    vehicle1.style.opacity = '1';
    vehicle1.style.pointerEvents = 'auto';
    $('#vehicleOne').mouseover(function(){
      $('#vehicleOne').css('transform', 'scale(1.1');
    });
    $('#vehicleOne').mouseout(function(){
      $('#vehicleOne').css('transform', 'scale(1)');
    });
    $('#rental1').empty();
    $('#distance1').empty();
    $('#fuel1').empty();
    $('#total1').empty();
}

function reset2(){
    vehicle2.style.opacity = '1';
    vehicle2.style.pointerEvents = 'auto';
    $('#vehicleTwo').mouseover(function(){
      $('#vehicleTwo').css('transform', 'scale(1.1');
    });
    $('#vehicleTwo').mouseout(function(){
      $('#vehicleTwo').css('transform', 'scale(1)');
    });

    $('#rental2').empty();
    $('#distance2').empty();
    $('#fuel2').empty();
    $('#total2').empty();
}

function reset3(){
    vehicle3.style.opacity = '1';
    vehicle3.style.pointerEvents = 'auto';
    $('#vehicleThree').mouseover(function(){
      $('#vehicleThree').css('transform', 'scale(1.1');
    });
    $('#vehicleThree').mouseout(function(){
      $('#vehicleThree').css('transform', 'scale(1)');
    });
    $('#rental3').empty();
    $('#distance3').empty();
    $('#fuel3').empty();
    $('#total3').empty();
}

function reset4(){
    vehicle4.style.opacity = '1';
    vehicle4.style.pointerEvents = 'auto';
    $('#vehicleFour').mouseover(function(){
      $('#vehicleFour').css('transform', 'scale(1.1');
    });
    $('#vehicleFour').mouseout(function(){
      $('#vehicleFour').css('transform', 'scale(1)');
    });
    $('#rental4').empty();
    $('#distance4').empty();
    $('#fuel4').empty();
    $('#total4').empty();
}

//these two functions controll the plus and minus
//on the form for number of days traveling
function plus(){
   if (count < 15) {
    count++;
    countEl.value = count;
  }
}
function minus(){
  if (count > 0) {
    count--;
    countEl.value = count;
  }  
}

//the next three functions get the data from the radio buttons 
// in the form, the value is then put into an empty array
function getRadioValue() {
    // group1 radio values
    var radios = theForm.elements.group1;

    for (var i=0; i<radios.length; i++) {
        var someRadio = radios[i];
        if (someRadio.checked) {
            rdValue = someRadio.value;
            break;
        }
        else rdValue = 'noRadioChecked';
    }
    if (rdValue == 'Auckland') {
      radioValues.push(rdValue);
    } else if( rdValue == 'Wellington'){
       radioValues.push(rdValue);
    } else if ( rdValue == 'New Plymouth'){
       radioValues.push(rdValue);
    } else if ( rdValue == 'Napier'){
       radioValues.push(rdValue);
    } else {
      console.log('break');
    }
    }


function getRadioValue2() {
    // group2 radio values
    var radios = theForm.elements.group2;
   
    for (var i=0; i<radios.length; i++) {
        var someRadio = radios[i];
        if (someRadio.checked) {
            rdValue = someRadio.value;
            break;
        }
        else rdValue = 'noRadioChecked';
    }
    if (rdValue == 'waitomo') {
      radioValues2.push(rdValue);
    } else if( rdValue == 'taupo'){
       radioValues2.push(rdValue);
    } else if ( rdValue == 'rotorua'){
       radioValues2.push(rdValue);
    } else if ( rdValue == 'matamata'){
       radioValues2.push(rdValue);
    } else if ( rdValue == 'tauranga'){
       radioValues2.push(rdValue);
    }else if ( rdValue == 'castlepoint'){
       radioValues2.push(rdValue);
    } else {
      console.log('break');
    }
}

function getRadioValue3() {
    // group3 radio values
    var radios = theForm.elements.group3;

    for (var i=0; i<radios.length; i++) {
      var someRadio = radios[i];
      if (someRadio.checked) {
          rdValue = someRadio.value;
          break;
      }
      else rdValue = 'noRadioChecked';
    }

    if (rdValue == '1') {
    radioValues3.push(parseInt(rdValue));
    } else if( rdValue == '2'){
     radioValues3.push(parseInt(rdValue));
    } else if ( rdValue == '3'){
     radioValues3.push(parseInt(rdValue));
    } else if ( rdValue == '4'){
     radioValues3.push(parseInt(rdValue));
    } else if ( rdValue == '5'){
     radioValues3.push(parseInt(rdValue));
    }else if ( rdValue == '6'){
     radioValues3.push(parseInt(rdValue));
    }else{
      console.log('break');
    }

    if (countEl.value > 0){
    radioValues4.push( parseInt(countEl.value));
    }else{
      console.log('break');
    }
}

//gets the distances from auckalnd to the seconds location
// and puts it into array valu
function distances(){
    if(radioValues[0] === 'Auckland' && radioValues2[0] === 'waitomo') {
     valu.push(dataArray2[0].waitomo);
    } else if( radioValues[0] === 'Auckland' && radioValues2[0] === 'rotorua'){
       valu.push(dataArray2[0].rotorua);
    }
    else if( radioValues[0] === 'Auckland' && radioValues2[0] === 'tauranga'){
       valu.push(dataArray2[0].tauranga);
    }
    else if( radioValues[0] === 'Auckland' && radioValues2[0] === 'taupo'){
       valu.push(dataArray2[0].taupo);
    }
    else if( radioValues[0] === 'Auckland' && radioValues2[0] === 'matamata'){
       valu.push(dataArray2[0].matamata);
    }
    else if( radioValues[0] === 'Auckland' && radioValues2[0] === 'castlepoint'){
       valu.push(dataArray2[0].castlepoint);
    }
}
//gets the distances from wellington to the seconds location
// and puts it into array valu
function distances2(){
    if( radioValues[0] === 'Wellington' && radioValues2[0] === 'waitomo'){
       valu.push(dataArray2[1].waitomo);
    } else if( radioValues[0] === 'Wellington' && radioValues2[0] === 'rotorua'){
       valu.push(dataArray2[1].rotorua);
    }
    else if( radioValues[0] === 'Wellington' && radioValues2[0] === 'tauranga'){
       valu.push(dataArray2[1].tauranga);
    }
    else if( radioValues[0] === 'Wellington' && radioValues2[0] === 'taupo'){
       valu.push(dataArray2[1].taupo);
    }
    else if( radioValues[0] === 'Wellington' && radioValues2[0] === 'matamata'){
       valu.push(dataArray2[1].matamata);
    }
    else if( radioValues[0] === 'Wellington' && radioValues2[0] === 'castlepoint'){
       valu.push(dataArray2[1].castlepoint);
    }
}
//gets the distances from new plymouth to the seconds location
// and puts it into array valu
 function distances3(){
    if(radioValues[0] === 'New Plymouth' && radioValues2[0] === 'waitomo'){
     valu.push(dataArray2[2].waitomo);

    } else if( radioValues[0] === 'New Plymouth' && radioValues2[0] === 'rotorua'){
       valu.push(dataArray2[2].rotorua);
    }
    else if( radioValues[0] === 'New Plymouth' && radioValues2[0] === 'tauranga'){
       valu.push(dataArray2[2].tauranga);
    }
    else if( radioValues[0] === 'New Plymouth' && radioValues2[0] === 'taupo'){
       valu.push(dataArray2[2].taupo);
    }
    else if( radioValues[0] === 'New Plymouth' && radioValues2[0] === 'matamata'){
       valu.push(dataArray2[2].matamata);
    }
    else if( radioValues[0] === 'New Plymouth' && radioValues2[0] === 'castlepoint'){
       valu.push(dataArray2[2].castlepoint);
  
    }
}
//gets the distances from naiper to the seconds location
// and puts it into array valu
 function distances4(){
   if( radioValues[0] == 'Napier' && radioValues2[0] == 'waitomo'){
    valu.push(dataArray2[3].waitomo);
   }else if( radioValues[0] === 'Napier' && radioValues2[0] === 'rotorua'){
    valu.push(dataArray2[3].rotorua);
    }
    else if( radioValues[0] === 'Napier' && radioValues2[0] === 'tauranga'){
       valu.push(dataArray2[3].tauranga);
    }
    else if( radioValues[0] === 'Napier' && radioValues2[0] === 'taupo'){
       valu.push(dataArray2[3].taupo);
    }
    else if( radioValues[0] === 'Napier' && radioValues2[0] === 'matamata'){
       valu.push(dataArray2[3].matamata);
    }
    else if( radioValues[0] === 'Napier' && radioValues2[0] === 'castlepoint'){
       valu.push(dataArray2[3].castlepoint);
    }
}
//checks for values of passengers and travel 
//days and if valid shows the specific vehicle
function showCar(vehicle, minA, maxA, minB, maxB){
   if((radioValues3[0] >= minA && radioValues3[0]  <= maxA) &&  (radioValues4[0] >= minB && radioValues4[0]  <= maxB)){
      vehicle.style.display = 'block'; 
   }else{
    vehicle.style.opacity = '0.4';
    vehicle.style.transform = 'none';
    vehicle.style.pointerEvents = 'none';
  }
}

function carInit(){
    carA.onclick = showCar( vehicle1, 1, 1, 1, 5);
    carB.onclick = showCar( vehicle2, 1, 2, 1, 10);
    carC.onclick = showCar( vehicle3, 1, 5, 3, 10);
    carD.onclick = showCar( vehicle4, 2, 6, 2, 15);
}

//the following four functions put the data into each modal
//it also emptys it so they are no double ups of data
function fillModal1(){
    $('#rental1').empty();
    $('#distance1').empty();
    $('#fuel1').empty();
    $('#total1').empty();
    fuelCost.pop();
    hireCost.pop();
    totalCost.pop();
    fuelCost.push(Math.round(valu[0] / 100 * dataArray[0].fuel * 2.10));
    hireCost.push(radioValues4[0] * dataArray[0].hire);
    totalCost.push( fuelCost[0] + hireCost[0]);
    $('#distance1').append('Distance:' + ' '  + valu +'km');
    $('#rental1').append('Rental Price:' + ' '+ '$' + hireCost);
    $('#fuel1').append('Fuel Cost:' + ' ' + '$' + fuelCost);
    $('#total1').append('Total Cost:' + ' ' + '$' + totalCost);
}

function fillModal2(){
    $('#rental2').empty();
    $('#distance2').empty();
    $('#fuel2').empty();
    $('#total2').empty();
    fuelCost.pop();
    hireCost.pop();
    totalCost.pop();
    fuelCost.push(Math.round(valu[0] / 100 * dataArray[1].fuel * 2.10));
    hireCost.push(radioValues4[0] * dataArray[1].hire);
    totalCost.push( fuelCost[0] + hireCost[0]);
    $('#distance2').append('Distance:' + ' '  + valu +'km');
    $('#rental2').append('Rental Price:' + ' '+ '$' + hireCost);
    $('#fuel2').append('Fuel Cost:' + ' ' + '$' + fuelCost);
    $('#total2').append('Total Cost:' + ' ' + '$' + totalCost);

}

function fillModal3(){
    $('#rental3').empty();
    $('#distance3').empty();
    $('#fuel3').empty();
    $('#total3').empty();
    fuelCost.pop();
    hireCost.pop();
    totalCost.pop();
    fuelCost.push(Math.round(valu[0] / 100 * dataArray[2].fuel * 2.10));
    hireCost.push(radioValues4[0] * dataArray[2].hire);
    totalCost.push( fuelCost[0] + hireCost[0]);
    $('#distance3').append('Distance:' + ' '  + valu +'km');
    $('#rental3').append('Rental Price:' + ' '+ '$' + hireCost);
    $('#fuel3').append('Fuel Cost:' + ' ' + '$' + fuelCost);
    $('#total3').append('Total Cost:' + ' ' + '$' + totalCost);
}

function fillModal4(){
    $('#rental4').empty();
    $('#distance4').empty();
    $('#fuel4').empty();
    $('#total4').empty();
    fuelCost.pop();
    hireCost.pop();
    totalCost.pop();
    fuelCost.push(Math.round(valu[0] / 100 * dataArray[3].fuel * 2.10));
    hireCost.push(radioValues4[0] * dataArray[3].hire);
    totalCost.push( fuelCost[0] + hireCost[0]);
    $('#distance4').append('Distance:' + ' '  + valu +'km');
    $('#rental4').append('Rental Price:' + ' '+ '$' + hireCost);
    $('#fuel4').append('Fuel Cost:' + ' ' + '$' + fuelCost);
    $('#total4').append('Total Cost:' + ' ' + '$' + totalCost);
}

function startAgain(){
  setTimeout(function(){
  window.location.reload();
},500);

}

})();//iife ends ******