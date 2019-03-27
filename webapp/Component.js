import * as UIComponent from "sap/ui/core/UIComponent";
import * as models from "./model/models";

export default UIComponent.extend("my.ui5app.Component", {

    metadata: {
        manifest: "json"
    },

    /**
     * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
     * @public
     * @override
     */
    init() {
        // call the base component's init function
        UIComponent.prototype.init.apply(this, arguments);

        // enable routing
        this.getRouter().initialize();

        // set the device model
        this.setModel(models.createDeviceModel(), "device");

        // set the foobar model
        this.setModel(models.createFooBarModel(), "foobar");

    }

});