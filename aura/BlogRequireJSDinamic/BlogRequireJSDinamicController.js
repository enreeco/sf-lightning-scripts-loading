({
	/*
    	Sets up the RequireJS library (async load)
    */
    doInit : function(component, event, helper){
        
        if (typeof require !== "undefined") {
            var evt = $A.get("e.forcelogic2:BlogRequireJSEvent");
		    evt.fire();
        } else {
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            
            script.src = "/resource/RequireJS"; 
            script.type = 'text/javascript';
            script.key = "/resource/RequireJS"; 
            script.helper = this;
            script.id = "script_" + component.getGlobalId();
            var hlp = helper;
            script.onload = function scriptLoaded(){
                var evt = $A.get("e.forcelogic2:BlogRequireJSEvent");
		        evt.fire();
            };
            head.appendChild(script);
        }
    },
    
    initJS : function(component, event, helper){
        require.config({
            paths: {
                "jquery": "/resource/BlogScripts/jquery.min.js?",
                "bootstrap": "/resource/BlogScripts/boostrap.min.js?"
            }
        });
        console.log("RequiresJS has been loaded? "+(require !== "undefined"));
        //loading libraries sequentially
        require(["jquery"], function($) {
            console.log("jQuery has been loaded? "+($ !== "undefined"));
            require(["bootstrap"], function(bootstrap) {
                console.log("bootstrap has been loaded? "+(bootstrap !== "undefined"));
                $("#afterLoad").html("VALUE CHANGED!!!");
            });//require end
        });//require end
    }
})