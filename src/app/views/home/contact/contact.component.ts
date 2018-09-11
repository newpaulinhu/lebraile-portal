import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Email } from '../../../models/email';
import { EmailService } from '../../../services/email.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray;
  contactForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private emailService: EmailService
  ) { }


  contato(){
    const email = new Email(this.contactForm.value.name,  this.contactForm.value.email, this.contactForm.value.subject,  this.contactForm.value.message);
    this.emailService.enviarEmail(email).subscribe(d => {
      alert('Email enviado com sucesso!')
    }, err => {
      console.log(err);
    });
  }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', Validators.required]
    })
  }

}
