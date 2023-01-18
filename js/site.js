function getValues() {

    // get values from the page
    let eliteValue = document.getElementById('eliteValue').value;
    let codeValue = document.getElementById('codeValue').value;
    let stopValue = document.getElementById('stopValue').value;

    // parse our inputs as numbers
    eliteValue = parseInt(eliteValue);
    codeValue = parseInt(codeValue);
    stopValue = parseInt(stopValue);

    // verify our inputs ARE numbers

    if (Number.isInteger(eliteValue) && Number.isInteger(codeValue) && Number.isInteger(stopValue) && stopValue < 5000)
    {
    // if they are, then generate numbers
        let numbersArray = generateFizzBuzz(eliteValue, codeValue, stopValue)

    // then display on the page
        displayFizzBuzz(numbersArray, eliteValue, codeValue);
    } else {
        Swal.fire( {
            icon: 'error',
            title: 'Oops!',
            text: "Please enter valid inputs!"
        });
    }
}

// generate our numbers
// Logic Function
function generateFizzBuzz(eliteValue, codeValue, stopValue) {

    let eliteCodeValues = [];

    for(let i = 1; i <= stopValue; i++) {
        
        let value = i; 

        if(value % eliteValue == 0 && value % codeValue == 0) {
            value = 'EliteCode'
        } else if(value % codeValue == 0) {
            value = 'Code';
        } else if(value % eliteValue == 0) {
            value = 'Elite';
        }

        eliteCodeValues.push(value);
    }

    return eliteCodeValues;
}

// display them on the page
// View Function
function displayFizzBuzz(fizzbuzzes) {
    
    let tableBody = document.getElementById('results');

    let tableHtml = "";

    for(let i = 0; i < fizzbuzzes.length; i++) {
        let fizzbuzzesvalue = fizzbuzzes[i];
        
        tableHtml += `<tr class=""><td>"${fizzbuzzesvalue}"</td></tr>`;
    }


    tableBody.innerHTML = tableHtml;
}