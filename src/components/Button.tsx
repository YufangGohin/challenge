type ButtonProps = {
  bgColor: "bg-black" | "bg-white";
  borderColor: string;
  children: any;
  txtColor: "text-red-4" | "text-black" | "text-white";
  onClick?: () => void;
};

export const Button = ({
  bgColor,
  borderColor,
  children,
  txtColor,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`mt-6 w-full ${bgColor} border border-${borderColor} rounded-md py-3 px-8 flex items-center justify-center font-medium  ${txtColor}`}
    >
      {children}
    </button>
  );
};
