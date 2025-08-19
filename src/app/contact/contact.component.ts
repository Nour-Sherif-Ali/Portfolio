import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;

  contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'noursherif619@gmail.com',
      link: 'mailto:noursherif619@gmail.com',
      external: false
    },
    {
      icon: '📞',
      title: 'Phone',
      value: '+20 1153715515',
      link: 'tel:+201153715515',
      external: false
    },
    {
      icon: '🌐',
      title: 'Website',
      value: 'yourwebsite.com',
      link: 'https://yourwebsite.com',
      external: true
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Cairo, Egypt',
      link: '#',
      external: false
    }
  ];

  socialLinks = [
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'http://www.linkedin.com/in/nour-sherif-nsa'
    },
    {
      name: 'GitHub',
      icon: '💻',
      url: 'https://github.com/Nour-Sherif-Ali'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: 'https://twitter.com/yourusername'
    },
    {
      name: 'Instagram',
      icon: '📷',
      url: 'https://instagram.com/yourusername'
    }
  ];

  constructor(private formBuilder: FormBuilder) {
    // Initialize EmailJS with your public key
    emailjs.init("fJ8M2HvXZlDzFldNz");
  }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitMessage = '';

      try {
        // Send email using EmailJS
        await emailjs.send(
          'service_shtkogb', 
          'template_7kk4kkd', 
          {
            from_name: `${this.contactForm.value.firstName} ${this.contactForm.value.lastName}`,
            from_email: this.contactForm.value.email,
            subject: this.contactForm.value.subject,
            message: this.contactForm.value.message,
            to_email: 'noursherif619@gmail.com'
          }
        );
        
        this.submitSuccess = true;
        this.submitMessage = '✅ Thank you! Your message has been sent successfully. I\'ll get back to you soon.';
        this.contactForm.reset();
      } catch (error) {
        console.error('Email sending error:', error);
        this.submitSuccess = false;
        this.submitMessage = '❌ Sorry, there was an error sending your message. Please try again.';
      } finally {
        this.isSubmitting = false;
      }
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }
}