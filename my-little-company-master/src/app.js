/**
* @name app.js
* @version 1.0.0
* @author ADRAR - Juil. 2020
* @abstract Manage contact form
* @see JQuery (https://jquery.com)
**/
$(document).ready( /** document=Document Object Model **/
    () => { /** Fonction fléchée **/
        console.log("App works!") /** Si tout le contenu de la page est chargé sans erreur alors js peut fonctionner **/
        
        // Sets array of controls that are required
        const requiredControls = [
            'lastname-ctrl',
            'email-ctrl'
        ]
        // Sets an event handler on form
        $("#contact-form").on(
         'change keyup',
            (event) => {
                console.log('Change was detected on form')
                let isValid = true // Formulaire est ok... on va voir ensuite...
                requiredControls.forEach((control) => {
                    console.log(`Check for ${control} control validity`)

                    const requiredControlValue =$('[name="' + control + '"]').val()
                    console.log(`value for ${control} : ${requiredControlValue}`)
                    if (requiredControlValue =='') {
                        isValid = false // Set form as invalid if at least one control is false
                    }
                })
                console.log(`My form is ${isValid ? 'Valid' : 'Invalid'}`)
                if (isValid) {
                    $('#send-button').removeAttr('disabled')
                } else {
                    $('#send-button').attr('disabled', 'disabled')
                }
            }
        )
    }
)
