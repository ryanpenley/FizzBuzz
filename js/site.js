// get the user input from the page
// Controller function
function getValues() {

    // get the values from the page
    let count = document.getElementById('count').value;
    let eliteValue = document.getElementById('eliteValue').value;
    let codeValue = document.getElementById('codeValue').value;

    // parse string into ints
    count = parseInt(count);
    eliteValue = parseInt(eliteValue);
    codeValue = parseInt(codeValue);

    // verify inputs are numbers
    if (isNaN(count) && isNaN(eliteValue) && isNaN(codeValue)) {
        // if they are not, tell our user!
        Swal.fire(
            {
                icon: 'error',
                title: 'Oops!',
                text: 'Only whole numbers are allowed for FizzBuzz!'
            }
        );
    } else if (count > 5000) {
        // if the count is greater than 5000, tell our user!
        Swal.fire(
            {
                icon: 'error',
                title: 'Oops!',
                text: 'Hey pal, I can\'t count that high!'
            }
        );
    } else {
        // if they are numbers, generate numbers
        let elitecodeArray = generateEliteCode(count, eliteValue, codeValue);
        // then display them on the page
        displayEliteCode(elitecodeArray);
    }
}






// generate our numbers
// Logic function
function generateEliteCode(end, elite, code) {

    let tableHTML = '';

    for (let i = 1; i <= end; i++) {

        let value=i;
        let className='' ;

        if (value % (elite * code) ===0 && value != 0) {
             value='EliteCode';
             className = 'elitecode';
        } else if (value % code===0 && value !=0) {
            value='Code';
            className='code'
        } else if (value % elite===0 && value !=0) {
            value='Elite';
            className='elite';
        } if (i % 5===0) {
            tableHTML +='<tr>';
        }

        let tableRow = `<td class='${className}'>${value}</td>`;
        tableHTML += tableRow;

        if ((i + 1) % 5 === 0) {
            tableHTML += '</tr>';
        }
    }

        return tableHTML;
}

// display them on the page
// View function
function displayEliteCode(arr) {
    let tableBody = document.getElementById('results');

    tableBody.innerHTML = arr;

}