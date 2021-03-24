let emailCollectorForm = document.getElementById("Email-Collector")
            emailCollectorForm.addEventListener("submit", event => {
                // stoping the default event behavior //
                event.preventDefault()
                
                console.log("The event is firing!")


                // Using FormData to get the user's name and email //
                let ourFormData = new FormData(event.target)
                
                let userFirstName = ourFormData.get("firstName")

                // updating HTML content to display on screen when user submits information //
                let updatedHtmlContent = ` <h2>Congratulations, ${userFirstName}!</h2>
        
            <p>You're on your way to achieving your running goals!</p>


            <p class="fine-print">We'll never share your information without your premission.</p>
            `
            let ourMainContent = document.getElementById("Main-Content")
                ourMainContent.innerHTML = updatedHtmlContent
            })