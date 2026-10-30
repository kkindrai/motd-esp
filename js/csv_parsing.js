/**
 * @author kkindrai
 * 
 * CSV DATA PARSING
 * 
 * This file takes the quotes-file.csv & turns it into a browser cookie.
 *  ***IMPORTANT***
 *  - To modify quotes, open quotes-file-master.ods
 *  - Add/remove your quotes
 *  - SAVE AS `quotes-file.csv`.
 *      - Field Delimitter: `|`
 *      - "entrecomillar todas las celdas de texto" == TRUE
 * 
 * 
 * To implement this cookie, use the following:
 *  `let quoteData = JSON.parse(getCookie('data'));`
 * 
 */

// Create Local Variables
let xhReq = new XMLHttpRequest();
let quoteArray = [];


xhReq.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // local variables
       let id = 0;
       
        // Map the data
        data = xhReq.responseText.split('\n').map(row => row.split('|'));

        // For each item, create a data object
        data.forEach(element => {
            let item = {
                "id": `${id}`,
                "author": `${element[0]}`,
                "quote": `${element[1]}`
            };

            quoteArray.push(item);
            id++;
        });

    // Place data into cookie
    createCookie('data', JSON.stringify(quoteArray));    

    }
};

xhReq.open("GET", "/data/quotes-file.csv", true);
xhReq.send();