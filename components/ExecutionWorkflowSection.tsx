const steps = [
  {
    number: '01',
    title: 'Compliance Verification',
    text: 'Complete our accelerated digital KYC and AML profiling suite to activate your institutional or private trading profile. All documentation reviewed within 24 hours.',
    items: [
      'Entity registration & beneficial ownership verification',
      'Source-of-funds documentation review',
      'AML-CFT profile activation',
      'Dedicated dealer assignment upon approval',
    ],
    icon: 'compliance' as const,
  },
  {
    number: '02',
    title: 'Rate Fixation',
    text: 'Secure and lock your target transaction spot rate through our online portal or by directly calling our active live trading desk. Rate confirmed in real time.',
    items: [
      'Live bid/ask rate confirmed by named dealer',
      'Rate locked at agreed volume and weight',
      'Transaction term sheet issued immediately',
      'Settlement SLA confirmed at rate fixation',
    ],
    icon: 'rate' as const,
  },
  {
    number: '03',
    title: 'Physical Settlement',
    text: 'Choose between fully secure physical collection at our primary showroom, insured armoured delivery, or immediate transfer into your allocated vault account.',
    items: [
      'Secure collection — appointment at our showroom',
      'Insured armoured delivery to verified address',
      'Transfer to allocated vault account',
      'Full documentation & assay cert issued on delivery',
    ],
    icon: 'settlement' as const,
  },
];

function StepIcon({ type }: { type: (typeof steps)[number]['icon'] }) {
  return (
    <span className="execution-workflow__icon" aria-hidden="true">
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="24" fill="rgba(201, 166, 93, 0.18)" />
        {type === 'compliance' && (
          <g
            stroke="#C9A65D"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="15" y="12" width="18" height="24" rx="2" />
            <path d="M19 12.5V11a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.5" />
            <path d="M19 22h10M19 27h10M19 32h6" />
            <circle cx="31" cy="33" r="5.5" fill="#F7F3EE" />
            <path d="M28.6 33.1l1.7 1.7 3.4-3.6" />
          </g>
        )}
        {type === 'rate' && (
          <g
            stroke="#C9A65D"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="24" cy="24" r="11" />
            <path d="M24 16v16M18 20.5c1.8-1.6 3.8-2.4 6-2.4 3.4 0 5.8 1.6 5.8 4.1S27.4 26.3 24 26.3c-3.5 0-6 1.5-6 4.1 0 2.5 2.6 4.1 6.2 4.1 2.1 0 4-.7 5.6-2" />
          </g>
        )}
        {type === 'settlement' && (
          <g
            stroke="#C9A65D"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 34V22l12-8 12 8v12" />
            <path d="M12 34h24" />
            <path d="M18 34V24h5v10M25 34V22h5v12" />
            <path d="M21 18h6" />
          </g>
        )}
      </svg>
    </span>
  );
}

export default function ExecutionWorkflowSection() {
  return (
    <section
      className="execution-workflow"
      aria-labelledby="execution-workflow-heading"
    >
      <div className="execution-workflow__inner">
        <header className="execution-workflow__header">
          <p className="execution-workflow__eyebrow">EXECUTION WORKFLOW</p>
          <span className="execution-workflow__rule" aria-hidden="true" />
          <h2
            className="execution-workflow__title"
            id="execution-workflow-heading"
          >
            Three Steps to Physical Settlement
          </h2>
        </header>

        <ol className="execution-workflow__grid">
          {steps.map((step, index) => (
            <li key={step.number} className="execution-workflow__card">
              <span className="execution-workflow__ribbon" aria-hidden="true">
                {step.number}
              </span>

              <StepIcon type={step.icon} />

              <h3 className="execution-workflow__card-title">{step.title}</h3>
              <p className="execution-workflow__card-text">{step.text}</p>

              <span className="execution-workflow__divider" aria-hidden="true" />

              <ul className="execution-workflow__list">
                {step.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              {index < steps.length - 1 ? (
                <span
                  className="execution-workflow__arrow"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M9 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
