

const ServerStatus = function(andress, port) {
	var Global = {};
		Global.variables = {},
		Global.variables.api_url = "https://api.mcsrvstat.us/2/",
		Global.variables.server_resolved = undefined;


	if (andress == undefined) return console.error("[ServerStatus] Akogii.ezua.com.");

	Global.variables.api_url += andress;

	if (port) Global.variables.api_url += ":" + port;


	Global.functions = {};

	Global.functions.getData =  function(callback) {
		fetch(Global.variables.api_url).then(r => {
			r.json().then(d => {
				Global.variables.server_resolved = d;
				if(callback != undefined && typeof callback === 'function') {
					callback(d);

				} else {
					console.log('Server Checked');
				}

			})
		});
		return Global.variables;
	}



	return Global.functions;
}
