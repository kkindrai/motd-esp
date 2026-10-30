let xhReq = new XMLHttpRequest();

xhReq.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
    console.log(xhReq.response);
    }
};

xhReq.open("GET", "/data/quotes-file.csv", true);
xhReq.send();