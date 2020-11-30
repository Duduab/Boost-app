$(document).ready(function () {
    $('#l_name').on('keyup', function() {
        document.getElementById('phone-input').style.display = "block";
    });
    $('#phone').on('keyup', function() {
        var st = document.getElementById('phone').value[0];
        var len = document.getElementById('phone').value;
        if(st == 0 && (len.length == 10 || len.length == 9) ) {
            document.getElementById('isFalseNumber').style.visibility = "hidden";
            document.getElementById('isCorrectNumber').style.visibility = "visible";
            document.getElementById('verify-button').style.display = "block";
        }
    });
  });
  var count = 0;
  function verify() {
    var verifyInput = document.getElementById('ver').value;
    if(verifyInput.length == 4 && (verifyInput > 999 || verifyInput < 10000)) {
        document.getElementById('verify-button').style.visibility = "hidden";
        document.getElementById('verify-code').style.visibility = "visible";
        window.setTimeout(function() {
            document.getElementById('verify-code').style.visibility = "hidden";
            document.getElementById('isCorrectNumber').style.visibility = "hidden";
            document.getElementById('isCorrectCode').style.visibility = "visible";
            document.getElementById('details-area').style.visibility = "visible";
        }, 3000);
    }
  
    document.getElementById('verification-area').style.visibility = "visible";
 
}

function changeToLtr() {
    document.getElementById('my-form').style.direction = "ltr";
}

function changeToRtl() {
    document.getElementById('my-form').style.direction = "rtl";
}


