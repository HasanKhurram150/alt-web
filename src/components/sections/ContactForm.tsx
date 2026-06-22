"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import {
  Check,
  ChevronDown,
  Search,
  Building2,
  User,
  Sparkles,
  ArrowRight,
  Loader2,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { contactFormSchema } from "@/lib/schemas/contact";
import { sendContactEmail } from "@/app/api/actions/contact";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const INDUSTRIES = [
  "Artificial Intelligence & ML",
  "Software-as-a-Service (SaaS)",
  "E-Commerce & Retail",
  "FinTech & Blockchain",
  "Healthcare & BioTech",
  "Education & EdTech",
  "Media & Entertainment",
  "Creative Agency & Design",
  "Cybersecurity",
  "Other (Type custom...)",
];

interface Props {}

export default function ContactForm({}: Props) {
  const [formType, setFormType] = useState<"individual" | "corporation">(
    "individual",
  );
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [idea, setIdea] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Industry dropdown states
  const [isIndustryOpen, setIsIndustryOpen] = useState(false);

  // Submission/Validation states
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Click outside references

  const industryDropdownRef = useRef<HTMLDivElement>(null);

  // GSAP animation refs
  const formContainerRef = useRef<HTMLDivElement>(null);
  const tabIndicatorRef = useRef<HTMLDivElement>(null);
  const companyNameContainerRef = useRef<HTMLDivElement>(null);
  const industryDropdownBoxRef = useRef<HTMLDivElement>(null);

  // Form Switch / Success Card Transition
  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const element = formContainerRef.current?.querySelector(
        "[data-animate-root]",
      );
      if (element) {
        gsap.fromTo(
          element,
          { opacity: 0, y: 10, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: "power2.out" },
        );
      }
    },
    { dependencies: [isSubmitted], scope: formContainerRef },
  );

  // Sliding Tab Indicator
  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (tabIndicatorRef.current) {
        gsap.to(tabIndicatorRef.current, {
          xPercent: formType === "individual" ? 0 : 100,
          x: formType === "individual" ? 0 : 4,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    },
    { dependencies: [formType] },
  );

  // Company Name field mount animation
  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (formType === "corporation" && companyNameContainerRef.current) {
        gsap.fromTo(
          companyNameContainerRef.current,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" },
        );
      }
    },
    { dependencies: [formType] },
  );

  // Industry Dropdown animation
  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (isIndustryOpen && industryDropdownBoxRef.current) {
        gsap.fromTo(
          industryDropdownBoxRef.current,
          { opacity: 0, y: 5 },
          { opacity: 1, y: 0, duration: 0.15, ease: "power1.out" },
        );
      }
    },
    { dependencies: [isIndustryOpen] },
  );

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        industryDropdownRef.current &&
        !industryDropdownRef.current.contains(event.target as Node)
      ) {
        setIsIndustryOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter industries based on current input text
  const filteredIndustries =
    industry.trim() === ""
      ? INDUSTRIES
      : INDUSTRIES.filter((ind) =>
          ind.toLowerCase().includes(industry.toLowerCase()),
        );

  // Form validation handler using Zod
  const validateForm = () => {
    const result = contactFormSchema.safeParse({
      formType,
      companyName: formType === "corporation" ? companyName : undefined,
      industry,
      idea,
      email,
      phone,
    });

    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const path = issue.path[0] as string;
        if (!newErrors[path]) {
          newErrors[path] = issue.message;
        }
      });
      setErrors(newErrors);
      return false;
    }

    setErrors({});
    return true;
  };

  // Submit handler connecting to Resend Server Action
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const payload = {
      formType,
      companyName: formType === "corporation" ? companyName : undefined,
      industry,
      idea,
      email,
      phone,
    };

    const res = await sendContactEmail(payload);

    setIsSubmitting(false);

    if (res.success) {
      setIsSubmitted(true);
    } else {
      setErrors({
        form: res.error || "Failed to formulate connection. Please try again.",
      });
    }
  };

  // Reset form
  const handleReset = () => {
    setCompanyName("");
    setIndustry("");
    setIdea("");
    setEmail("");
    setPhone("");
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div
      ref={formContainerRef}
      className="dark:bg-[var(--surface)] bg-[var(--bg)]/50 backdrop-blur-sm border border-[var(--border)] rounded-2xl p-6 md:p-10 shadow-2xl relative"
    >
      {!isSubmitted ? (
        <div data-animate-root>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Segmented Control / Tab Switcher */}
            <div className="space-y-2">
              <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] dark:text-[var(--text-secondary-dark)]  ">
                I am connecting as an:
              </label>
              <div className="grid grid-cols-2 bg-[var(--surface-2)] p-1 rounded-xl border border-[var(--border)] relative">
                <button
                  type="button"
                  onClick={() => {
                    setFormType("individual");
                    // Clean company errors if swapping
                    const newErr = { ...errors };
                    delete newErr.companyName;
                    delete newErr.form;
                    setErrors(newErr);
                  }}
                  className={cn(
                    "relative z-10 py-3 rounded-lg text-sm font-mono tracking-wider transition-all duration-300 uppercase flex items-center justify-center gap-2",
                    formType === "individual"
                      ? "text-[var(--bg)] font-bold"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]",
                  )}
                >
                  <User className="w-4 h-4" /> Individual
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setFormType("corporation");
                    const newErr = { ...errors };
                    delete newErr.form;
                    setErrors(newErr);
                  }}
                  className={cn(
                    "relative z-10 py-3 rounded-lg text-sm font-mono tracking-wider transition-all duration-300 uppercase flex items-center justify-center gap-2",
                    formType === "corporation"
                      ? "text-[var(--bg)] font-bold"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]",
                  )}
                >
                  <Building2 className="w-4 h-4" /> Corporation
                </button>

                {/* Sliding Background */}
                <div
                  ref={tabIndicatorRef}
                  className="absolute top-1 bottom-1 left-[4px] rounded-lg bg-[var(--accent)] w-[calc(50%-6px)]"
                />
              </div>
            </div>

            {/* Animated Fields Container */}
            <div className="space-y-6">
              {/* Company Name (Corporation Only) */}
              {formType === "corporation" && (
                <div
                  ref={companyNameContainerRef}
                  className="overflow-hidden space-y-2 mt-6"
                >
                  <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)]">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Acme Corp"
                    value={companyName}
                    onChange={(e) => {
                      setCompanyName(e.target.value);
                      const newErr = { ...errors };
                      delete newErr.companyName;
                      delete newErr.form;
                      setErrors(newErr);
                    }}
                    className={cn(
                      "w-full bg-[var(--surface-2)] border rounded-xl px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300",
                      errors.companyName
                        ? "border-red-500"
                        : "border-[var(--border)]",
                    )}
                  />
                  {errors.companyName && (
                    <p className="text-red-500 text-xs font-mono mt-1">
                      {errors.companyName}
                    </p>
                  )}
                </div>
              )}

              {/* Industry Dropdown or Custom Enterable Combobox */}
              <div className="space-y-2" ref={industryDropdownRef}>
                <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)]">
                  Industry
                </label>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder="Select an industry or type custom..."
                    value={industry}
                    onChange={(e) => {
                      setIndustry(e.target.value);
                      setIsIndustryOpen(true);
                      const newErr = { ...errors };
                      delete newErr.industry;
                      delete newErr.form;
                      setErrors(newErr);
                    }}
                    onFocus={() => setIsIndustryOpen(true)}
                    className={cn(
                      "w-full bg-[var(--surface-2)] border rounded-xl pl-4 pr-10 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300",
                      errors.industry
                        ? "border-red-500"
                        : "border-[var(--border)]",
                    )}
                  />
                  <button
                    type="button"
                    onClick={() => setIsIndustryOpen(!isIndustryOpen)}
                    className="absolute right-3 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors p-1"
                  >
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 transition-transform duration-300",
                        isIndustryOpen && "rotate-180",
                      )}
                    />
                  </button>
                </div>

                {/* Dropdown Box */}
                {isIndustryOpen && (
                  <div
                    ref={industryDropdownBoxRef}
                    className="absolute z-30 w-[calc(100%-2px)] left-[1px] mt-1 bg-[var(--surface-2)] border border-[var(--border)] rounded-xl shadow-xl max-h-56 overflow-y-auto no-scrollbar"
                  >
                    {filteredIndustries.map((ind) => (
                      <button
                        key={ind}
                        type="button"
                        onClick={() => {
                          if (ind === "Other (Type custom...)") {
                            setIndustry("");
                          } else {
                            setIndustry(ind);
                          }
                          setIsIndustryOpen(false);
                          const newErr = { ...errors };
                          delete newErr.industry;
                          delete newErr.form;
                          setErrors(newErr);
                        }}
                        className="w-full text-left px-4 py-3 text-sm text-[var(--text-primary)] hover:bg-[var(--surface-3)] transition-colors border-b border-[var(--border)] last:border-0 flex items-center justify-between"
                      >
                        <span>{ind}</span>
                        {industry === ind && (
                          <Check className="w-4 h-4 text-[var(--accent)]" />
                        )}
                      </button>
                    ))}
                    {filteredIndustries.length === 0 && (
                      <div className="px-4 py-3 text-xs text-[var(--text-muted)] italic">
                        Press Enter or type custom industry above...
                      </div>
                    )}
                  </div>
                )}
                {errors.industry && (
                  <p className="text-red-500 text-xs font-mono mt-1">
                    {errors.industry}
                  </p>
                )}
              </div>

              {/* Idea Description Box */}
              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)]">
                    Describe your Idea
                  </label>
                  <span
                    className={cn(
                      "text-[10px] font-mono",
                      idea.length < 10
                        ? "text-[var(--text-muted)]"
                        : "text-emerald-500",
                    )}
                  >
                    {idea.length} characters
                  </span>
                </div>
                <textarea
                  placeholder="Tell us about the project goal, scope, and target timelines..."
                  value={idea}
                  onChange={(e) => {
                    setIdea(e.target.value);
                    const newErr = { ...errors };
                    delete newErr.idea;
                    delete newErr.form;
                    setErrors(newErr);
                  }}
                  rows={4}
                  className={cn(
                    "w-full bg-[var(--surface-2)] border rounded-xl px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 resize-none",
                    errors.idea ? "border-red-500" : "border-[var(--border)]",
                  )}
                />
                {errors.idea && (
                  <p className="text-red-500 text-xs font-mono mt-1">
                    {errors.idea}
                  </p>
                )}
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)]">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    const newErr = { ...errors };
                    delete newErr.email;
                    delete newErr.form;
                    setErrors(newErr);
                  }}
                  className={cn(
                    "w-full bg-[var(--surface-2)] border rounded-xl px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300",
                    errors.email ? "border-red-500" : "border-[var(--border)]",
                  )}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs font-mono mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Contact Information - Mobile Number with Flag/Country Code Picker */}
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)]">
                  Mobile Number
                </label>
                <PhoneInput
                  defaultCountry="US"
                  international
                  limitMaxLength={true}
                  placeholder="123 456 7890"
                  value={phone}
                  onChange={(val) => {
                    setPhone(val || "");
                    const newErr = { ...errors };
                    delete newErr.phone;
                    delete newErr.form;
                    setErrors(newErr);
                  }}
                  className={cn(
                    "flex w-full bg-[var(--surface-2)] border rounded-xl px-4 py-3 text-[var(--text-primary)] focus-within:border-accent focus-within:ring-1 focus-within:ring-accent transition-all duration-300 h-[48px]",
                    errors.phone ? "border-red-500" : "border-[var(--border)]",
                    "[&_.PhoneInputCountryIcon]:w-6 [&_.PhoneInputCountryIcon]:h-4 [&_.PhoneInputCountryIcon]:mr-2 [&_.PhoneInputCountryIcon]:shadow-none",
                    "[&_.PhoneInputInput]:bg-transparent [&_.PhoneInputInput]:border-none [&_.PhoneInputInput]:focus:outline-none [&_.PhoneInputInput]:w-full [&_.PhoneInputInput]:text-[var(--text-primary)] [&_.PhoneInputInput]:placeholder-[var(--text-muted)]",
                    "[&_.PhoneInputCountrySelectArrow]:opacity-50 [&_.PhoneInputCountrySelectArrow]:ml-2",
                  )}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs font-mono mt-1">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            {/* Error display for general form submission failure */}
            {errors.form && (
              <p className="text-red-500 text-xs font-mono text-center mb-4">
                {errors.form}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[var(--accent)] text-[var(--bg)] font-mono uppercase tracking-widest font-semibold text-sm py-4 rounded-full transition-all duration-300 hover:opacity-90 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[var(--accent)]/10"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Constructing...
                </>
              ) : (
                <>
                  Send
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      ) : (
        // Success/Thank-You Card State
        <div data-animate-root className="text-center py-8 space-y-6">
          {/* <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/25 mb-2 fill-white">
            <Sparkles className="w-8 h-8" />
          </div> */}

          <div className="space-y-2">
            <h2 className="font-display font-bold text-3xl text-[var(--text-primary)]">
              Connection Formulated
            </h2>
            <p className="font-serif text-[var(--text-secondary)] text-sm max-w-md mx-auto">
              Your specifications have been cataloged. Our engineers will audit
              details and reach out within 24 hours.
            </p>
          </div>

          {/* Receipt Details Box */}
          <div className="bg-[var(--surface-2)] border border-[var(--border)] rounded-2xl p-6 text-left max-w-md mx-auto space-y-3 font-mono text-xs">
            <div className="flex justify-between border-b border-[var(--border)] pb-2">
              <span className="text-[var(--text-muted)]">CHANNEL</span>
              <span className="text-[var(--text-primary)] uppercase">
                {formType}
              </span>
            </div>
            {formType === "corporation" && companyName && (
              <div className="flex justify-between border-b border-[var(--border)] pb-2">
                <span className="text-[var(--text-muted)]">CORP</span>
                <span className="text-[var(--text-primary)] truncate max-w-[200px]">
                  {companyName}
                </span>
              </div>
            )}
            <div className="flex justify-between border-b border-[var(--border)] pb-2">
              <span className="text-[var(--text-muted)]">INDUSTRY</span>
              <span className="text-[var(--text-primary)] truncate max-w-[200px]">
                {industry}
              </span>
            </div>
            <div className="flex justify-between border-b border-[var(--border)] pb-2">
              <span className="text-[var(--text-muted)]">EMAIL</span>
              <span className="text-[var(--text-primary)] truncate max-w-[200px]">
                {email}
              </span>
            </div>
            <div className="flex justify-between pb-1">
              <span className="text-[var(--text-muted)]">CONTACT</span>
              <span className="text-[var(--text-primary)] font-semibold">
                {phone}
              </span>
            </div>
          </div>

          <button
            onClick={handleReset}
            className="inline-flex items-center gap-2 border border-[var(--text-primary)] text-[var(--text-primary)] font-mono uppercase tracking-wider text-xs px-6 py-3 rounded-full hover:bg-[var(--text-primary)] hover:text-[var(--bg)] transition-all duration-300"
          >
            Establish New Connection
          </button>
        </div>
      )}
    </div>
  );
}
