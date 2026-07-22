import React from 'react';

export default function BeginConversation() {
  return (
    <section className="conversation" aria-label="Begin the conversation">
      <div className="conversation__inner">
        <div className="conversation__card">
          <p className="conversation__label">BEGIN THE CONVERSATION</p>
          <span className="conversation__rule" aria-hidden="true" />

          <h2 className="conversation__title">
            <span>&quot;Optimize your precious metal allocations</span>
            <br />
            <span>with a trusted market participant.&quot;</span>
          </h2>

          <p className="conversation__text">
            Speak directly with our institutional desk. No intermediaries. No
            delays.
          </p>

          <div className="conversation__actions" role="group" aria-label="CTA">
            <a className="conversation__btn conversation__btn--primary" href="#contact">
              Connect to Desk
            </a>
            <a
              className="conversation__btn conversation__btn--secondary"
              href="#contact"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
