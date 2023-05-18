    // Get the coordinates for two points from the user.
    var x1 = parseFloat(document.getElementById('x1InputBox').value);
    var y1 = parseFloat(document.getElementById('y1InputBox').value);
    var x2 = parseFloat(document.getElementById('x2InputBox').value);
    var y2 = parseFloat(document.getElementById('y2InputBox').value);

    // Compute the distance between the two points.
    var dx = x2 - x1;
    var dy = y2 - y1;
    var dist = Math.sqrt(dx * dx + dy * dy);

    // Round the distance to two digits after the decimal.
    var digits = 2;
    var multiplier = Math.pow(10, digits);
    dist = Math.round(dist * multiplier) / multiplier;

    // Display the distance to the user.
    document.getElementById('outputDiv').innerHTML = dist;