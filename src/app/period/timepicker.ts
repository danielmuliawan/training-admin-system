export class TimePicker {
    constructor (
        private start: string,
        private end: string
    ){}
    public setStart(start:string){
        this.start = start;
    }
    public setEnd(end:string){
        this.end = end;
    }
    public getStart():string{
        return this.start;
    }
    public getEnd():string{
        return this.end;
    }
}