({
	afterRender : function(){
        this.superAfterRender();
		try{
			$("#afterLoad").html("VALUE CHANGED!!!");
            console.log('afterRender: Success');
        }catch(Ex){
            console.log('afterRender: '+Ex);
        }
		
    }
})