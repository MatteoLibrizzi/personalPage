import Gateway from "./gateway";

export default class NewsLetterSubscriber{
    private gw: Gateway;

    constructor(gw: Gateway){
        this.gw=gw;
    }

    subscribe (email: string){
        throw new Error("Subscribe not implemented");
    }
}