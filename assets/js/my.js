function contact() {
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

function skmk() {
    var field1 = $("#email").val();
    var field2 = $("#name").val();
    var field3 = $("#nim").val();
    var field4 = $("#prodi").val();
    var field5 = $("#smt").val();
    var field6 = $("#ta").val();
    var field7 = $("#nama_ortu").val();
    var field8 = $("#nip").val();
    var field9 = $("#pangkat").val();
    var field10 = $("#instansi").val();

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
        alert('Please Fill Your NIM');
        document.getElementById("nim").focus();
        return false;
    }

    if (field4 == "") {
        alert('Please Fill Your Prodi');
        document.getElementById("prodi").focus();
        return false;
    }

    if (field5 == "") {
        alert('Please Fill Your Semester');
        document.getElementById("smt").focus();
        return false;
    }

    if (field6 == "") {
        alert('Please Fill Your Academic Year');
        document.getElementById("ta").focus();
        return false;
    }

    if (field7 == "") {
        alert('Please Fill Your');
        document.getElementById("nama_ortu").focus();
        return false;
    }

    if (field8 == "") {
        alert('Please Fill Your');
        document.getElementById("nip").focus();
        return false;
    }

    if (field7 == "") {
        alert('Please Fill Your');
        document.getElementById("pangkat").focus();
        return false;
    }

    if (field7 == "") {
        alert('Please Fill Your');
        document.getElementById("instansi").focus();
        return false;
    }

    $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLSdtzD1lr-7KeYc70ZFZvVmgdMx0kWhkmgAX3pS7yMmF5hxEQg/formResponse?",
        data: {
            "emailAddress": field1,
            "entry.1772614936": field2,
            "entry.374747839": field3,
            "entry.1605480138": field4,
            "entry.296533861": field5,
            "entry.262943577": field6,
            "entry.691409307": field7,
            "entry.304546375": field8,
            "entry.1014847203": field9,
            "entry.805959753": field10
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