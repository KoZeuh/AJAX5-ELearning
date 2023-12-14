
let token = ""; // CHANGE MEEE
let baseUrl = "https://ipinfo.io/";


$(document).ready(function() {
    $("#btnSendIPInfos").click(function() {
        let ipAddress = $("#inputIP").val();
        
        if (!ipAddress || ipAddress === "") {
            return alert("Veuillez entrer une adresse IP valide.");
        }
        
        $.ajax({
            url: `${baseUrl}${encodeURIComponent(ipAddress)}/json?token=${token}`,
            type: "GET",
            dataType: "json",
            async: false,
            success: function(response) {
                // Afficher les informations de l'adresse IP dans un élément HTML (par exemple, une div avec l'id "contentResponseIPInfos")
                $("#contentResponseIPInfos").html("Informations IP : " + JSON.stringify(response));
            },
            error: function() {
                alert("Erreur lors de la requête AJAX.");
            }
        });
    });
});