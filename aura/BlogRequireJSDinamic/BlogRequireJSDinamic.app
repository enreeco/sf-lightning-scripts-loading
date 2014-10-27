<aura:application>
	<aura:handler event="forcelogic2:BlogRequireJSEvent" action="{!c.initJS}"/>
    <aura:registerEvent type="forcelogic2:BlogRequireJSEvent" name="requireJSEvent"/>
    <aura:handler name="init" value="{!this}" action="{!c.doInit}" />
    <div id="afterLoad">Old value</div>
</aura:application>