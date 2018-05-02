import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {
  logMessages: Array<any> = [];

  constructor() { }

  addAccessItem(person, message) {
    let date = new Date();
    this.logMessages.push({person,message,date});
    console.log(this.logMessages);
    this.logMessages.forEach((elements, index) => {
      console.log("Person"+this.logMessages[index].person);
      console.log("Message"+this.logMessages[index].message);
      console.log("Time"+this.logMessages[index].date);
    });
  }

  getAccessLog(): Array<any> {
    return this.logMessages;
  }
}
