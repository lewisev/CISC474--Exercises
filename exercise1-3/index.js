$(document).ready(function () {
    console.log("ready!");

    // when name form is submitted
    $("#nameform").on("submit", function () {
        let first = $('#fname').val();
        let last = $('#lname').val();

        //set the jumbotron text
        $("#jumbotron").text(`${first} ${last}`);
        return false;

    })
});

