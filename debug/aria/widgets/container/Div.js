/*
 * Aria Templates
 * Copyright Amadeus s.a.s.
 */
/**
 * @class aria.widgets.container.Div Class definition for the div widget.
 * @extends aria.widgets.container.Container
 */
Aria.classDefinition({
    $classpath : "aria.widgets.container.Div",
    $extends : "aria.widgets.container.Container",
    $dependencies : ["aria.utils.Dom", "aria.widgets.frames.FrameFactory"],
    $css : ["aria.widgets.container.DivStyle"],
    /**
     * Div constructor
     * @param {aria.widgets.CfgBeans:DivCfg} cfg the widget configuration
     * @param {aria.templates.TemplateCtxt} ctxt template context
     */
    $constructor : function (cfg, ctxt) {
        this.$Container.constructor.apply(this, arguments);
        // make a call to the AriaSkinInterface to get access to the skin object applicable here
        if (!this._frame) {
            /* this._frame could be overriden in sub-classes */
            this._frame = aria.widgets.frames.FrameFactory.createFrame({
                skinnableClass : this._skinnableClass,
                sclass : cfg.sclass,
                state : "normal",
                width : cfg.width,
                height : cfg.height,
                printOptions : cfg.printOptions,
                cssClass : cfg.cssClass,
                block : cfg.block,
                scrollBarX : cfg.scrollBarX,
                scrollBarY : cfg.scrollBarY
            });
        }
        this._skinObj = this._frame.getSkinObject();
        this._selected = false;
    },
    $destructor : function () {
        this._skinObj = null;
        this._initState = null;
        if (this._frame) {
            this._frame.$dispose();
            this._frame = null;
        }
        this.$Container.$destructor.call(this);
    },
    $prototype : {
        /**
         * Skinnable class to use for this widget.
         * @protected
         * @type String
         */
        _skinnableClass : "Div",

        /**
         * A method called when we initialize the object.
         */
        _init : function () {
            // link the frame
            var content = aria.utils.Dom.getDomElementChild(this.getDom(), 0);
            this._frame.linkToDom(content);

            aria.widgets.container.Div.superclass._init.call(this);
        },

        /**
         * The main entry point into the Div begin markup. Here we check whether it is a Div, defined in the AriaSkin
         * object, that has an image that is repeated as a background.
         * @param {aria.templates.MarkupWriter} out the writer Object to use to output markup
         */
        _widgetMarkupBegin : function (out) {
            this._frame.writeMarkupBegin(out);
        },

        /**
         * The main entry point into the Div end markup. Here we check whether it is a Div, defined in the AriaSkin
         * object, that has an image that is repeated as a background.
         * @param {aria.templates.MarkupWriter} out the writer Object to use to output markup
         */
        _widgetMarkupEnd : function (out) {
            this._frame.writeMarkupEnd(out);
        },

        /**
         * Change the width, height, max width and max height of the configuration, then update the container size
         * @param {aria.widgets.CfgBeans:DivCfg} cfg the widget configuration (only width, height, maxWidth, maxHeight,
         * maximized will be used)
         */
        updateSize : function (cfg) {
            var hasChanged = false, prefName, newVal;
            var prefs = ['maxWidth', 'maxHeight', 'width', 'height'];

            for (var i = 0, len = prefs.length; i < len; i++) {
                prefName = prefs[i];
                newVal = cfg[prefName];
                if (newVal && newVal != this._cfg[prefName]) {
                    this._cfg[prefName] = newVal;
                    hasChanged = true;
                }
            }

            if (cfg.maximized !== this._cfg.maximized) {
                this._cfg.maximized = cfg.maximized;
                hasChanged = true;
            }

            if (cfg.maximized) {
                this._cfg.widthMaximized = cfg.widthMaximized;
                this._cfg.heightMaximized = cfg.heightMaximized;
                hasChanged = true;
            } else {
                this._cfg.widthMaximized = null;
                this._cfg.heightMaximized = null;
            }

            if (hasChanged) {
                this.$Container._updateSize.call(this);
            }
        }
    }
});
