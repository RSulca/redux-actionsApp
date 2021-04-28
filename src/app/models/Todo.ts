export class Todo {

    public id:number;
    public text:string;
    public state:boolean;

    constructor(text:string) {
        this.text = text;
        this.id = new Date().getTime();
        this.state = false;
    }

}
