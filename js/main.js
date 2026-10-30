
/**
 * ────୨୧────────୨୧────
 * getQuote - START
*/
function getQuote() {

    // Create Function Objects
    let quoteData = csvInit();
    let quoteObject;
    let authorObject;
    let quoteText = '';
    let authorText = '';
    let currentDay = new Date().getDate();

    console.log(quoteData);




    // // Get Author Data (If Available)
    // if (quoteObject.author_id !== null) {
    //     url = `https://www.positive-api.online/authors`;

    //     authorObject = JSON.parse(requestData(url));
    //     authorText = authorObject.find(record => record.id === quoteObject.author_id).name;

    // } else {
    //     authorText = 'Desconocido'
    // }

    // // Assemble Quote Object
    // quoteData = [quoteText, authorText];

    // return quoteData;
}
/**
 * getQuote - END
 * ────୨୧────────୨୧────
*/

/**
 * ────୨୧────────୨୧────
 * buildDOM Function - START
*/
function buildDOM() {
    let quoteData = getQuote();
    let content = document.getElementById('content');

    // let htmlQuote = `
    //         <blockquote cite="https://www.positive-api.online/phrase/esp">
    //             <p>
    //             ${quoteData[0]}
    //             </p>
    //             </br>
    //             <p><cite>— ${quoteData[1]}</cite></p>
    //         </blockquote> 
    // `;

    // content.innerHTML = htmlQuote;

    

}
/**
 * buildDOM Function - END
* ────୨୧────────୨୧────
*/

    