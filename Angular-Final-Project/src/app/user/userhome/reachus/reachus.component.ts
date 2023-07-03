import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-reachus',
  templateUrl: './reachus.component.html',
  styleUrls: ['./reachus.component.css']
})
export class ReachusComponent implements OnInit {

  feedbackForm:any;
  feedbacks: any[] = [];
types:string[]=["Lassi","Special Lassi","Super Saver Combos","Oreo Shakes","Cold Coffee","Smoothies With Ice Cream"]
      
      constructor(private fb:FormBuilder,private fs:FeedbackService,
        public feedbackService: FeedbackService,
        public route: Router,
        private snackbar: MatSnackBar){
        this.feedbackForm = this.fb.group({
          name:['',[Validators.required,Validators.minLength(3)]],
          message:['',[Validators.required,Validators.minLength(15)]],
          email:['',[Validators.required, Validators.pattern(
            "^[A-Za-z][A-Za-z_\.0-9]+@[A-Za-z]+[\.][A-Za-z]{2,5}$")]],
            
          type:['Lassi']
        });
       }
  ngOnInit(): void {
    this.getFeedbacks();
  }

       saveFeedback(){

        
        var temp:any={
          id: Math.round(Math.random()*10000),
          name: this.feedbackForm.value.name,
          email: this.feedbackForm.value.email,
          type:this.feedbackForm.value.type,
          message:this.feedbackForm.value.message
        
        }
        this.fs.postFeedback(temp).subscribe(
         { 
          next: data=>{
            this.snackbar.open("Your feedback is saved","Ok",{duration: 2000});
            this.route.navigate(["/reachus"]);
            this.getFeedbacks();
          },
          error:(error)=>alert('Not saved ---some Error')
        }
        )
      }
      getFeedbacks(){
        this.feedbackService.getFeedbacks().subscribe(res =>{
          this.feedbacks = res;
        })
      }
    }
