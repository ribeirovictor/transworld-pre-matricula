




$(document).ready(function() {

    $('#nome').keyup(function() {
        if ($('#nome').val().length <= 3) {
            $('#nome').css('border', '2px solid #E17474')
            $('#nome').addClass('valid')
        } else {
            $('#nome').css('border', '2px solid #8CAC0F')
            $('#nome').removeClass('valid')
        }
    })
    $('#email').keyup(function() {
        if ($(this).val().length <= 3) {
            $(this).css('border', '2px solid #E17474')
            $(this).addClass('valid')
        } else {
            $(this).css('border', '2px solid #8CAC0F')
            $(this).removeClass('valid')
        }
    })
    $('#cidade').keyup(function() {
        if ($(this).val().length <= 3) {
            $(this).css('border', '2px solid #E17474')
            $(this).addClass('valid')
        } else {
            $(this).css('border', '2px solid #8CAC0F')
            $(this).removeClass('valid')
        }
    })
    $('#bairro').keyup(function() {
        if ($(this).val().length <= 3) {
            $(this).css('border', '2px solid #E17474')
            $(this).addClass('valid')
        } else {
            $(this).css('border', '2px solid #8CAC0F')
            $(this).removeClass('valid')
        }
    })
    $('#rua').keyup(function() {
        if ($(this).val().length <= 3) {
            $(this).css('border', '2px solid #E17474')
            $(this).addClass('valid')
        } else {
            $(this).css('border', '2px solid #8CAC0F')
            $(this).removeClass('valid')
        }
    })
    $('#numero').keyup(function() {
        if ($(this).val().length <= 0) {
            $(this).css('border', '2px solid #E17474')
            $(this).addClass('valid')
        } else {
            $(this).css('border', '2px solid #8CAC0F')
            $(this).removeClass('valid')
        }
    })
    $('#telefone').keyup(function() {
        if ($(this).val().length <= 3) {
            $(this).css('border', '2px solid #E17474')
            $(this).addClass('valid')
        } else {
            $(this).css('border', '2px solid #8CAC0F')
            $(this).removeClass('valid')
        }
    })

    var inputList = document.getElementsByTagName("input");
    if(inputList[0].classList == "valid" && inputList[1].classList == "valid" && inputList[2].classList == "valid" && inputList[3].classList == "valid" && inputList[4].classList == "valid" && inputList[5].classList == "valid" && inputList[7].classList == "valid"){
        $("#btn").prop('disabled', false);
    } else $("#btn").prop('disabled', true);
})




// function validation(){
//     let nome = getElementByID('nome')
//     //Dados escritos normais do form
//     if(!nome.target.value){
//         alert("Por favor, preencha os dados corretamentes.");
//         nome.focus();
//         return false;
//     }
//     //Email
//     if(frm.email.value.indexOf("@") == -1 ||
//       frm.email.valueOf.indexOf(".") == -1 ||
//       frm.email.value == "" ||
//       frm.email.value == null){
//           alert("Por favor, indique um email válido");
//           frm.nome.focus();
//           return false;
//       }
//     var next = true;
// }

// if(next){
    
// }