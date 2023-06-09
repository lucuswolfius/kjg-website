// Navbar eventlistener
document.addEventListener('DOMContentLoaded', function()    // Warte, bis das DOM vollständig geladen ist
{
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');     // Suche alle Navigationslinks           
    navLinks.forEach(function(link)                         // Füge für jeden Link einen Eventlistener hinzu
    {
        link.addEventListener('click', function(event)
        {
            event.preventDefault();                         // Verhindere das Standardverhalten des Links
            console.log("Clicked!");                        // Test command
        });
    });
});