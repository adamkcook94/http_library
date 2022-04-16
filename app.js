// const http = new easyHTTP;

// Get Posts

// const posts = http.get('https://jsonplaceholder.typicode.com/posts');

// console.log(posts);

// posts is now equal to the data from the API.

// we're also passing through the url parameter as seen in http_library.js with the json typicode API.

// A Callback is a function that is to be executed after another function has finished executing — hence the name ‘call back’.

// We need a callback here because the data is returned before it's been added to 'posts'.

// I believe the first function being carried out is retrieving the data from the API.

// So the reason we'd need a callback is to then execute adding the data to app.js

const http = new easyHTTP;

http.get('https://jsonplaceholder.typicode.com/posts12', function(err, posts) {
    if(err) { // If null, console.log first parameter of the else in http_library.js, because thats where it goes if there's a status other than 200.
        console.log(err);
    } else { // else, log the posts
        console.log(posts);
    }
});