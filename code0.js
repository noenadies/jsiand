gdjs.Nueva_32EscenaCode = {};


gdjs.Nueva_32EscenaCode.GDNuevoObjetoObjects1= [];
gdjs.Nueva_32EscenaCode.GDadelanteObjects1= [];
gdjs.Nueva_32EscenaCode.GDatrasObjects1= [];
gdjs.Nueva_32EscenaCode.GDNuevoObjeto2Objects1= [];
gdjs.Nueva_32EscenaCode.GDcambioObjects1= [];

gdjs.Nueva_32EscenaCode.conditionTrue_0 = {val:false};
gdjs.Nueva_32EscenaCode.condition0IsTrue_0 = {val:false};
gdjs.Nueva_32EscenaCode.condition1IsTrue_0 = {val:false};

gdjs.Nueva_32EscenaCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.Nueva_32EscenaCode.GDNuevoObjetoObjects1.length = 0;
gdjs.Nueva_32EscenaCode.GDadelanteObjects1.length = 0;
gdjs.Nueva_32EscenaCode.GDatrasObjects1.length = 0;
gdjs.Nueva_32EscenaCode.GDNuevoObjeto2Objects1.length = 0;
gdjs.Nueva_32EscenaCode.GDcambioObjects1.length = 0;


{


gdjs.Nueva_32EscenaCode.condition0IsTrue_0.val = false;
{
gdjs.Nueva_32EscenaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Nueva_32EscenaCode.condition0IsTrue_0.val) {
}

}


{

gdjs.Nueva_32EscenaCode.GDNuevoObjetoObjects1.createFrom(runtimeScene.getObjects("NuevoObjeto"));
gdjs.Nueva_32EscenaCode.GDadelanteObjects1.createFrom(runtimeScene.getObjects("adelante"));

gdjs.Nueva_32EscenaCode.condition0IsTrue_0.val = false;
{
gdjs.Nueva_32EscenaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("adelante", gdjs.Nueva_32EscenaCode.GDadelanteObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Nueva_32EscenaCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Nueva_32EscenaCode.GDNuevoObjetoObjects1.length ;i < len;++i) {
    gdjs.Nueva_32EscenaCode.GDNuevoObjetoObjects1[i].rotate(112, runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber((( gdjs.Nueva_32EscenaCode.GDNuevoObjetoObjects1.length === 0 ) ? 0 :gdjs.Nueva_32EscenaCode.GDNuevoObjetoObjects1[0].getAngle()));
}}

}


{

gdjs.Nueva_32EscenaCode.GDNuevoObjetoObjects1.createFrom(runtimeScene.getObjects("NuevoObjeto"));
gdjs.Nueva_32EscenaCode.GDatrasObjects1.createFrom(runtimeScene.getObjects("atras"));

gdjs.Nueva_32EscenaCode.condition0IsTrue_0.val = false;
{
gdjs.Nueva_32EscenaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("atras", gdjs.Nueva_32EscenaCode.GDatrasObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Nueva_32EscenaCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Nueva_32EscenaCode.GDNuevoObjetoObjects1.length ;i < len;++i) {
    gdjs.Nueva_32EscenaCode.GDNuevoObjetoObjects1[i].rotate(-20, runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber((( gdjs.Nueva_32EscenaCode.GDNuevoObjetoObjects1.length === 0 ) ? 0 :gdjs.Nueva_32EscenaCode.GDNuevoObjetoObjects1[0].getAngle()));
}}

}


{

gdjs.Nueva_32EscenaCode.GDNuevoObjeto2Objects1.createFrom(runtimeScene.getObjects("NuevoObjeto2"));

{for(var i = 0, len = gdjs.Nueva_32EscenaCode.GDNuevoObjeto2Objects1.length ;i < len;++i) {
    gdjs.Nueva_32EscenaCode.GDNuevoObjeto2Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}
}


{

gdjs.Nueva_32EscenaCode.GDNuevoObjetoObjects1.createFrom(runtimeScene.getObjects("NuevoObjeto"));
gdjs.Nueva_32EscenaCode.GDcambioObjects1.createFrom(runtimeScene.getObjects("cambio"));

gdjs.Nueva_32EscenaCode.condition0IsTrue_0.val = false;
{
gdjs.Nueva_32EscenaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > 360;
}if (gdjs.Nueva_32EscenaCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.Nueva_32EscenaCode.GDcambioObjects1.length ;i < len;++i) {
    gdjs.Nueva_32EscenaCode.GDcambioObjects1[i].setString("hora");
android();
    // giovanni
}
}{for(var i = 0, len = gdjs.Nueva_32EscenaCode.GDNuevoObjetoObjects1.length ;i < len;++i) {
    gdjs.Nueva_32EscenaCode.GDNuevoObjetoObjects1[i].rotate(0, runtimeScene);
}
}}

}

return;
}
gdjs['Nueva_32EscenaCode']= gdjs.Nueva_32EscenaCode;
