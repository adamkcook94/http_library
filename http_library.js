// Here we are creating a library containing data.

// Constructor function where we are creating the easyHTTP object.
function easyHTTP() {
    this.http = new XMLHttpRequest
}

// Make HTTP 'GET' request

easyHTTP.prototype.get = function(url, callback) { //
    // Here we are creating a get prototype within the easyHTTP object.
    this.http.open('GET', url, true);

    let self = this;

    this.http.onload = function() {
        if(self.http.status === 200) {
            callback(null, self.http.responseText);
        } else {
            callback('Error: ' + self.http.status);
        }
    }

    this.http.send();
}