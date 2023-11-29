import { useEffect } from "react";

export class User {

    constructor(name, email, password, dob, phoneNo, registrationDate) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.dob = dob;
        this.phoneNo = phoneNo;
        this.registrationDate = registrationDate;
    }

    get name()                         {return this.name;}
    set name(newName)                  {this.name = newName;}
    get email()                        {return this.email;}
    set email(newEmail)                {this.email = newEmail;}
    get password()                     {return this.password;}
    set password(newPassword)          {this.password = newPassword;}
    get dob()                          {return this.dob;}
    set dob(newDob)                    {this.dob = newDob;}
    get phoneNo()                      {return this.phoneNo;}
    set phoneNo(newPhone)              {this.phoneNo = newPhone;}
    get registrationDate()             {return this.registrationDate;}
}

export class College {

    static deadlines = [

        {"type": 'Early Action', deadline: 'November 1', decision: 'December 10'},
        {"type": 'Early Decision', deadline: 'November 1', decision: 'December 10'},
        {"type": 'Regular Decision', deadline: 'January 1', decision: 'March/April'}
    ];

    static rating = [
        "1 star", "2 stars", "3 stars", "4 stars", "5 stars"
    ];

    constructor(name, location, fee, tuition, majors[], rating, ranking, acceptance) {
        this.
    }
}