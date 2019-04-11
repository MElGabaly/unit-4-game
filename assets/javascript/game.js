
$(document).ready(function () {
    $('#catwomanC').hide()
    $('#spidermanC').hide()
    $('#supermanC').hide()
    $('#cyclopsC').hide()
    //////
    $('#catwomanA').hide()
    $('#spidermanA').hide()
    $('#supermanA').hide()
    $('#cyclopsA').hide()
    /////
    $('#catwomanD').hide()
    $('#spidermanD').hide()
    $('#supermanD').hide()
    $('#cyclopsD').hide()
    /////
    $('.restart').hide()
});
//
var catwomanHC = "";
var spidermanHC = "";
var supermanHC = "";
var cyclopsHC = "";
// 
var catwomanHD = "";
var spidermanHD = "";
var supermanHD = "";
var cyclopsHD = "";
//
var catwomanCA = 0;
var spidermanCA = 0;
var supermanCA = 0;
var cyclopsCA = 0;
var newcatwomanCA = 0;
var newspidermanCA = 0;
var newsupermanCA = 0;
var newcyclopsCA = 0;
//
var catwomanEAttack = 0;
var spidermanEAttack = 0;
var supermanEAttack = 0;
var cyclopsEAttack = 0;
//



function catwoman() {
    $('.figure-row').hide();
    $('#catwomanC').show()
    $('#spidermanA').show()
    $('#supermanA').show()
    $('#cyclopsA').show()
}

function spiderman() {
    $('.figure-row').hide();
    $('#catwomanA').show()
    $('#spidermanC').show()
    $('#supermanA').show()
    $('#cyclopsA').show()
}

function superman() {
    $('.figure-row').hide();
    $('#catwomanA').show()
    $('#spidermanA').show()
    $('#supermanC').show()
    $('#cyclopsA').show()
}

function cyclops() {
    $('.figure-row').hide();
    $('#catwomanA').show()
    $('#spidermanA').show()
    $('#supermanA').show()
    $('#cyclopsC').show()
}
// 

function catwomanAA() {
    $('#catwomanA').hide()
    $('#catwomanD').show()
}

function spidermanAA() {
    $('#spidermanA').hide()
    $('#spidermanD').show()
}

function supermanAA() {
    $('#supermanA').hide()
    $('#supermanD').show()
}

function cyclopsAA() {
    $('#cyclopsA').hide()
    $('#cyclopsD').show()
}

function restart() {
    location.reload();
}

// Attack Button
function attack() {
    // Catwoman Option 
    if ($('#catwomanC:visible').length !== 0) {
        catwomanHC = $('#catwomanHealthC').text();
        catwomanCA = $('#catwomanCCA').val();
        newcatwomanCA = Number(catwomanCA) + newcatwomanCA
        //VS Spiderman
        if ($('#spidermanD:visible').length !== 0) {
            // Get the Health
            spidermanHD = $('#spidermanHealthD').text();
            catwomanEAttack = $('#spidermanDA').val();
            // Attack Enemie
            spidermanHD = spidermanHD - newcatwomanCA;
            $('#spidermanHealthD').html(spidermanHD)

            if (spidermanHD <= 0) {
                $('#spidermanD').hide();
                $('#gameProgress').text("Spiderman is Defeted Please choose another Enime");
                if (($('#spidermanA:visible').length === 0) && ($('#supermanA:visible').length === 0) && ($('#cyclopsA:visible').length === 0)) {
                    $('#gameProgress').text("You bet all the dark heros!! YOU WON");
                }
            }

            // Attack Charecter
            catwomanHC = catwomanHC - catwomanEAttack;
            $('#catwomanHealthC').html(catwomanHC)

            if (catwomanHC <= 0) {
                $('#gameProgress').html("You Lost, dark heros will take over the WORLD!! GameOver");
                $('.restart').show();
            }
            else if  (spidermanHD > 0 && catwomanHC > 0){
                $('#gameProgress').text("Spiderman attacked you by " + catwomanEAttack + " and you attacked him by " + newcatwomanCA)
            }
        }
        //VS Superman
        else if ($('#supermanD:visible').length !== 0) {
            //Get Health
            supermanHD = $('#supermanHealthD').text();
            catwomanEAttack = $('#supermanDA').val();
            //
            // Attack Enemie
            supermanHD = supermanHD - newcatwomanCA;
            $('#supermanHealthD').html(supermanHD)

            if (supermanHD <= 0) {
                $('#supermanD').hide()
                $('#gameProgress').text("Superman is Defeted Please choose another Enime");
                if (($('#spidermanA:visible').length === 0) && ($('#supermanA:visible').length === 0) && ($('#cyclopsA:visible').length === 0)) {
                    $('#gameProgress').text("You bet all the dark heros!! YOU WON");
                }
            }
            // Attack Charecter
            catwomanHC = catwomanHC - catwomanEAttack;
            $('#catwomanHealthC').html(catwomanHC)

            if (catwomanHC <= 0) {
                $('#gameProgress').text("You Lost, dark heros will take over the WORLD!! GameOver");
                $('.restart').show();
            }
            else if  (supermanHD > 0 && catwomanHC > 0) {
                $('#gameProgress').text("Superman attacked you by " + catwomanEAttack + " and you attacked him by " + newcatwomanCA)
            }
        }
        // VS Cyclops
        else if ($('#cyclopsD:visible').length !== 0) {
            cyclopsHD = $('#cyclopsHealthD').text();
            catwomanEAttack = $('#cyclopsDA').val();

            // Attack Enemie
            cyclopsHD = cyclopsHD - newcatwomanCA;
            $('#cyclopsHealthD').html(cyclopsHD)

            if (cyclopsHD <= 0) {
                $('#cyclopsD').hide()
                $('#gameProgress').text("Cyclops is Defeted Please choose another Enime");
                if (($('#spidermanA:visible').length === 0) && ($('#supermanA:visible').length === 0) && ($('#cyclopsA:visible').length === 0)) {
                    $('#gameProgress').text("You bet all the dark heros!! YOU WON");
                }
            }
            // Attack Charecter
            catwomanHC = catwomanHC - catwomanEAttack;
            $('#catwomanHealthC').html(catwomanHC)

            if (catwomanHC <= 0) {
                $('#gameProgress').text("You Lost, dark heros will take over the WORLD!! GameOver");
                $('.restart').show();
            }
            else if  (cyclopsHD > 0 && catwomanHC > 0) {
                $('#gameProgress').text("Cyclops attacked you by " + catwomanEAttack + " and you attacked him by " + newcatwomanCA)
            }
        }
    }
    // Spiderman Option 
    else if ($('#spidermanC:visible').length !== 0) {
        spidermanHC = $('#spidermanHealthC').text();
        spidermanCA = $('#spidermanCCA').val();
        newspidermanCA = Number(spidermanCA) + newspidermanCA
        // VS Catwoman
        if ($('#catwomanD:visible').length !== 0) {
            //Get The Health
            catwomanHD = $('#catwomanHealthD').text();
            spidermanEAttack = $('#catwomanDA').val();
            // Attack Enemie
            catwomanHD = catwomanHD - newspidermanCA;
            $('#catwomanHealthD').html(catwomanHD)

            if (catwomanHD <= 0) {
                $('#catwomanD').hide()
                if (($('#catwomanA:visible').length === 0) && ($('#supermanA:visible').length === 0) && ($('#cyclopsA:visible').length === 0)) {
                    $('#gameProgress').html("You bet all the dark heros!! YOU WON");
                }
                else {
                    $('#gameProgress').html("catwoman is Defeted Please choose another Enime");
                }
            }
            // Attack Charecter
            spidermanHC = spidermanHC - spidermanEAttack;
            $('#spidermanHealthC').html(spidermanHC)

            if (spidermanHC <= 0) {
                $('#gameProgress').html("You Lost, dark heros will take over the WORLD!! GameOver");
                $('.restart').show();
            }
            else if  (spidermanHC > 0 && catwomanHD > 0){
                $('#gameProgress').html("Catwoman attacked you by " + spidermanEAttack + " and you attacked her by " + newspidermanCA)
            }
        }
        // VS Superman
        else if ($('#supermanD:visible').length !== 0) {
            // Get the Health
            supermanHD = $('#supermanHealthD').text();
            spidermanEAttack = $('#supermanDA').val();
            // Attack Enemie
            supermanHD = supermanHD - newspidermanCA;
            $('#supermanHealthD').html(supermanHD)

            if (supermanHD <= 0) {
                $('#supermanD').hide()
                if (($('#catwomanA:visible').length === 0) && ($('#supermanA:visible').length === 0) && ($('#cyclopsA:visible').length === 0)) {
                    $('#gameProgress').html("You bet all the dark heros!! YOU WON");
                }
                else {
                    $('#gameProgress').html("Superman is Defeted Please choose another Enime");
                }
            }
            // Attack Charecter
            spidermanHC = spidermanHC - spidermanEAttack;
            $('#spidermanHealthC').html(spidermanHC)

            if (spidermanHC <= 0) {
                $('#gameProgress').html("You Lost, dark heros will take over the WORLD!! GameOver");
                $('.restart').show();
            }
            else if  (spidermanHC > 0 && supermanHD > 0){
                $('#gameProgress').html("Superman attacked you by " + spidermanEAttack + " and you attacked him by " + newspidermanCA)
            }
        }
        //VS Cyclops
        else if ($('#cyclopsD:visible').length !== 0) {
            cyclopsHD = $('#cyclopsHealthD').text();
            spidermanEAttack = $('#cyclopsmanDA').val();
            // Attack Enemie
            cyclopsHD = cyclopsHD - newspidermanCA;
            $('#cyclopsHealthD').html(cyclopsHD)

            if (cyclopsHD <= 0) {
                $('#cyclopsD').hide()
                if (($('#catwomanA:visible').length === 0) && ($('#supermanA:visible').length === 0) && ($('#cyclopsA:visible').length === 0)) {
                    $('#gameProgress').html("You bet all the dark heros!! YOU WON");
                }
                else {
                    $('#gameProgress').html("Cyclops is Defeted Please choose another Enime");
                }
            }
            // Attack Charecter
            spidermanHC = spidermanHC - spidermanEAttack;
            $('#spidermanHealthC').html(spidermanHC)

            if (spidermanHC <= 0) {
                $('#gameProgress').html("You Lost, dark heros will take over the WORLD!! GameOver");
                $('.restart').show();
            }
            else if  (spidermanHC > 0 && cyclopsHD > 0){
                $('#gameProgress').html("Cyclops attacked you by " + spidermanEAttack + " and you attacked him by " + newspidermanCA)
            }
        }
    }
    // Superman option
    else if ($('#supermanC:visible').length !== 0) {
        supermanHC = $('#supermanHealthC').text();
        supermanCA = $('#supermanCCA').val();
        newsupermanCA = Number(supermanCA) + newsupermanCA
        //VS Catwoman
        if ($('#catwomanD:visible').length !== 0) {
            catwomanHD = $('#catwomanHealthD').text();
            supermanEAttack = $('#catwomanDA').val();
            // Attack Enemie
            catwomanHD = catwomanHD - newsupermanCA;
            $('#catwomanHealthD').html(catwomanHD)

            if (catwomanHD <= 0) {
                $('#catwomanD').hide()
                if (($('#catwomanA:visible').length === 0) && ($('#spidermanA:visible').length === 0) && ($('#cyclopsA:visible').length === 0)) {
                    $('#gameProgress').html("You bet all the dark heros!! YOU WON");
                }
                else {
                    $('#gameProgress').html("catwoman is Defeted Please choose another Enime");
                }
            }
            // Attack Charecter
            supermanHC = supermanHC - supermanEAttack;
            $('#supermanHealthC').html(supermanmanHC)

            if (supermanHC <= 0) {
                $('#gameProgress').html("You Lost, dark heros will take over the WORLD!! GameOver");
                $('.restart').show();
            }
            else if  (supermanHC > 0 && catwomanHD > 0){
                $('#gameProgress').html("Catwoman attacked you by " + supermanEAttack + " and you attacked her by " + newsupermanCA)
            }
        }
        // VS Spiderman
        else if ($('#sipermanD:visible').length !== 0) {
            // Get the Health
            spidermanHD = $('#spidermanHealthD').text();
            supermanEAttack = $('#spidermanDA').val();
            // Attack Enemie
            spidermanHD = spidermanHD - newsupermanCA;
            $('#spidermanHealthD').html(spidermanHD)

            if (spidermanHD <= 0) {
                $('#spidermanD').hide()
                if (($('#spidermanA:visible').length === 0) && ($('#catwomanA:visible').length === 0) && ($('#cyclopsA:visible').length === 0)) {
                    $('#gameProgress').html("You bet all the dark heros!! YOU WON");
                }
                else {
                    $('#gameProgress').html("Spiderman is Defeted Please choose another Enime");
                }
            }
            // Attack Charecter
            supermanHC = supermanHC - supermanEAttack;
            $('#supermanHealthC').html(supermanmanHC)

            if (supermanHC <= 0) {
                $('#gameProgress').html("You Lost, dark heros will take over the WORLD!! GameOver");
                $('.restart').show();
            }
            else if  (supermanHC > 0 && spidermanHD > 0){
                $('#gameProgress').html("Spiderman attacked you by " + supermanEAttack + " and you attacked him by " + newsupermanCA)
            }
        }
        // VS Cyclops
        else if ($('#cyclopsD:visible').length !== 0) {
            // Get the Health
            cyclopsHD = $('#cyclopsHealthD').text();
            supermanEAttack = $('#cyclopsDA').val();
            // Attack Enemie
            cyclopsHD = cyclopsHD - newsupermanCA;
            $('#cyclopsHealthD').html(cyclopsHD)

            if (cyclopsHD <= 0) {
                $('#cyclopsD').hide()
                if (($('#spidermanA:visible').length === 0) && ($('#catwomanA:visible').length === 0) && ($('#cyclopsA:visible').length === 0)) {
                    $('#gameProgress').html("You bet all the dark heros!! YOU WON");
                }
                else {
                    $('#gameProgress').html("Cyclops is Defeted Please choose another Enime");
                }
            }
            // Attack Charecter
            supermanHC = supermanHC - supermanEAttack;
            $('#supermanHealthC').html(supermanmanHC)

            if (supermanHC <= 0) {
                $('#gameProgress').html("You Lost, dark heros will take over the WORLD!! GameOver");
                $('.restart').show();
            }
            else if  (supermanHC > 0 && cyclopsHD > 0){
                $('#gameProgress').html("Cyclops attacked you by " + supermanEAttack + " and you attacked him by " + newsupermanCA)
            }
        }
    }
    // Cyclops Option
    else if ($('#cyclopsC:visible').length !== 0) {
        cyclopsHC = $('#cyclopsHealthC').text();
        cyclopsCA = $('#cyclopsCCA').val();
        newcyclopsCA = Number(cyclopsCA) + newcyclopsCA
        // VS Catwoman
        if ($('#catwomanD:visible').length !== 0) {
            // Get the Health
            catwomanHD = $('#catwomanHealthD').text();
            cyclopsEAttack = $('#catwomanDA').val();
            // Attack Enemie
            catwomanHD = catwomanHD - newcyclopsCA;
            $('#catwomanHealthD').html(catwomanHD)

            if (catwomanHD <= 0) {
                $('#catwomanD').hide()
                if (($('#catwomanA:visible').length === 0) && ($('#spidermanA:visible').length === 0) && ($('#supermanA:visible').length === 0)) {
                    $('#gameProgress').html("You bet all the dark heros!! YOU WON");
                }
                else {
                    $('#gameProgress').html("catwoman is Defeted Please choose another Enime");
                }
            }
            // Attack Charecter
            cyclopsHC = cyclopsHC - cyclopsEAttack;
            $('#cyclopsHealthC').html(cyclopsHC)

            if (cyclopsHC <= 0) {
                $('#gameProgress').html("You Lost, dark heros will take over the WORLD!! GameOver");
                $('.restart').show();
            }
            else if  (cyclopsHC > 0 && catwomanHD > 0){
                $('#gameProgress').html("Catwoman attacked you by " + cyclopsEAttack + " and you attacked her by " + newcyclopsCA)
            }
        }
        // VS Spiderman
        else if ($('#spidermanD:visible').length !== 0) {
            // Get Health
            spidermanHD = $('#spidermanHealthD').text();
            cyclopsEAttack = $('#spidermanDA').val();
            // Attack Enemie
            spidermanHD = spidermanHD - newcyclopsCA;
            $('#spidermanHealthD').html(spidermanHD)

            if (spidermanHD <= 0) {
                $('#spidermanD').hide()
                if (($('#catwomanA:visible').length === 0) && ($('#spidermanA:visible').length === 0) && ($('#supermanA:visible').length === 0)) {
                    $('#gameProgress').html("You bet all the dark heros!! YOU WON");
                }
                else {
                    $('#gameProgress').html("Spiderman is Defeted Please choose another Enime");
                }
            }
            // Attack Charecter
            cyclopsHC = cyclopsHC - cyclopsEAttack;
            $('#cyclopsHealthC').html(cyclopsHC)

            if (cyclopsHC <= 0) {
                $('#gameProgress').html("You Lost, dark heros will take over the WORLD!! GameOver");
                $('.restart').show();
            }
            else if  (cyclopsHC > 0 && spidermanHD > 0){
                $('#gameProgress').html("Spiderman attacked you by " + cyclopsEAttack + " and you attacked him by " + newcyclopsCA)
            }
        }
        // VS Superman
        else if ($('#supermanD:visible').length !== 0) {
            // Get Health
            supermanHD = $('#supermanHealthD').text();
            cyclopsEAttack = $('#spidermanDA').val();
            // Attack Enemie
            supermanHD = supermanHD - newcyclopsCA;
            $('#supermanmanHealthD').html(supermanHD)

            if (supermanHD <= 0) {
                $('#supermanD').hide()
                if (($('#catwomanA:visible').length === 0) && ($('#spidermanA:visible').length === 0) && ($('#supermanA:visible').length === 0)) {
                    $('#gameProgress').html("You bet all the dark heros!! YOU WON");
                }
                else {
                    $('#gameProgress').html("Superman is Defeted Please choose another Enime");
                }
            }
            // Attack Charecter
            cyclopsHC = cyclopsHC - cyclopsEAttack;
            $('#cyclopsHealthC').html(cyclopsHC)

            if (cyclopsHC <= 0) {
                $('#gameProgress').html("You Lost, dark heros will take over the WORLD!! GameOver");
                $('.restart').show();
            }
            else if  (cyclopsHC > 0 && supermanHD > 0){
                $('#gameProgress').html("Superman attacked you by " + cyclopsEAttack + " and you attacked him by " + newcyclopsCA)
            }
        }
    }


};

