import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { PostservicesService } from '../postservices.service';


@Component({
  selector: 'app-persondata',
  templateUrl: './persondata.component.html',
  styleUrls: ['./persondata.component.css']
})
export class PersondataComponent {
  persondataForm!: FormGroup;
  
  constructor(public postservicese: PostservicesService, public messageService:MessageService, private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.persondataForm = new FormGroup({
      FirstName: new FormControl('', [Validators.required]),
      LastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]), 
     
    })
  }

  submitReactiveForm(){
    
    if(this.persondataForm.valid){
      // messageService: this.messageService.add({severity:'warn', summary:'failed', detail:'Form not valid'}),
      console.log("hit1")
    this.postservicese.personUser(this.persondataForm.value).subscribe((data:any)=>{
      console.log(data);
      console.log("hit2")
      if(data=='inserted'){
        // confirm('Record Submited')
        this.messageService.add({severity:'success', summary:'Submit', detail:'Record Submit'});
        setTimeout(() => {
          this.router.navigate(['loginform'])
        }, 2000)
        this.router.navigate(['loginform'])
      }else{
        this.messageService.add({severity:'error', summary: 'Error', detail: 'All value are required'});
       
      }
    })
  }
  
  else{
    // alert('form not valid');
    this.messageService.add({severity:'error', summary: 'Error', detail: 'All value are required'}); 
   
  }
}
}
