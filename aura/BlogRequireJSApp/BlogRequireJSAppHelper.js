({
	loadRequire : function(component) {
		require.config({
            paths: {
                "jquery": "/resource/BlogScripts/jquery.min.js?",
                "bootstrap": "/resource/BlogScripts/boostrap.min.js?"
            }
        });
        
        require(["jquery"], function($) {
            require(["bootstrap"], function(bootstrap, chartJS) {
                $("#afterLoad").html("VALUE CHANGED!!!");
            });
        });
	}
})