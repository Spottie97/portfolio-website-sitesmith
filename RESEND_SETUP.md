# Resend Email Integration Setup Guide

Your contact form is now fully integrated with Resend for sending emails. Here's how to complete the setup:

## 1. Create a Resend Account

1. Go to [resend.com](https://resend.com) and sign up for an account
2. Verify your email address

## 2. Get Your API Key

1. In your Resend dashboard, go to "API Keys"
2. Click "Create API Key"
3. Give it a name like "Portfolio Contact Form"
4. Copy the API key (starts with `re_`)

## 3. Set Up Your Domain (Required for Production)

1. In your Resend dashboard, go to "Domains"
2. Add your domain (e.g., `yoursite.com`)
3. Follow the DNS verification steps
4. Wait for verification to complete

## 4. Configure Environment Variables

Create a `.env.local` file in your project root with:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Resend Email Integration
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM_EMAIL=hello@your-domain.com

# Analytics (optional)
NEXT_PUBLIC_ENABLE_ANALYTICS=false
```

**Important Notes:**
- Replace `re_your_api_key_here` with your actual Resend API key
- Replace `hello@your-domain.com` with an email address from your verified domain
- For development, you can use `onboarding@resend.dev` as the from email

## 5. Test the Integration

1. Start your development server: `npm run dev`
2. Go to `/contact` page
3. Fill out and submit the contact form
4. Check your email for the notification
5. Check the sender's email for the auto-reply

## Features Included

✅ **Professional Email Templates**: Both HTML and text versions  
✅ **Auto-Reply**: Automatic confirmation email to the sender  
✅ **Error Handling**: Graceful fallback if Resend is not configured  
✅ **Security**: Environment variables and proper validation  
✅ **Responsive Design**: Mobile-friendly email templates  

## Email Templates

### Notification Email (to you)
- Clean, professional layout
- All form fields clearly displayed
- Reply-to set to sender's email
- Includes company, project type, and availability

### Auto-Reply Email (to sender)
- Personalized thank you message
- Sets expectations (response within 1 business day)
- Links to your portfolio
- Professional branding

## Troubleshooting

### "Resend not configured" message
- Check that your `.env.local` file exists and has the correct variables
- Restart your development server after adding environment variables

### Emails not sending
- Verify your API key is correct
- Ensure your domain is verified in Resend
- Check the browser console and server logs for errors

### Domain verification issues
- Make sure DNS records are properly configured
- Wait up to 24 hours for DNS propagation
- Use `onboarding@resend.dev` for testing during development

## Production Deployment

When deploying to production:

1. Add the environment variables to your hosting platform (Vercel, Netlify, etc.)
2. Ensure your domain is verified in Resend
3. Update `NEXT_PUBLIC_SITE_URL` to your production domain
4. Test the contact form in production

## Security Notes

- Never commit your `.env.local` file to version control
- Keep your Resend API key secure
- The contact form includes honeypot protection against spam
- Form submissions are validated with Zod schemas

Your contact form is now ready to receive and process inquiries professionally!
