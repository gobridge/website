import React from 'react'

const Privacy = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col content-center justify-center w-2/3 p-5 m-10 md:flex-col lg:flex-row">
                <div className="flex flex-col justify-center order-2 md:w-full md:pr-5 md:order-2">
                    <h1 className="mb-4 text-3xl font-bold text-left md:text-5xl">
                        Privacy Policy
                    </h1>
                    <p className="text-2xl text-left text-gray-600 md:text-3xl">
                    # Privacy Policy

Last Updated: [Date]

Welcome to [Your Website Name] ("us", "we", or "our"). Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [www.yourwebsite.com] (the "Site"). Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site.

## Information We Collect

### Personal Information

While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include but is not limited to:

- Name
- Email address

## How We Use Your Information

We may use the information we collect for various purposes, including:

- To send periodic emails with updates, promotions, and other information related to our services.

## Your Choices

You can opt out of receiving promotional emails from us by following the unsubscribe instructions provided in the email or contacting us directly.

## Information Security

We use reasonable measures to protect your personal information against unauthorized access or disclosure.

## Changes to This Privacy Policy

We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.

## Contact Us

If you have any questions about this Privacy Policy, please contact us at [contact@yourwebsite.com].

                    </p>
                </div>
                <div className="order-1 md:w-1/2 md:order-1">
                    <img
                        src="images/dropmic.png"
                        alt="Gophers Banner"
                        className="w-15 h-90 md:w-full"
                    />
                </div>
            </div>
        </div>
    );
}

export default Privacy