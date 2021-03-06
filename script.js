// Enable jQuery in the Options

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
    	$("body").css({'overflow-y': 'hidden', 'background': 'black'})
	$("ytd-app").css({'background': 'black'})
	    
    	$(".title").css({'color': 'white'}) // Video title
        $("#comments").remove(); // Comments
        $("#secondary").remove(); // Suggestions
        $("#masthead-container").remove(); // Search bar
        $("#meta").remove(); // Description
        $("#menu-container").remove(); // Not sure :)
        $("ytd-video-primary-info-renderer").css({ 'border-bottom' : '0', 'padding': '8px 0 8px 0'}); // Border before comments
        $("#columns").css({'justify-content': 'left', '-webkit-justify-content': 'left', 'max-width':'100%'}); // Let title go all the way to the left
        
        // Optional: Date and views
        $("#info-text").remove()
        $(".super-title").remove(); // Hashtags
	$("#related").remove() // Suggestions
		
        $("#primary").css({'margin-left': '12px'}); // Shift title left
        $("#page-manager").css({'margin': '12px'})
    }
}

window.setInterval(checkUrl, 500);
