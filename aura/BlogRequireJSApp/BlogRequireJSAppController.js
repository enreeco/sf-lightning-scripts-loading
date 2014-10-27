({
	doneRendering : function(component, event, helper) {
        try{
            helper.loadRequire(component);
            console.log('doneRendering: Success');
        }catch(ex){
            console.log('doneRendering: '+ex);
            setTimeout(function(){
                try{
                    helper.loadRequire(component);
                    console.log('doneRendering-Timeout: Success');
                }catch(ex){
                	console.log('doneRendering-Timeout: '+ex);
                }
            }, 100);
        }
	}
})