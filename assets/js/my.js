function postToGoogle() {
    var field1 = $("#email").val();
    var field2 = $("#name").val();
    var field3 = $("#phone").val();
    var field4 = $("#message").val();

    if (field1 == "") {
        alert('Please Fill Your Email');
        document.getElementById("email").focus();
        return false;
    }

    if (field2 == "") {
        alert('Please Fill Your Name');
        document.getElementById("name").focus();
        return false;
    }

    if (field3 == "") {
        alert('Please Fill Your Phone Number');
        document.getElementById("phone").focus();
        return false;
    }

    if (field4 == "") {
        alert('Please Fill Your Message');
        document.getElementById("message").focus();
        return false;
    }

    $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLScAKEUGlN_TBuZ9GMEC3_r95Yl93jOAFyEba_Foj3NjbGkY0A/formResponse?",
        data: {
            "emailAddress": field1,
            "entry.1047576577": field2,
            "entry.503783145": field3,
            "entry.592325864": field4
        },
        type: "POST",
        dataType: "xml",
        success: function (d) {},
        error: function (x, y, z) {

            $('#success-msg').show();
            $('#form').hide();

        }
    });
    return false;
}