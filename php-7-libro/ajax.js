function getXMLHttp() {
    var xmlHttp;

        xmlHttp = new XMLHttpRequest();

    return xmlHttp;
}

function AjaxRequest() {
    var xmlHttp = getXMLHttp();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            HandleResponse(xmlHttp.responseText);
        }
    }
    xmlHttp.open("GET", "myfirstprogram.php", true);
    xmlHttp.send(null);
}

function HandleResponse(response) {
    document.getElementById('AjaxResponse').innerHTML = response;
}