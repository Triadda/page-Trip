var modalButton = document.getElementById('modalButton');
var modalWindow = document.getElementById('modalWindow');
var elementClose = document.getElementById('elementClose');
modalButton.onclick = function () {
    modalWindow.style.display = 'block';
}
elementClose.onclick = function () {
    modalWindow.style.display = 'none';
}

var popupElementName = document.getElementById('popupElementName');
var popupElementEmail = document.getElementById('popupElementEmail');
var popupElementTelephone = document.getElementById('popupElementTelephone');
var popupElementPlaceholder = document.getElementById('popupElementPlaceholder');
var popupElementsButton = document.getElementById('popupElementsButton');

popupElementsButton.onclick = function() {
    if (!popupElementName.value) {
        alert('Ошибка валидации')
    } else if (!popupElementEmail.value) {
        alert('Ошибка валидации')
    } else if (!popupElementTelephone.value) {
        alert('Ошибка валидации')
    } else if (!popupElementPlaceholder.value) {
        alert('Ошибка валидации')
    } else { alert('Успешное отправление!');
    }
};

$('#button1').click(function(){
    $('html').animate( {scrollTop: $('#modalButton').offset().top}, 1000, null, function () {
            $('#cookiesContainer').show() 
    });
});

$('#cookiesElementButton').click(function() {
    $('#cookiesContainer').hide(500);
 });

$('#cookiesElementClose').click(function() {
    $('#cookiesContainer').hide(500);
})