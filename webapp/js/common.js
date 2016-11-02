$(document).ready(function(){

 	// vote form 
	voteForm = function(){
		var name 		= $('.name');
		var person 		= 'Jessica Harby';
		var input 		= $('input');
		var submit 		= $('#submit');
		var wrappers 	= input.parent();
		var success 	= $('.success');
		var entry 		= $('.entry');
		var checked 	= false;
		var voteYes 	= 'become a UK citizen';
		var voteNo 		= 'not become a UK citizen';
		var selectClass = 'selected';
		var vote;
		name.html(person);

		// record the option selected in the radio input
		input.bind('change',function(){
			var wrapper = $(this).parent();
			wrappers.removeClass(selectClass);
			wrapper.addClass(selectClass)
			if($(this).is(':checked')){
		  		checked = true;
		  		vote = $(this).val();
				submit.removeClass('disabled');
		  	};
		});

		// submit the data 
		submit.on('click',function(){
			$.cookie('voted',vote, { expires: 1095 });
			$('.result').html(cookieValue);
			sendVote(vote);
			success.show();
			return false;
		});

		// map the values to strings
		cookieValue = function(){
			if($.cookie('voted') == 0){
				return voteYes;
			}
			if($.cookie('voted') == 1){
				return voteNo;
			}
		}

		// if cookie exists client has voted
		if($.cookie('voted')){
			$('.result').html(cookieValue);
			entry.show();
		}

		// close modal
		$('.close').on('click',function(){
			$(this).parent().hide();
			return false;
		});

	}();

	// send the vote data via ajax
	function sendVote(int) {
		data = int,true;
		$.ajax({
			type:'POST',
			url:'data/poll_vote.php?vote=' + data,
			success:function(){
			},
			error: function(status){
				console.log(status, 'There was an error');
			}
		});
	}
	// end vote form

});