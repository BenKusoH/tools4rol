function convertLength(length) {

    // Get the value of the input
    var value = parseFloat(document.getElementById(length).value);
    
    // Convert the value to other currencies
    switch(length) {
        case 'meters':
            document.getElementById('feet').value = (value * 3.2808399).toFixed(4);
            break;
        case 'feet':
            document.getElementById('meters').value = (value / 3.2808399).toFixed(4);
            break;
        default:
            break;
    }
    
    }