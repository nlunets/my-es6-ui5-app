import * as Foo from "./Foo";
import * as Bar from "./Bar";
import * as JSONModel from "sap/ui/model/json/JSONModel";
import * as Device from "sap/ui/Device";

export default {

    createDeviceModel() {
        var oModel = new JSONModel(Device);
        oModel.setDefaultBindingMode("OneWay");
        return oModel;
    },

    createFooBarModel() {
        var oModel = new JSONModel({
            foo: new Foo("Hello Foo").prototypeMethod(),
            bar: new Bar("Hello Bar").prototypeMethod()
        });
        oModel.setDefaultBindingMode("OneWay");
        return oModel;
    }

};
