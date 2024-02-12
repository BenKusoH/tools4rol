function convertCurrency(currency) {

// Get the value of the input
var value = parseFloat(document.getElementById(currency).value);

// Convert the value to other currencies
switch(currency) {
    case 'copper':
        document.getElementById('silver').value = (value / 10).toFixed(2);
        document.getElementById('electrum').value = (value / 50).toFixed(2);
        document.getElementById('gold').value = (value / 100).toFixed(2);
        document.getElementById('platinum').value = (value / 1000).toFixed(2);
        break;
    case 'silver':
        document.getElementById('copper').value = (value * 10).toFixed(2);
        document.getElementById('electrum').value = (value / 5).toFixed(2);
        document.getElementById('gold').value = (value / 10).toFixed(2);
        document.getElementById('platinum').value = (value / 100).toFixed(2);100.00
        break;
    case 'electrum':
        document.getElementById('copper').value = (value * 50).toFixed(2);
        document.getElementById('silver').value = (value * 5).toFixed(2);
        document.getElementById('gold').value = (value * 2).toFixed(2);
        document.getElementById('platinum').value = (value / 5).toFixed(2);
        break;
    case 'gold':
        document.getElementById('copper').value = (value * 100).toFixed(2);
        document.getElementById('silver').value = (value * 10).toFixed(2);
        document.getElementById('electrum').value = (value / 2).toFixed(2);
        document.getElementById('platinum').value = (value / 10).toFixed(2);
        break;
    case 'platinum':
        document.getElementById('copper').value = (value * 1000).toFixed(2);
        document.getElementById('silver').value = (value * 100).toFixed(2);
        document.getElementById('electrum').value = (value * 5).toFixed(2);
        document.getElementById('gold').value = (value * 10).toFixed(2);
        break;
    default:
        break;
}

}