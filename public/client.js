//Event listener for the devour button
$('.dev-btn').on("click", (e) => {
    e.preventDefault()

    let id = e.target.dataset.id

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: true
    }).then((res) => {
        console.log("Burger has been devoured");
        location.reload();
    });

})

// Event Listening for the add Burger Button
$(".add-btn").on("click", (e) => {
    e.preventDefault()

    let newBurger = {
        burgerName: $("#burger_name").val().trim()
    }


    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then((res) => {
        console.log("Added Burger");
        // Reload the page to get the updated list
        location.reload();
    });

})

// If "enter" is pressed clicks the add button
$('#burger_name').keypress(function (e) {
    var key = e.which;
    if(key == 13)  // the enter key code
     {
       $('.add-btn').click();
       return false;  
     }
   }); 