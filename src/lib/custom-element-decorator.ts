import {CustomElementConfig} from "./custom-element-models";
import {CustomElementValidationUtil} from "./custom-element-validation-util";

const doNothing = () => {};

export const CustomElementDecorator = (config: CustomElementConfig) => (customElement: Function) => {
    CustomElementValidationUtil.validateConfiguration(config);

    let templateElement = document.createElement("template");
    let style = config.style || "";

    templateElement.innerHTML = `<style>${style}</style>${config.template}`;

    const onCreateEvent = customElement.prototype.onCreate || doNothing;
    const onDestroyEvent = customElement.prototype.onDestroy || doNothing;
    const onRenderEvent = customElement.prototype.onRender || doNothing;

    customElement.prototype.onCreate = function() {
        const clone = document.importNode(templateElement.content, true);
        this.attachShadow({mode: 'open'}).appendChild(clone);

        onCreateEvent.call(this);
        if(this.onInit){
            this.onInit();
        }
    };

    customElement.prototype.onRender = function(){
        if(this.beforeRender){
            this.beforeRender();
        }
        onRenderEvent.call(this);
    };

    customElement.prototype.onDestroy = function(){
        if(this.beforeDestroy){
            this.beforeDestroy();
        }

        onDestroyEvent.call(this);
    };

    window.customElements.define(config.selector, customElement);
};
