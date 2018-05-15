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