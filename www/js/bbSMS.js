var bbSMS = {

	// usage --> bbSMS.send("2123332222", "What's up doc?", "Elmer Fudd");
	send: function(phoneNumber, textMsg, personName){
		console.log('trying to send an sms');
		if(personName===undefined){
			personName=phoneNumber;
		}

		if (community && community.SMSPlugin) {
			var param = {
				"destination": phoneNumber,  
				"message": textMsg,
				"personName": personName // can be any string such as "Barack Obama" 
			};
			console.log(param);
			var output = community.SMSPlugin.udSMS_Sync(param); // <------- this is the call to C++ implementation. That's all!
			return output;
			
		} else {
			return false;
		}

	},
	sendAsync: function(callback, phoneNumber, textMsg, personName){
		console.log('trying to send an sms');
		if(personName===undefined){
			personName=phoneNumber;
		}

		if (community && community.SMSPlugin) {
			var param = {
				"destination": phoneNumber,  
				"message": textMsg,
				"personName": personName // can be any string such as "Barack Obama" 
			};
			console.log(param);
			
			var output = community.SMSPlugin.udSMS_Async(param, callback); // <------- this is the call to C++ implementation. That's all!
			return output;
			
		} else {
			return false;
		}

	}
	
} 
