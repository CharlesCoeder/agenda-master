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

    static ratings = [
        "1 star", "2 stars", "3 stars", "4 stars", "5 stars"
    ];

    constructor(name, location, fee, tuition, majors, rating, ranking, acceptance, deadline) {
        this.name = name;
        this.location = location;
        this.fee = fee;
        this.tuition = tuition;
        this.majors = majors;
        this.rating = rating;
        this.ranking = ranking;
        this.acceptance = acceptance;
        this.deadline = deadline;
    }

    get name()                         {return this.name;}
    set name(newName)                  {this.name = newName;}
    get location()                     {return this.location;}
    set location(newLocation)          {this.location = newLocation;}
    get fee()                          {return this.fee;}
    set fee(newFee)                    {this.fee = newFee;}
    get tuition()                      {return this.tuition;}
    set tuition(newTuition)            {this.tuition = newTuition;}
    get majors()                       {return this.majors;}
    set majors(newMajors)              {this.majors = newMajors;}
    get rating()                       {return this.rating;}
    set rating(newRating)              {this.rating = newRating;}
    get ranking()                      {return this.ranking;}
    set ranking(newRanking)            {this.ranking = newRanking;}
    get acceptance()                   {return this.acceptance;}
    set acceptance(newAcceptance)      {this.acceptance = newAcceptance;}
    get deadline()                     {return this.deadline;}
    set deadline(newDeadline)          {this.deadline = newDeadline;}
    get rating()                       {return this.rating;}
    set rating(newRating)              {this.rating = newRating;}
}

export class FinancialAid {

    constructor(name, description, requirements, deadline, amount, college, links) {
        this.name = name;
        this.description = description;
        this.requirements = requirements;
        this.deadline = deadline;
        this.amount = amount;
        this.college = college;
        this.links = links;
    }

    get name()                         {return this.name;}
    set name(newName)                  {this.name = newName;}
    get description()                  {return this.description;}
    set description(newDescription)    {this.description = newDescription;}
    get requirements()                 {return this.requirements;}
    set requirements(newRequirements)  {this.requirements = newRequirements;}
    get deadline()                     {return this.deadline;}
    set deadline(newDeadline)          {this.deadline = newDeadline;}
    get amount()                       {return this.amount;}
    set amount(newAmount)              {this.amount = newAmount;}
    get college()                      {return this.college;}
    set college(newCollege)            {this.college = newCollege;}
    get links()                        {return this.links;}
    set links(newLinks)                {this.links = newLinks;}
}

export class Tasks {

    static status = [
        "Assigned", "In Progress", "Completed", "Overdue"
    ]

    static priority = [
        "Urgent", "Important", "To-do"
    ]

    constructor(name, description, deadline, userName, priority, status) {
        this.name = name;
        this.description = description;
        this.deadline = deadline;
        this.userName = userName;
        this.priority = priority;
        this.status = status;
    }

    get name()                         {return this.name;}
    set name(newName)                  {this.name = newName;}
    get description()                  {return this.description;}
    set description(newDescription)    {this.description = newDescription;}
    get deadline()                     {return this.deadline;}
    set deadline(newDeadline)          {this.deadline = newDeadline;}
    get userName()                     {return this.userName;}
    set userName(newUserName)          {this.userName = newUserName;}
    get priority()                     {return this.priority;}
    set priority(newPriority)          {this.priority = newPriority;}
    get status()                       {return this.status;}
    set status(newStatus)              {this.status = newStatus;}
}

export class Timeline {

    static day = [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    ]

    constructor(name, task_name, aidName, collegeName) {
        this.name = name;
        this.task_name = task_name;
        this.aidName = aidName;
        this.collegeName = collegeName;
    }

    get name()                         {return this.name;}
    set name(newName)                  {this.name = newName;}
    get task_name()                    {return this.task_name;}
    set task_name(newTaskName)         {this.task_name = newTaskName;}
    get aidName()                      {return this.aidName;}
    set aidName(newAidName)            {this.aidName = newAidName;}
    get collegeName()                  {return this.collegeName;}
    set collegeName(newCollegeName)    {this.collegeName = newCollegeName;}
}