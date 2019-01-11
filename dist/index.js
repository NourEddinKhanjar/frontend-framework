"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("@babel/polyfill");
const custom_element_decorator_1 = require("./lib/custom-element-decorator");
let MyName = class MyName extends HTMLElement {
    constructor() {
        super();
        this._name = null;
    }
    get name() {
        if (!this._name) {
            this._name = this.getAttribute("name");
        }
        return this._name;
    }
    onCreate() {
        console.log("on create has been called");
    }
    beforeRender() {
        console.log("before render has been called");
    }
    onRender() {
        console.log("on render has been called");
    }
    onInit() {
        console.log("on init has been called");
    }
    beforeDestroy() {
        console.log("before destroy has been called");
    }
    onDestroy() {
        console.log("on destroy has been called");
    }
};
MyName = __decorate([
    custom_element_decorator_1.CustomElementDecorator({
        selector: 'my-name',
        template: `<div>My name is {{name}}</div>`,
        style: `:host {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      color: red;
      background: #eee;
    }`
    })
], MyName);
