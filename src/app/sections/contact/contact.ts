import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SiteSettingsService } from '../../shared/site-settings.service';
import { TranslateModule } from '@ngx-translate/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, TranslateModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  private readonly EMAILJS_SERVICE_ID = 'service_7lcdmi7';
  private readonly EMAILJS_TEMPLATE_ID = 'template_bts2zey';
  private readonly EMAILJS_PUBLIC_KEY = 'DjihypjkmsDcF2dw8';

  protected feedbackMessage = '';
  protected feedbackVariant: 'success' | 'error' | '' = '';
  protected isSubmitting = false;

  protected readonly socials = [
    { name: 'WhatsApp', icon: 'fab fa-whatsapp fa-2x', color: '#25D366', href: 'https://wa.me/201211495945' },
    { name: 'Email', icon: 'fas fa-envelope fa-2x', color: '#EA4335', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=saaraa2333@gmail.com' },
    { name: 'GitHub', icon: 'fab fa-github fa-2x', color: '#333', href: 'https://github.com/SaraAhmed34' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin fa-2x', color: '#0077B5', href: 'https://www.linkedin.com/in/sara-ahmed-8a804b226/' }
  ];

  protected readonly contactForm;

  constructor(
    private readonly fb: FormBuilder,
    public readonly settings: SiteSettingsService
  ) {
    this.contactForm = this.fb.nonNullable.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });

    emailjs.init(this.EMAILJS_PUBLIC_KEY);
  }

  protected submitContact(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const { name, email, message } = this.contactForm.value;
    const templateParams = {
      from_name: name,
      from_email: email,
      message,
      to_email: 'saaraa2333@gmail.com'
    };

    this.isSubmitting = true;
    this.feedbackMessage = '';
    this.feedbackVariant = '';

    emailjs
      .send(
        this.EMAILJS_SERVICE_ID,
        this.EMAILJS_TEMPLATE_ID,
        templateParams,
        this.EMAILJS_PUBLIC_KEY
      )
      .then((response: EmailJSResponseStatus) => {
        this.feedbackMessage = 'Message sent successfully. Thank you!';
        this.feedbackVariant = 'success';
        this.contactForm.reset();
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        this.feedbackMessage = 'There was an error sending your message. Please try again later.';
        this.feedbackVariant = 'error';
      })
      .finally(() => {
        this.isSubmitting = false;
      });
  }

  protected hasError(field: 'name' | 'email' | 'message'): boolean {
    const control = this.contactForm.controls[field];
    return control.invalid && (control.touched || control.dirty);
  }
}
