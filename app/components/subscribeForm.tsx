'use client';
import React from "react";
import MailchimpSubscribe from 'react-mailchimp-subscribe';

export default function SubscribeForm() {
    return (
        <div className="flex pb-4 sm:p-0 text-xs ">
                <MailchimpSubscribe url={process.env.NEXT_PUBLIC_MAILCHIMP_URL} />
        </div>
    );
}
