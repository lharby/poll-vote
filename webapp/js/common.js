$(document).ready(function(){

 	// vote form 
	voteForm = function(){
		var name = $('.name');
		var person = 'Jessica Harby';
		var input = $('input');
		var submit = $('#submit');
		var wrappers = input.parent();
		var success = $('.success');
		var entry = $('.entry');
		var checked = false;
		var vote;
		name.html(person);

		input.bind('change',function(){
			var wrapper = $(this).parent();
			wrappers.removeClass('ion-close');
			wrapper.addClass('ion-close')
			if($(this).is(':checked')){
		  		checked = true;
		  		vote = $(this).val();
				submit.removeClass('disabled');
		  	};
		  	sendVote(vote);
		});

		submit.on('click',function(){
			$.cookie('voted',vote);
			$('.result').html(cookieValue);
			success.show();
			return false;
		});

		cookieValue = function(){
			if($.cookie('voted') == 0){
				return 'become a UK citizen';
			}
			if($.cookie('voted') == 1){
				return 'not become a UK citizen';
			}
		}

		if($.cookie('voted')){
			$('.result').html(cookieValue);
			entry.show();
		}

		$('.close').on('click',function(){
			$(this).parent().hide();
			return false;
		});
	}();

	function sendVote(int) {
		data = int,true;
		$.ajax({
			type:'POST',
			url:'data/poll_vote.php?vote=' + data,
			success:function(){
				console.log('Data sent');
			},
			error: function(status){
				console.log(status, 'Some error');
			}
		});
	}
	// end vote form

});
