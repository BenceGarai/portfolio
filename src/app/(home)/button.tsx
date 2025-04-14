interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function Button({ href, children, className }: ButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex justify-center items-center w-40 h-full bg-secondary border-2 rounded-xl border-background font-semibold text-background tracking-widest transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-secondary/90 ${className}`}>
      {children}
    </a>
  );
}
