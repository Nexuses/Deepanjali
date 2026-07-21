const steps = [
  {
    number: '1',
    title: 'KYC & Onboarding',
    text: 'Complete our accelerated digital KYC and AML profiling suite. Entity verification, beneficial ownership, and source-of-funds documentation reviewed within 24 hours.',
  },
  {
    number: '2',
    title: 'Rate Fixation',
    text: 'Secure and lock your target transaction spot rate through our live trading desk. Real-time bid/ask pricing with immediate execution confirmation for all qualifying orders.',
  },
  {
    number: '3',
    title: 'Documentation',
    text: 'Receive full transaction documentation including assay certification, chain of custody records, insurance confirmation, and settlement confirmation within agreed SLA.',
  },
  {
    number: '4',
    title: 'Physical Settlement',
    text: 'Choose secure physical collection at our showroom, insured armoured delivery, or direct transfer into your allocated vault account. All options fully insured door-to-door.',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="how-works" aria-label="How it works">
      <div className="how-works__inner">
        <p className="how-works__eyebrow">HOW IT WORKS</p>
        <h2 className="how-works__title">
          <span className="how-works__title-gold">From First Contact to </span>
          <span className="how-works__title-white">Physical Settlement</span>
        </h2>

        <ol className="how-works__steps">
          {steps.map((step) => (
            <li key={step.number} className="how-works__step">
              <span className="how-works__number" aria-hidden="true">
                {step.number}
              </span>
              <h3 className="how-works__stepTitle">{step.title}</h3>
              <p className="how-works__stepText">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
