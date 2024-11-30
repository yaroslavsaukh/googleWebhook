import { Injectable } from '@nestjs/common';
import * as sgMail from '@sendgrid/mail';

@Injectable()
export class EmailService {
  constructor() {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  }

  async sendEmail(to: string[], subject: string, text: string) {
    const msg = {
      to,
      from: 'your-email@example.com',
      subject,
      text,
    };
    await sgMail.sendMultiple(msg);
  }
}
