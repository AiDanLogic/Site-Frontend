"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      name: "💡 Starter Plan",
      price: "Free",
      period: "",
      description: "Perfect for individuals who want to understand their daily productivity habits.",
      features: [
        "AI Dan basic assistant access",
        "Daily Focus Score tracking",
        "Task & calendar integration",
        "Weekly productivity summary",
        "Secure cloud storage",
      ],
      color: "from-blue-500 to-cyan-500",
      popular: false,
      cta: "Start Free with AI Dan",
    },
    {
      name: "🚀 Pro Plan",
      price: "$43",
      period: "/month",
      description: "Ideal for professionals who want to enhance their focus with AI-powered analytics.",
      features: [
        "Advanced focus analytics",
        "Smart task prioritization",
        "AI-guided goal tracking",
        "Real-time performance dashboards",
        "Smart reminders & workflow suggestions",
      ],
      color: "from-purple-500 to-pink-500",
      popular: true,
      cta: "Upgrade to Pro",
    },
    {
      name: "🧠 Elite Plan",
      price: "$95",
      period: "/month",
      description: "Best for leaders, creators, and teams who want full automation and insight-driven optimization.",
      features: [
        "Full AI Dan customization",
        "Advanced automation & scheduling",
        "Team productivity analytics",
        "Deep focus trend analysis",
        "24/7 priority AI support",
      ],
      color: "from-green-500 to-emerald-500",
      popular: false,
      enterprise: true,
      cta: "Experience AI Dan Elite",
    },
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            <span className="text-gradient-blue">Pricing</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your productivity journey
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring" }}
                >
                  <Sparkles className="w-4 h-4" />
                  Most Popular
                </motion.div>
              )}

              <motion.div
                className={`relative glassmorphism rounded-3xl p-8 h-full ${
                  plan.enterprise ? "glow-green" : ""
                }`}
                whileHover={{
                  scale: 1.05,
                  boxShadow: plan.enterprise
                    ? "0 0 60px rgba(34, 197, 94, 0.4)"
                    : "0 20px 60px rgba(59, 130, 246, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                animate={
                  plan.enterprise
                    ? {
                        boxShadow: [
                          "0 0 40px rgba(34, 197, 94, 0.2)",
                          "0 0 60px rgba(34, 197, 94, 0.4)",
                        ],
                      }
                    : {}
                }
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-5 rounded-3xl`}
                />

                <div className="relative z-10">
                  {/* Plan Header */}
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 text-green-500`} />
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    onClick={() => {
                      const contactElement = document.getElementById('contact');
                      if (contactElement) {
                        contactElement.scrollIntoView({
                          behavior: 'smooth',
                          block: 'start',
                        });
                      }
                    }}
                    className={`w-full py-4 rounded-full font-semibold transition-all ${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50"
                        : "glassmorphism hover:bg-secondary/50"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {plan.cta}
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground">
            ✨ 30-day money-back guarantee • No credit card required for trial
          </p>
        </motion.div>
      </div>
    </section>
  );
}