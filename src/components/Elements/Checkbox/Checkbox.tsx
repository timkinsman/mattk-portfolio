import clsx from 'clsx';

type CheckboxProps = {
  checked: boolean;
  label: string;
  onCheckedChange: (checked: boolean) => void;
};

export const Checkbox = ({ checked, label, onCheckedChange }: CheckboxProps) => {
  return (
    <div className="flex items-center me-4">
      <input
        checked={checked}
        id={label}
        type="checkbox"
        value=""
        onClick={() => onCheckedChange(!checked)}
        className={clsx(
          'h-2 w-2 cursor-pointer appearance-none rounded-full border border-current transition-all checked:border-current checked:bg-current hover:opacity-100',
          {
            ['opacity-60']: !checked,
          }
        )}
      />
      <label
        htmlFor={label}
        className={clsx('ms-2 text-sm transition-opacity cursor-pointer hover:opacity-100', {
          ['opacity-60']: !checked,
        })}
      >
        {label}
      </label>
    </div>
  );
};
