"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const custom_element_validation_util_1 = require("./custom-element-validation-util");
const doNothing = () => { };
exports.CustomElementDecorator = (config) => (customElement) => {
    custom_element_validation_util_1.CustomElementValidationUtil.validateConfiguration(config);
    let templateElement = document.createElement("template");
    let style = config.style || "";
    templateElement.innerHTML = `<style>${style}</style>${config.template}`;
    const onCreateEvent = customElement.prototype.onCreate || doNothing;
    const onDestroyEvent = customElement.prototype.onDestroy || doNothing;
    const onRenderEvent = customElement.prototype.onRender || doNothing;
    customElement.prototype.onCreate = function () {
        const clone = document.importNode(templateElement.content, true);
        this.attachShadow({ mode: 'closed' }).appendChild(clone);
        onCreateEvent.call(this);
        if (this.onInit) {
            this.onInit();
        }
    };
    customElement.prototype.onRender = function () {
        if (this.beforeRender) {
            this.beforeRender();
        }
        onRenderEvent.call(this);
    };
    customElement.prototype.onDestroy = function () {
        if (this.beforeDestroy) {
            this.beforeDestroy();
        }
        onDestroyEvent.call(this);
    };
    window.customElements.define(config.selector, customElement);
};
