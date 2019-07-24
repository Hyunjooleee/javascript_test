function compare(x, y, id) {
    var x_val = document.getElementById(x).value;
    var y_val = document.getElementById(y).value;
    var ele = document.getElementById(id);
    if (x_val > y_val)
        ele.value = x_val;
    else
        ele.value = y_val;
}
function substring_string(t1, t2, id) {
    var str = document.getElementById(t1).value;
    var text = document.getElementById(t2).value;
    document.getElementById(id).value = str.split(text)[0];
}
function replace_string(text, t1, t2, id) {
    var str = document.getElementById(text).value;
    var t1 = document.getElementById(t1).value;
    var t2 = document.getElementById(t2).value;
    var text = str.split(" "), i, result = "";
    t1 = t1.trim();
    t2 = t2.trim();
    for (i = 0; i < text.length; i++) {
        if (text[i] == t1) 
            result += t2;
        else if (text[i] == t2)
            result += t1;
        else
            result += text[i];
        result += " ";
    }
    document.getElementById(id).value = result;
}
/*  매개변수가 form일때

    function replace_string(form) {
    var ele = form.getElementsByTagName("input");
    var str = ele[0];   str = str.value;
    var t1=ele[1];  t1 = t1.value;
    var t2=ele[2];  t2 = t2.value;
    var output=ele[3];
    var text = str.split(" "), i, result = "";
    t1 = t1.trim();
    t2 = t2.trim();
    for (i = 0; i < text.length; i++) {
        if (text[i] == t1) 
            result += t2;
        else if (text[i] == t2)
            result += t1;
        else
            result += text[i];
        result += " ";
    }
    output.value = result;
    return false;
}
*/