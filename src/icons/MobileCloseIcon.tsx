type Props = {
  onClick: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
};

const MobileCloseSvg: React.FC<Props> = ({ onClick }: Props) => (
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
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default MobileCloseSvg;
