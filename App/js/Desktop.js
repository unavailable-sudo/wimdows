xui.Class('App.Desktop', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Div")
                .setHost(host,"ctl_pane10")
                .setDock("fill")
            );
            
            host.ctl_pane10.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button13")
                .setLeft("0em")
                .setTop("43.42857142857143em")
                .setCaption("Image Button")
                .setImageClass("xui-icon-xui")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});