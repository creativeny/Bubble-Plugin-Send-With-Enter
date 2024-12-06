function(instance, properties, context) {

var input = properties.input_text,
    send = properties.send_button;

$(window).keydown(function(e) {
    if (e.keyCode == 13 && !e.shiftKey) {
        e.preventDefault();
        $("#" + input).blur();
        if ($("#" + send).length) {
            $("#" + send).click();
        }
    }
});

}