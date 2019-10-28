// Do not forget to enable jQuery

function redirect(){
    window.location.replace("http://google.com"); // Redirect url for forbidden sites
}

function checkUrl(){
    let url = window.location.href
    url = url.replace(/^.*\/\/[^\/]+/, '')

    if(!url.startsWith("/watch")){
        redirect(); // Only direct video links are allowed
    }
    else {
        $("#comments").remove(); // Comments
        $("#secondary").remove(); // Suggestions
        $("#masthead-container").remove(); // Search bar
        $("#meta").remove(); // Description
        $("#menu-container").remove(); // Not sure :)
        $("ytd-video-primary-info-renderer").css({ 'border-bottom' : '0'}); // Border before comments

        // Optional: Date and views
        $("#info").remove()
    }
}

window.setInterval(checkUrl, 500);
