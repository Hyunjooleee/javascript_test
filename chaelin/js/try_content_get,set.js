function btn01(code) {
    var p1 = $("#p01");
    var p2 = $("#p02");
    switch (code) {
        case "01":
            p1.html("");
            break;
        case "02":
            p1.html(p2.html());
            break;
        case "03":
            p1.html(p1.html() + p2.html());
            break;
        default:
            break;
    }
}
function btn02(code) {
    var output = $("#getValue");
    switch (code) {
        case "01":
            var text = "Name: "+$("#name").val() +"/ Comment: "+ $("#comment").val();
            output.val(text);
            return;
    }
    output.val($("#city").val());
}
function btn03() {
    var checks = form1.getElementsByTagName("input");
    var i;
    for (i = 0; i < checks.length; i++) {
        if (checks[i].checked) {
            checks[i].checked = false;
        }
        else {
            checks[i].checked = true;
        }
    }
}
function func2(form) {
    var text=form.name.name+", "+form.comment.name+", "+form.city.name;
    $("#getValue").val(text);
    return false;
}
function buttons(btn) {
    var btnId = btn.id.substring(0, 2);
    switch (btnId) {
        case "b1":
            var btnCode = btn.id.substring(2, 4);
            btn01(btnCode);
            break;
        case "b2":
            var btnCode = btn.id.substring(2, 4);
            btn02(btnCode);
            break;
        case "b3":
            btn03(btn);
            break;
        default:
            break;
    }
}
$().ready(function () {
    $("button").click(function () {
        buttons(this);
        return false;
    });
})