import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit{

  public contactForm!: FormGroup;
  
  constructor(private fb:FormBuilder, private api: ApiService ,private toastService: NgToastService){}

  ngOnInit(): void {
   this.contactForm=this.fb.group({
    name:[''],
    email:[''],
    message:['']
   })
  }

  submit(){
    this.api.postContact(this.contactForm.value)
    .subscribe(res=>{
      this.toastService.success({detail:"Succes",summary:"Votre reaction est envoye",duration:3000});
      this.contactForm.reset();
    })
  }

}
