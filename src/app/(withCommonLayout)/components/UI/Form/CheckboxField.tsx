import { Controller, FieldValues } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ICheckboxFieldProps } from "@/types";

const CheckboxField = <T extends FieldValues>({
  registerName,
  label,
  control,
}: //   errors,
ICheckboxFieldProps<T>) => {
  return (
    <div className="flex items-center space-x-4">
      <Controller
        name={registerName}
        control={control}
        render={({ field }) => (
          <Checkbox
            id={registerName}
            checked={field.value} // Automatically updates between true/false
            onCheckedChange={(checked) => field.onChange(checked === true)}
            className="w-6 h-6 border-gray-400 data-[state=checked]:bg-colorButton data-[state=checked]:border-colorButton"
          />
        )}
      />
      <Label
        htmlFor={registerName}
        className="text-xl text-colorTextSecondary font-medium leading-[30px]"
      >
        {label}
      </Label>

      {/* {errors?.[registerName] && (
        <p className="text-red-500 text-sm">
          {(errors[registerName] as { message?: string })?.message}
        </p>
      )} */}
    </div>
  );
};

export default CheckboxField;
