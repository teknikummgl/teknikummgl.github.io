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

    if (field9 == "") {
        alert('Please Fill Your');
        document.getElementById("pangkat").focus();
        return false;
    }

    if (field10 == "") {
        alert('Please Fill Your');
        document.getElementById("instansi").focus();
        return false;
    }

    $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLSdWSIs-eySHq7gvwKibSKJEw_YEDWrIhxuVXS77dU6slxX5Kw/formResponse?",
        data: {
            "emailAddress": field1,
            "entry.1200911178": field2,
            "entry.870081300": "'" + field3,
            "entry.943295338": field4,
            "entry.1095564754": field5,
            "entry.1157361213": field6,
            "entry.243517237": field7,
            "entry.443732615": field8,
            "entry.1889240769": field9,
            "entry.1772168235": field10
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

var rupiah = document.getElementById("nim");
rupiah.addEventListener('keyup', function (e) {
    // tambahkan 'Rp.' pada saat form di ketik
    // gunakan fungsi formatRupiah() untuk mengubah angka yang di ketik menjadi format angka
    rupiah.value = formatRupiah(this.value, );
});

/* Fungsi formatRupiah */
function formatRupiah(angka, prefix) {
    var number_string = angka.replace(/[^,\d]/g, '').toString(),
        split = number_string.split(','),
        sisa = split[0].length % 4,
        rupiah = split[0].substr(0, sisa),
        ribuan = split[0].substr(sisa).match(/\d{4}/gi);

    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if (ribuan) {
        separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }

    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
    return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
}

function skmk1() {
    var field1 = $("#email").val();
    var field2 = $("#name").val();
    var field3 = $("#nim").val();
    var field4 = $("#prodi").val();
    var field5 = $("#smt").val();
    var field6 = $("#ta").val();

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

    $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLScH_6OR25TOwhIeVzZMH7DsXHz-PPCi1hb6zIn2qs3kq7-bSQ/formResponse?",
        data: {
            "emailAddress": field1,
            "entry.504433470": field2,
            "entry.211923558": "'" + field3,
            "entry.1995867693": field4,
            "entry.1569874602": field5,
            "entry.2018971999": field6
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