import {CustomElementDecorator} from "./lib/custom-element-decorator";

@CustomElementDecorator({
    selector: 'my-name',
    template: `<div>My name is Nour Eddin Khanjar</div>`,
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
    constructor(){
        super();
        this.onCreate();
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
