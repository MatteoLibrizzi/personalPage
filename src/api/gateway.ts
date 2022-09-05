
export default class Gateway{
    private url: string;

    constructor (url: string){
        this.url=url;
    }

    makeRequest(headers: Object, body: Object){
        
        throw new Error("Subscribe not implemented");
    }


}