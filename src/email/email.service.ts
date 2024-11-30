import { Injectable } from '@nestjs/common';
import * as mailgun from 'mailgun-js';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class EmailService {
  private mg: mailgun.Mailgun;

  constructor() {
    this.mg = mailgun({
      apiKey: process.env.MAILGUN_API_KEY,
      domain: process.env.MAILGUN_DOMAIN,
    });
  }

  async sendEmail(to: string[], subject: string, text: string) {
    const data = {
      from: 'yaroslav2002vas@gmail.com', // Ваша відправна адреса
      to: to.join(','), // перетворюємо масив адрес на рядок
      subject,
      text,
    };

    try {
      // Відправка email
      const response = await this.mg.messages().send(data);
      console.log('Email sent:', response);
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send email');
    }
  }
}
