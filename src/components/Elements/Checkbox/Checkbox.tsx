import clsx from 'clsx';

type CheckboxProps = {
  checked: boolean;
  label: string;
  onCheckedChange: (checked: boolean) => void;
};

// before:absolute before:top-2/4 before:left-2/4 before:block before:h-8 before:w-8 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity before:bg-current  hover:before:opacity-10

export const Checkbox = ({ checked, label, onCheckedChange }: CheckboxProps) => {
  return (
    <div
      className={clsx('inline-flex items-center transition-all hover:opacity-100', {
        'opacity-40': !checked,
      })}
    >
      <label
        className="relative flex items-center p-3 rounded-full cursor-pointer"
        htmlFor={label}
        data-ripple-dark="true"
      >
        <input
          checked={checked}
          onChange={(e) => onCheckedChange(e.target.checked)}
          id={label}
          type="checkbox"
          className={clsx(
            "before:content[''] peer relative h-3 w-3 cursor-pointer appearance-none rounded-[2px] border border-current transition-all checked:border-current checked:bg-current"
          )}
        />
        <div className="absolute text-white dark:text-black transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="1"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg> */}
        </div>
      </label>
      <label className={clsx('cursor-pointer select-none')} htmlFor={label}>
        {label}
      </label>
    </div>
  );
};
