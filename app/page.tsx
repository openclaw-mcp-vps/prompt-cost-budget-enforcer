export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          AI Prompt Management
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Enforce Spending Limits on<br />
          <span className="text-[#58a6ff]">AI Prompt Experiments</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Set hard stops and real-time alerts before your OpenAI or Anthropic bill spirals out of control. Built for AI developers and product teams who iterate fast.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Start Enforcing Budgets — $15/mo
        </a>
        <ul className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-[#8b949e]">
          <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> OpenAI &amp; Anthropic support</li>
          <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Hard stops &amp; soft alerts</li>
          <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Real-time cost tracking</li>
          <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Per-experiment budgets</li>
        </ul>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$15</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited prompt experiments",
              "Budget alerts via email & webhook",
              "Hard stop enforcement",
              "Cost breakdown by model & prompt",
              "Team seat sharing",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which AI providers are supported?</h3>
            <p className="text-[#8b949e] text-sm">We currently support OpenAI (GPT-3.5, GPT-4, and variants) and Anthropic (Claude family). More providers are on the roadmap.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What happens when a budget limit is hit?</h3>
            <p className="text-[#8b949e] text-sm">You choose: receive an alert (email or webhook) and keep going, or enforce a hard stop that blocks further API calls until you reset or raise the limit.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I set budgets per experiment or globally?</h3>
            <p className="text-[#8b949e] text-sm">Both. Set a global monthly cap for your whole team, and granular per-experiment limits so individual prompt runs never blow the budget.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-8 text-center text-xs text-[#484f58]">
        © {new Date().getFullYear()} Prompt Cost Budget Enforcer. All rights reserved.
      </footer>
    </main>
  );
}
