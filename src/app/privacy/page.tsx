import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy | Mohammed Raza" };

export default function PrivacyPage() {
  return (
    <main className="policy-page">
      <div className="policy-inner">
        <a className="policy-back" href="/#contact">← Back to portfolio</a>
        <p className="eyebrow">Privacy / Mohammed Raza</p>
        <h1>Privacy Policy</h1>
        <p>This portfolio does not have an account, contact form, or on-site payment checkout. If you email me, I receive the address and information you choose to share so I can respond to your enquiry and discuss a potential project.</p>
        <h2>How your information is used</h2>
        <p>I use messages to communicate with you about your enquiry or our work. Please avoid sending sensitive personal information in an initial message. Your email provider and the services used to host this website may process technical information under their own policies.</p>
        <h2>Your choices</h2>
        <p>You can ask about information you have sent me, or request its correction or deletion, by emailing <a href="mailto:mohammedraza.tech@gmail.com">mohammedraza.tech@gmail.com</a>.</p>
      </div>
    </main>
  );
}
