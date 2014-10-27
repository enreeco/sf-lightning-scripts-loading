<aura:application>
    <aura:handler event="aura:doneRendering" action="{!c.doneRendering}"/>
    
	<script src="/resource/RequireJS" ></script>    
    <div id="afterLoad">Old value</div>
</aura:application>