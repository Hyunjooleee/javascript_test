/*
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
*/
//매개변수가 form일때
function compare(form) {
    var x_val = form.number1.value;
    var y_val = form.number2.value;
    var output = form.demo1;
    if (x_val > y_val) {
        output.value = x_val;
        return false;
    }
    output.value = y_val;
    return false;
}

function substring_string(form) {
    var str = form.text1.value;
    var text = form.text2.value;
    form.demo2.value = str.split(text)[0];
    return false;
}

function replace_string(form) {
    var str = form.str.value;
    var t1 = form.text01.value;
    var t2 = form.text02.value;
    var output = form.demo3;
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

function f_func(form) {
    var id = form.id;
    if (id == "compare")
        return compare(form);
    else if (id == "substring")
        return substring_string(form);
    return replace_string(form);
}