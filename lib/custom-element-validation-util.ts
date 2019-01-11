import {CustomElementConfig} from "./custom-element-models";


const ValidationMessages = {
    MISSING_SELECTOR: "Custom element configuration must have a selector",
    INVALID_SELECTOR: "Custom element selector must have -",
    INVALID_SELECTOR_TYPE: "Custom element selector must be string",
    MISSING_TEMPLATE: "Custom element configuration must have a template",
    INVALID_TEMPLATE_TYPE: "Custom element template must be string",
    INVALID_STYLE_TYPE: "Custom element style must be string"
};


export class CustomElementValidationUtil{

    public static validateConfiguration(config:CustomElementConfig){
        if(!config.selector){
            CustomElementValidationUtil.throwError(ValidationMessages.MISSING_SELECTOR);
        }

        if(typeof config.selector !== "string"){
            CustomElementValidationUtil.throwError(ValidationMessages.INVALID_SELECTOR_TYPE);
        }

        if(!config.template){
            CustomElementValidationUtil.throwError(ValidationMessages.MISSING_TEMPLATE);
        }

        if(typeof config.template !== "string"){
            CustomElementValidationUtil.throwError(ValidationMessages.INVALID_TEMPLATE_TYPE);
        }

        let hasStyle = config.style != null;
        if(hasStyle && (typeof config.style !== "string")){
            CustomElementValidationUtil.throwError(ValidationMessages.INVALID_STYLE_TYPE);
        }


        CustomElementValidationUtil.validateSelector(config.selector);
    }

    private static validateSelector(selector:string){
        if(selector.indexOf("-") == -1){
            CustomElementValidationUtil.throwError(ValidationMessages.INVALID_SELECTOR);
        }
    }

    private static throwError(message:string){
        throw Error(message);
    }
}
