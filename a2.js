// Import the initialize, getAllStudents, getTAs and getCourses functions from the collegeData module.
const {initialize,getAllStudents,getTAs,getCourses} = require('./modules/collegeData');

// Call the initialize function, which returns a promise.
initialize().then((result) => {
    // If the promise is resolved, call the getAllStudents function, which returns another promise.
    getAllStudents().then((result) => {
        // If the getAllStudents promise is resolved, log the result to the console.
        console.log(result);
    }).catch((err) => {
        // If the getAllStudents promise is rejected, log the error to the console.
        console.log(err);
    });

    // Call the getTAs function, which returns a promise.
    getTAs().then((result) => {
        // If the getTAs promise is resolved, log the result to the console.
        console.log(result);
    }).catch((err) => {
        // If the getTAs promise is rejected, log the error to the console.
        console.log(err);
    });

    // Call the getCourses function, which returns a promise.
    getCourses().then((result) => {
        // If the getCourses promise is resolved, log the result to the console.
        console.log(result);
    }).catch((err) => {
        // If the getCourses promise is rejected, log the error to the console.
        console.log(err);
    });
}).catch((err) => {
    // If the initialize promise is rejected, log the error to the console.
    console.log(err);
});
