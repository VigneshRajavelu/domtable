var table = document.createElement("table");
table.className = "table table-bordered table-hover table-dark table-striped  table-bordered";

var thead = document.createElement("thead");
thead.className = "thead-dark ";

var thead_tr = create_tr();

function create_tr() {
    var tr = document.createElement("tr");
    return tr;
}

function create_th(tagname, attrname, attrvalue, content) {
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    ele.innerHTML = content;
    return ele;
}

function create_td(tagname, content) {
    var ele = document.createElement(tagname);
    ele.innerHTML = content;
    return ele;
}

var th1 = create_th("th", "scope", "col", "#");
var th2 = create_th("th", "scope", "col", "First");
var th3 = create_th("th", "scope", "col", "Last");
var th4 = create_th("th", "scope", "col", "Handle");

thead_tr.append(th1, th2, th3, th4);
thead.append(thead_tr);

var tbody = document.createElement("tbody");
var body_tr = create_tr();

var body_th = create_th("th", "scope", "row", "1");
var td1 = create_td("td", "Mark");
var td2 = create_td("td", "Otto");
var td3 = create_td("td", "@mdo");

body_tr.append(body_th, td1, td2, td3);
tbody.append(body_tr);

var body_tr1 = create_tr();
var body_th1 = create_th("th", "scope", "row", "2");
var td11 = create_td("td", "Jacob");
var td22 = create_td("td", "Thornton");
var td33 = create_td("td", "@fat");

body_tr1.append(body_th1, td11, td22, td33);
tbody.append(body_tr1);

var body_tr12 = create_tr();
var body_th12 = create_th("th", "scope", "row", "3");
var td111 = create_td("td", "Larry");
var td222 = create_td("td", "the Bird");
var td333 = create_td("td", "@twitter");

body_tr12.append(body_th12, td111, td222, td333);
tbody.append(body_tr12);

var tbody_tr4 = create_tr();
var tbody_th4 = create_th("th", "scope", "row", "4");
var td14= create_td("td","gopi");
var td24= create_td("td","gopi");
var td34= create_td("td","gopi");

tbody_tr4.append(tbody_th4, td14, td24, td34);
tbody.append(tbody_tr4);

table.append(thead, tbody);
document.body.append(table);