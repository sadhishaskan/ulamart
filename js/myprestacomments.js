$(document).ready(function () {
    $('input.star').rating();
    $('.auto-submit-star').rating();

    $('.open-comment-form').fancybox({
        'hideOnContentClick': false
    });

    url_options = '?';

    if (typeof(myprestacomments_url_rewrite) !== 'undefined'){
        if (myprestacomments_url_rewrite == '0') {
            url_options = '&';
        }
    }

    $('button.usefulness_btn').click(function () {
        var id_product_comment = $(this).data('id-product-comment');
        var is_usefull = $(this).data('is-usefull');
        var parent = $(this).parent();

        $.ajax({
            url: myprestacomments_controller_url + url_options + 'rand=' + new Date().getTime(),
            data: {
                id_product_comment: id_product_comment,
                action: 'comment_is_usefull',
                value: is_usefull
            },
            type: 'POST',
            headers: {"cache-control": "no-cache"},
            success: function (result) {
                parent.fadeOut('slow', function () {
                    parent.remove();
                });
            }
        });
    });

    $('span.report_btn').click(function () {
        if (confirm(confirm_report_message)) {
            var idMyprestaComment = $(this).data('id-product-comment');
            var parent = $(this).parent();

            $.ajax({
                url: myprestacomments_controller_url + url_options + 'rand=' + new Date().getTime(),
                data: {
                    id_product_comment: idMyprestaComment,
                    action: 'report_abuse'
                },
                type: 'POST',
                headers: {"cache-control": "no-cache"},
                success: function (result) {
                    parent.fadeOut('slow', function () {
                        parent.remove();
                    });
                }
            });
        }
    });

    $('#module-myprestacomments-feedback ul.page-list li a').removeClass('js-search-link');
    $('#module-myprestacomments-feedback ul.page-list li a').off();

    rebindClickButton();
});

function rebindClickButton()
{
    $('#submitNewMessage').off('click');
    $('#submitNewMessage').click(function (e) {
        // Kill default behaviour
        e.preventDefault();

        $.ajax({
            url: myprestacomments_controller_url + url_options + 'action=add_comment&secure_key=' + secure_key + '&rand=' + new Date().getTime(),
            data: $('#id_new_comment_form').serialize(),
            type: 'POST',
            headers: {"cache-control": "no-cache"},
            dataType: "json",
            success: function (data) {
                if (data.result) {
                    document.getElementById("id_new_comment_form").reset();
                    $.fancybox.close();
                    fancyChooseBox(moderation_active ? MyprestaComment_added_moderation : MyprestaComment_added);
                }
                else {
                    $('#new_comment_form_error ul').html('');
                    $.each(data.errors, function (index, value) {
                        $('#new_comment_form_error ul').append('<li>' + value + '</li>');
                    });
                    $('#new_comment_form_error').slideDown('slow');
                    $('#submitNewMessage').addClass('gdpr_disabled');
                    document.getElementById("gdpr_checkbox").checked = false;
                }
            }
        });
        return false;
    });
}

function fancyChooseBox(msg) {
    $('#new_comment_form_ok').html(msg).show();
}

function MyprestaCommentRefreshPage() {
    window.location.reload();
}