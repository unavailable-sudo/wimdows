xui.Class('App.ColumnsNone15', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Div")
                .setHost(host,"Sign-in")
                .setName("Sign-in")
                .setDock("fill")
            );
            
            host.Sign-in.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input18")
                .setLeft("22.095238095238095em")
                .setTop("20.571428571428573em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Input Password")
                .setType("password")
                .setValue("Password")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});