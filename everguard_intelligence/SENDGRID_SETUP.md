

# SendGrid Setup Guide for Everguard Intelligence

Your contact form is now integrated with SendGrid! Follow these steps to complete the setup:

## 🔧 SendGrid Account Setup

### 1. Create SendGrid Account
1. Go to [SendGrid.com](https://sendgrid.com/)
2. Sign up for a free account (100 emails/day free)
3. Verify your email address

### 2. Create API Key
1. Log into your SendGrid Dashboard
2. Navigate to **Settings** → **API Keys**
3. Click **Create API Key**
4. Name it: `Everguard Intelligence Website`
5. Select **Restricted Access**
6. Grant permissions for:
   - **Mail Send** (Full Access)
   - **Template Engine** (Read Access - optional)
7. Copy the generated API key

### 3. Set Up Sender Authentication
**Option A: Domain Authentication (Recommended)**
1. Go to **Settings** → **Sender Authentication**
2. Click **Authenticate Your Domain**
3. Follow the DNS setup instructions for your domain
4. Use emails like: `noreply@everguardintelligence.com`

**Option B: Single Sender Verification (Quick Setup)**
1. Go to **Settings** → **Sender Authentication**
2. Click **Create Single Sender**
3. Fill in your business details
4. Use this verified email as your sender

## 🔐 Environment Configuration

Update your `.env` file with your SendGrid credentials:

```env
# Replace these values with your actual SendGrid configuration
SENDGRID_API_KEY=SG.your_actual_api_key_here
SENDGRID_FROM_EMAIL=noreply@everguardintelligence.com  # Must be verified
SENDGRID_TO_EMAIL=contact@everguardintelligence.com    # Where inquiries are sent
```

## 📧 Email Templates Included

### Admin Notification Email
- **Purpose**: Alerts you when new inquiries are submitted
- **Features**: 
  - Urgency-based color coding
  - Complete inquiry details
  - Direct reply links
  - Professional formatting

### Client Acknowledgment Email  
- **Purpose**: Confirms receipt and sets expectations
- **Features**:
  - Professional branding
  - Response time commitments
  - Contact information
  - Confidentiality assurance

## ✅ Testing the Integration

1. **Update Environment Variables**: Replace placeholder values in `.env`
2. **Restart Application**: `yarn dev`
3. **Submit Test Form**: Use the contact form on your website
4. **Check Logs**: Monitor console for email sending results
5. **Verify Delivery**: Check both admin email and client confirmation

## 📊 Email Features

### Urgency Prioritization
- **Urgent**: Red badge, 24-hour response commitment
- **High**: Orange badge, 48-hour response commitment  
- **Medium**: Yellow badge, 1 business day response
- **Low**: Green badge, 2 business days response

### Professional Templates
- Responsive HTML design
- Everguard Intelligence branding
- Clear call-to-action buttons
- Mobile-friendly layouts

## 🚨 Troubleshooting

### Common Issues

1. **"Email configuration missing" warning**
   - Check your `.env` file has all three SendGrid variables
   - Restart the application after updating `.env`

2. **Emails not sending**
   - Verify your API key has Mail Send permissions
   - Ensure sender email is verified in SendGrid
   - Check SendGrid Activity feed for delivery status

3. **Emails going to spam**
   - Set up domain authentication (recommended)
   - Use a professional sender email address
   - Avoid spam trigger words in templates

### SendGrid Dashboard Monitoring
- **Activity**: Track email delivery status
- **Stats**: Monitor open/click rates
- **Suppressions**: Manage bounced/unsubscribed emails

## 💰 SendGrid Pricing
- **Free Tier**: 100 emails/day forever
- **Essentials**: $14.95/month for 50,000 emails
- **Pro**: $89.95/month for 100,000 emails

For a corporate investigation business, the free tier should be sufficient initially.

## 🔒 Security Best Practices

1. **API Key Security**
   - Never commit API keys to version control
   - Use environment variables only
   - Rotate keys regularly

2. **Email Security**
   - Use domain authentication
   - Monitor for bounces/complaints
   - Keep sender reputation clean

## 📞 Support

If you need help with SendGrid setup:
- **SendGrid Support**: [support.sendgrid.com](https://support.sendgrid.com)
- **SendGrid Documentation**: [docs.sendgrid.com](https://docs.sendgrid.com)

---

**Note**: The contact form will still work and save inquiries to your database even if SendGrid is not configured. The email functionality is an enhancement, not a requirement.

