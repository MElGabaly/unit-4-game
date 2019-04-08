
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


});
//////////

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
// //////////////////////////

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

