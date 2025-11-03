import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, subject, message, 'cf-turnstile-response': token } = body;

    // Verify Turnstile token (following Cloudflare's verification pattern)
    if (!token) {
      return NextResponse.json(
        { error: 'Please complete the security verification by checking the box above' },
        { status: 400 }
      );
    }

    const secret = process.env.TURNSTILE_SECRET_KEY!;
    const params = new URLSearchParams({
      secret: secret,
      response: token
    });

    const turnstileResponse = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        body: params
      }
    );

    const verification = await turnstileResponse.json();

    if (!verification.success) {
      return NextResponse.json(
        { error: 'Please complete the security verification by checking the box above' },
        { status: 400 }
      );
    }

    // If verification passes, forward to Formspree
    const formData = new URLSearchParams();
    formData.append('fullName', fullName);
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('message', message);

    const formspreeResponse = await fetch(`https://formspree.io/f/${process.env.FORMSPEE_FORM_ID}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    if (!formspreeResponse.ok) {
      return NextResponse.json(
        { error: 'Failed to send message' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
