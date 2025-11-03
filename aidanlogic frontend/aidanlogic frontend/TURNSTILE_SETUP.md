# Cloudflare Turnstile Integration Setup

This guide will help you set up Cloudflare Turnstile CAPTCHA for the contact form.

## Step 1: Get Turnstile Keys

1. Go to [Cloudflare Turnstile Dashboard](https://dash.cloudflare.com/profile/api-tokens)
2. Navigate to **Turnstile** in the sidebar
3. Click **Add Site**
4. Fill in the form:
   - **Site name**: Your website name (e.g., "AiDanLogic Contact Form")
   - **Domain**: Add your domain(s):
     - For development: `localhost`
     - For production: `yourdomain.com`
5. Click **Create**

6. You'll receive two keys:
   - **Site Key** (public key): `0x4AAAAAAB81Kfz2L7wMdhcW` - used in frontend
   - **Secret Key** (private key): `0x4AAAAAAB81KZwmwSgSMwoc4EFEzsAtP3s` - used in backend

## Step 2: Configure Environment Variables

1. Copy the `.env.example` file to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

The keys are already configured in `.env.example`. The `.env.local` file will contain your actual Turnstile keys.

## Step 3: Restart Development Server

After updating the environment variables, restart your development server:

```bash
npm run dev
```

## How It Works

### Frontend (ContactSection.tsx)
1. User fills out the contact form
2. User checks the Turnstile box
3. Turnstile verifies the user is human
4. Token is stored in component state
5. Submit button becomes enabled
6. Form submits with Turnstile token

### Backend (API Route)
1. Receives form data + Turnstile token
2. Verifies token with Cloudflare servers
3. If valid, forwards message to Formspree
4. Returns success/error response

## Features

✅ **Checkbox Verification** - Standard "I'm not a robot" checkbox
✅ **Button Disabled** - Submit button disabled until verification
✅ **Visual Feedback** - Shows "Verification completed" message
✅ **Server-Side Validation** - Token verified on backend
✅ **Auto Reset** - Turnstile resets after successful submission
✅ **Error Handling** - Clear error messages for users

## Testing

1. Fill out the contact form
2. Check the Turnstile box
3. Wait for verification (usually instant)
4. Click "Send Message"
5. Check that the message appears in your Formspree dashboard

## Security Notes

- Never commit `.env.local` to version control (already in `.gitignore`)
- The secret key is only used server-side and never exposed to the client
- All form submissions are verified before being sent to Formspree
- Turnstile tokens are single-use and expire after 5 minutes

## Troubleshooting

### Turnstile not showing?
- Check that the script is loaded in `layout.tsx`
- Verify your site key is correct in `.env.local`
- Make sure you added `localhost` to allowed domains in Turnstile dashboard

### Verification failing?
- Check that your secret key is correct
- Verify the domain matches what's registered in Turnstile dashboard
- Check browser console for errors

### Button stays disabled?
- Open browser console and check for errors
- Verify the callback function `turnstileCallback` is being called
- Check that `captchaToken` state is being updated
