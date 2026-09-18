import type { Metadata } from "next";

export const metadata: Metadata = { title: "Payment Terms | Mohammed Raza" };

export default function PaymentPolicyPage() {
  return (
    <main className="policy-page">
      <div className="policy-inner">
        <a className="policy-back" href="/#contact">← Back to portfolio</a>
        <p className="eyebrow">Working together / Mohammed Raza</p>
        <h1>Payment Terms</h1>
        <p>Payments are not collected through this website. Every project begins with a written proposal or agreement that sets out the work, price, payment schedule, and delivery milestones before work starts.</p>
        <h2>Invoices and changes</h2>
        <p>Payment methods and due dates are confirmed in the project agreement. If the scope changes, any effect on cost or timing is discussed and agreed before additional work begins.</p>
        <h2>Cancellations and refunds</h2>
        <p>Cancellation and refund terms are set out in the project agreement and remain subject to applicable law. If you have a question about an invoice or payment, email <a href="mailto:mohammedraza.tech@gmail.com">mohammedraza.tech@gmail.com</a>.</p>
      </div>
    </main>
  );
}
