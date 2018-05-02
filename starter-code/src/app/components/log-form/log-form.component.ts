import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from '../../services/access-control-log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  feedbackEnabled = false;
  error = null;
  processing = false;
  name: String;
  message: String;


  constructor(private accessControlLogService: AccessControlLogService) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.accessControlLogService.addAccessItem(this.name,this.message);
      setTimeout(()=> {
        this.processing = false;
        this.name = "";
        this.message= "";
        this.feedbackEnabled = false;
      },1500);

        } else {
          this.processing = false;
        };
    }
  }
