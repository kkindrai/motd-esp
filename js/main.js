
/**
 * ────୨୧────────୨୧────
 * getQuote - START
*/
function getQuote() {

    // Create Local Variables
    let quoteData = csvInit();
    let startDate = new Date("2001-08-29");
    let dateNow = new Date();
    let currentDate = new Date(`${dateNow.getFullYear()}-${dateNow.getMonth()}-${dateNow.getDate()}`);
    let indexTotal = currentDate - startDate;
    let indexLoop = quoteData.length;
    let index = indexTotal % indexLoop; // Value to use as index (calculates using remainder of Total & Loop)
    let currentQuote = quoteData[index];

    console.log(quoteData);

    // Fill if undefined/null author
    if(currentQuote.author === undefined || currentQuote.author === null) {
        currentQuote.author = 'Desconocido';
    }
    
    // Return
    return [currentQuote.quote, currentQuote.author];
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

    let htmlQuote = `
            <blockquote cite="https://www.positive-api.online/phrase/esp">
                <p>
                ${quoteData[0]}
                </p>
                </br>
                <p><cite>— ${quoteData[1]}</cite></p>
            </blockquote> 
    `;

    content.innerHTML = htmlQuote;

    

}
/**
 * buildDOM Function - END
* ────୨୧────────୨୧────
*/

    