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

        //Blur event handler : fired when the focus is lost from a field
        $('[required]').on(
            'blur',
            (event) => {
                console.log('Focus was lost on a required field... But which ?')
                const value = $(event.target).val()
                if (value == '') {
                    // How do I remove a class on the next div ?
                    $(event.target).next('div').removeClass('hidden')
                } else {
                    // Well, how do I add a classon the next div ?
                    $(event.target).next('div').addClass('hidden')
                }

            }
        )
        $('[required]').on(
                    'focus',
                    (event) => {
                        let=nextDiv = null
                        //if ($(event.target).attr('name') != 'email-ctrl') {
                            nextDiv= $(event.target).next('div')
                        //} else {
                        //    nextDiv = $(event.target).parents('div.form-group').next('div')
                        //}

                    console.log('Well I got the focus')
                    if (!nextDiv.hasClass('hidden')) { //Si récup focus, si la balise n'avait pas l'attribut 'hidden' alors on le rajoute
                        nextDiv.addClass('hidden')
                    }

                    }
                )
        // Manage form submission
        $('form#contact-form').on(
            'submit',
            (event) => {
                console.log('Form was submit')
                event.preventDefault() // Empêche le déclenchement de l'evènement par défaut
                $('#send-button').attr('disabled' , 'disabled')

                // Récupérer les données du template
                const snackbar = $('#snackbar').contents().clone()

                // Ajouter les éléments du snackbar au contenu visible courant
                $('body').append(snackbar)

                // Laisser vivant 3s et supprimer le clone
                setTimeout( // Handler = fonction
                    () => {
                        snackbar.remove()
                    },
                    3000 // S'exprime en millisecondes
                )
            }
        )
    }
)