import "@babel/polyfill";
import {CustomElementDecorator} from "./lib/custom-element-decorator";

@CustomElementDecorator({
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
class MyName extends HTMLElement {
    _name:string | null = null;

    constructor(){
        super();
    }

    get name():string | null {
        if (!this._name) {
            this._name = this.getAttribute("name")
        }

        return this._name;
    }

    onCreate():void{
        console.log("on create has been called");
    }

    beforeRender():void{
        console.log("before render has been called");
    }

    onRender():void{
        console.log("on render has been called");
    }

    onInit():void{
        console.log("on init has been called");
    }

    beforeDestroy():void{
        console.log("before destroy has been called");
    }

    onDestroy():void{
        console.log("on destroy has been called");
    }

}
