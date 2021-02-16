export class Payment{
    constructor(
        public city:string,
        public address:string,
        public numberCard:string,
        public expYearCard:string,
        public expMonthCard:string,
        public cvcCard:string,
        public docType:string,
        public docNumber:string,
    ){
        
    }
}