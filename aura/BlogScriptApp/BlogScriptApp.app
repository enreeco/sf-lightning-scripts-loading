<aura:application>
    <aura:handler name="init" value="{!this}" action="{!c.doInit}" />
    <aura:handler event="aura:doneRendering" action="{!c.doneRendering}"/>
    
	<script src="/resource/BlogScripts/jquery.min.js" ></script>    
    <div id="afterLoad">Old value</div>
</aura:application>