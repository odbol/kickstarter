$(function() {
    var clicks = 0
        openPopup = function (url) {
             var w = 580, h = 300,
                left = (screen.width/2)-(w/2),
                top = (screen.height/2)-(h/2);
        
            window.open (url, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);   
        },

        openSharePopup = function (baseUrl, shareUrl, title) {
            // combine the link's URL with its title as the post content
            var url = baseUrl + encodeURIComponent(shareUrl) + 
                (title ? '&text=' + encodeURIComponent(title) : '');

                openPopup(url); 
        };

    $('.button').on('click', function() {
        clicks++;
        var percent = Math.min(Math.round(clicks / 3 * 100), 100);
        $('.percent').width(percent + '%');
        $('.number').text(percent + '%');
    });


    $('.twitter').on('click', function() {
        openSharePopup("http://twitter.com/share?url=", this.href, this.title); 

        return false;
    });
    
    $('.facebook').on('click', function() {
        openSharePopup("http://www.facebook.com/share.php?u=", this.href, this.title); 

        return false;
    });

    $('.email').on('click', function () {
        var formattedBody = "Hey,\n\nHave you seen the DrumPants on Kickstarter? You can play sounds on your pants! Thought it was perfect for you:\n\nhttp://www.kickstarter.com/projects/1400947701/drumpants-an-entire-band-in-your-pocket\n\nSee you round,\n\n";
        
        window.location.href = "mailto:?subject=Saw these DrumPants and thought of you!&body=" + encodeURIComponent(formattedBody);

        return false;
    });
});