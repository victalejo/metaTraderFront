export class User{
    constructor(
        public name:string,
        public lastName:string,
        public phone:number,
        public clientId:string,
        public passMT5:string,
        public password:string,
        public confirmPassword:string,
        public country:string,
        public email:string,
        public avatar:any,
        public newPassMT5:string,
        public oldPass:string,
        public newPass:string
    ){
        
    }
}