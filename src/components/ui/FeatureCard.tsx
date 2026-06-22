import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  body: string;
  className?: string;
}

export default function FeatureCard({ icon, title, body, className = "" }: Props) {
  return (
    <div className={`flex flex-col items-center text-center p-12 hover:bg-surface-2 transition-colors duration-500 group ${className}`}>
      {/* Icon */}
      <div className="flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>

      {/* Title */}
      <h2 className="font-mono font-normal text-2xl mt-8 text-text-primary group-hover:text-accent transition-colors duration-300">
        {title}
      </h2>

      {/* Body */}
      <p className="font-serif text-text-secondary text-lg leading-relaxed mt-4 max-w-[340px] mx-auto">
        {body}
      </p>
    </div>
  );
}
