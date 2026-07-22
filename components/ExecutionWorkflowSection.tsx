import {
  Building2,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  type LucideIcon,
} from 'lucide-react';

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

type StepIconType = (typeof steps)[number]['icon'];

const stepIcons: Record<StepIconType, LucideIcon> = {
  compliance: ClipboardCheck,
  rate: CircleDollarSign,
  settlement: Building2,
};

function StepIcon({ type }: { type: StepIconType }) {
  const Icon = stepIcons[type];
  return (
    <span className="execution-workflow__icon" aria-hidden="true">
      <Icon />
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
                  <ChevronRight />
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
