interface UserType {
    name : string;
    age : number;
    birthdate : string;
    sex : string;
    phoneNumber : string;
    address : string;
}

export class User implements UserType {
    name : string;
    age : number;
    birthdate : string;
    sex : string;
    phoneNumber : string;
    address : string;

    constructor( _name : string , _age : number , _birthdate : string , _sex : string , _phoneNumber : string , _address : string ) {
        this.name = _name;
        this.age = _age;
        this.birthdate = _birthdate;
        this.sex = _sex;
        this.phoneNumber = _phoneNumber;
        this.address = _address;
    }
}
