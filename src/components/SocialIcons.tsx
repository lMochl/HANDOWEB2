import type { SVGProps } from "react";

type SocialIconProps = SVGProps<SVGSVGElement> & { size?: number | string };

// Social networks keep their brand marks; interface icons use Lucide.
export function LinkedInIcon({ size = 18, ...props }: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 14 14"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      data-brand-icon="linkedin"
      {...props}
    >
      <path d="M11.9274 11.9303H9.85425V8.68175C9.85425 7.90708 9.8385 6.91017 8.77392 6.91017C7.693 6.91017 7.52792 7.75308 7.52792 8.62458V11.9303H5.45475V5.25H7.44625V6.16058H7.47308C7.75133 5.63558 8.428 5.08142 9.43892 5.08142C11.5395 5.08142 11.928 6.46392 11.928 8.2635L11.9274 11.9303ZM3.11325 4.33592C2.44592 4.33592 1.90983 3.79575 1.90983 3.13133C1.90983 2.4675 2.4465 1.92792 3.11325 1.92792C3.77825 1.92792 4.31725 2.4675 4.31725 3.13133C4.31725 3.79575 3.77767 4.33592 3.11325 4.33592ZM4.15275 11.9303H2.07375V5.25H4.15275V11.9303ZM12.9646 0H1.03308C0.462 0 0 0.4515 0 1.00858V12.9914C0 13.5491 0.462 14 1.03308 14H12.9628C13.5333 14 14 13.5491 14 12.9914V1.00858C14 0.4515 13.5333 0 12.9628 0H12.9646Z" />
    </svg>
  );
}

export function InstagramIcon({ size = 18, ...props }: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      aria-hidden="true"
      focusable="false"
      data-brand-icon="instagram"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
