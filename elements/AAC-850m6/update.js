function(instance, properties, context) {

    // Keep track of submission state
    let isSubmitting = false;

    var input = properties.input_text, send = properties.send_button;

    // Configuration options
    var config = {
        shouldResetInput: properties.reset_input, shouldRestoreFocus: properties.restore_input
    };

    // Remove any existing event handlers first
    $(window).off('keydown.formSubmit');

    // Add namespaced event handler
    $(window).on('keydown.formSubmit', function(e) {
        // Check if Enter is pressed without Shift and not currently submitting
        if (e.keyCode == 13 && !e.shiftKey && !isSubmitting) {
            e.preventDefault();

            // Set submitting state to true
            isSubmitting = true;

            // Store input field reference
            const $input = $("#" + input);

            // Remove focus from input field
            $input.blur();

            // Small delay to ensure blur is complete
            setTimeout(() => {
                // Click send button if it exists
                if ($("#" + send).length) {
                    $("#" + send).click();

                    // Clear the input field after 500ms if enabled
                    setTimeout(() => {
                        if (config.shouldResetInput) {
                            $input.val('');
                        }

                        // Restore focus if enabled
                        if (config.shouldRestoreFocus) {
                            $input.focus();
                        }
                    }, 500);
                }

                // Reset submitting state
                isSubmitting = false;
            }, 100);
        }
    });

}