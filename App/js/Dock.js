xui.Class('App.Dock', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Layout")
                .setHost(host,"ctl_layout5")
                .setItems([
                    {
                        "id" : "before",
                        "pos" : "before",
                        "size" : 80,
                        "min" : 10,
                        "locked" : false,
                        "folded" : false,
                        "hidden" : true,
                        "cmd" : true,
                        "itemDisplay" : "display:none;"
                    },
                    {
                        "id" : "main",
                        "min" : 10,
                        "size" : 650
                    },
                    {
                        "id" : "after",
                        "pos" : "after",
                        "size" : 150,
                        "min" : 70,
                        "max" : 400,
                        "locked" : false,
                        "folded" : false,
                        "hidden" : false,
                        "cmd" : true
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button6")
                .setDirtyMark(true)
                .setLeft("0.38095238095238093em")
                .setTop("17.523809523809526em")
                .setWidth("10.666666666666666em")
                .setHeight("4.9523809523809526em")
                .setCaption("Start")
                .setFontSize("2em")
                .setImageClass("fa fa-lg fa-bars")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "other",
                        "target" : "msg",
                        "args" : [
                            "Wimdows: Start",
                            "The Start Button isn't finished yet.\nI will do that later."
                        ],
                        "method" : "pop",
                        "event" : 1
                    },
                    "_xui_ui_button6_onclick"
                ])
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _xui_ui_button6_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
        }
    }
});