type Props = {
  onClick: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
};

const MobileOpenSvg: React.FC<Props> = ({ onClick }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="@h-8 @w-8 @gray @mr-3"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    onClick={onClick}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

export default MobileOpenSvg;
