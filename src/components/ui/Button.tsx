import cn from "../../utils/cn";

const Button = ({
  className,
  outline,
}: {
  className: string;
  outline: boolean;
}) => {
  return (
    <button
      className={cn(
        `bg-blue-500 py-2 px-4 rounded-md`,

        {
          "opacity-10": outline,
        },
        className
      )}
    >
      Click Me
    </button>
  );
};

export default Button;
