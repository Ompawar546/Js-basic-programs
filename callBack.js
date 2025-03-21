function fetchData(cbFunction) {
    setTimeout(() => {
        console.log("Data fetched!");
        cbFunction();
    }, 2000); 
}

function processData() {
    console.log("Processing data...");
}

fetchData(processData);
