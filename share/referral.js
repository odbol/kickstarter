$(function() {

	var referralCodeMatches = /code=([^&#]+)/i.exec(window.location.href),
		referralCode = referralCodeMatches ? referralCodeMatches[1] : null,

		showActions = function () {
			var referralMsg = 'referred by ' + referralCode;

			$('#referred_text').val(referralMsg);

			return false;
		},
		
		curStep = 1,
		nextStep = function () {
			++curStep;

			$('.step' + curStep).fadeIn('fast');
		},

		onEnteredName = function () {
			var username = $('#username').val(),
				referralUrl = $('.referralLinkButton').attr('href') + "?code=" + encodeURIComponent(username);

			if (username) {

				$('#username').removeClass('error');

				$('.referralLinkButton').attr('href', referralUrl);
				$('.referralLink').val(referralUrl);
				
				nextStep();	
			}
			else {
				$('#username').addClass('error');
			}

			return false;
		},

		showReferralForm = function () {
			// hide the steps and just show referral code form
			$('#actions').fadeOut('fast');

			$('#referralCodeForm').fadeIn('fast');

			return false;
		};



	if (referralCode) {
		showActions();
	}
	else {
		showReferralForm();
	}


	$('.showReferralForm').click(showReferralForm);

	$('.getCodeButton').click(onEnteredName);

	// select all on clicking input form
	$("input.copyable").focus(function() { 
	    var save_this = $(this);
	    window.setTimeout (function(){ 
	       save_this.select(); 
	    },100);
	});
});