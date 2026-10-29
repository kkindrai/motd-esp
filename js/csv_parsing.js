// Declare document data
const fileInput = "/data/quotes-file.csv";


const readFile = () => {
    const reader = new FileReader();

    // Function called when file is successfully read
    reader.onload = () => {
        const csvData = reader.result;

        // Set CSV Data to localStorage
        localStorage.setItem("csvData", JSON.stringify(csvData));
    }

    reader.readAsText(fileInput);
}


console.log(localStorage.csvData);