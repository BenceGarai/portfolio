interface SocialButtonProps {
  href: string;
  icon?: React.ReactNode;
}

export function SocialButton({ href, icon }: SocialButtonProps) {
  return (
    <a
      href={href}
      className="inline-flex justify-center items-center w-10 h-10 bg-transparent border-2 border-secondary rounded-full text-2xl ">
      {icon}
    </a>
  );
}
