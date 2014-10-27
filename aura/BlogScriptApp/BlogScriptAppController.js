({
	doInit : function(component, event, helper) {
        try{
			$("#afterLoad").html("VALUE CHANGED!!!");
            console.log('doInit: Success');
        }catch(Ex){
            console.log('doInit: '+Ex);
        }
	},
    doneRendering : function(component, event, helper) {
        try{
			$("#afterLoad").html("VALUE CHANGED!!!");
            console.log('doneRendering: Success');
        }catch(Ex){
            console.log('doneRendering: '+Ex);
            
            setTimeout(function(){
                try{
                    $("#afterLoad").html("VALUE CHANGED!!!");
                    console.log('doneRendering-Timeout: Success');
                }catch(Ex){
                    console.log('doneRendering-Timeout: '+Ex);
                }
            }, 100);
        }
	}
})