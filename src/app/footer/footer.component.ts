import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  community = ["Learners", "Partners", "Developers", "Beta Testers", "Translators", "Blog", "Tech Blog", "Teaching Center"]
  informations = ["About", "Pricing", "Blog", "Careers", "Contact",]
  more = ["Press", "Investors", "Terms", "Privacy", "Help", "Accessibility", "Contact", "Articles", "Directory", "Affiliates",]
  meetUsList = [
    { src: 'assets/address-white.png', alt: 'address', content: '1500 Treat Ave, Suite 200San Francisco, CA 94110' },
    { src: 'assets/mail-white.png', alt: 'mail', content: 'vctung@outlook.com' },
    { src: 'assets/phone-white.png', alt: 'phone', content: '1-800-800-2299 (Support)' }
  ]
  socialImages: any = [
    { src: 'assets/fb.png', tooltip: 'Facebook' },
    { src: 'assets/Pinterest.png', tooltip: 'Pinterest' },
    { src: 'assets/twitter.png', tooltip: 'Twitter' },
    { src: 'assets/insta.png', tooltip: 'Instagram' },

  ]
  constructor() { }



}
