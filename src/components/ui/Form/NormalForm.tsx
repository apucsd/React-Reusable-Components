import { FieldValues, useForm } from "react-hook-form";
import cn from "../../../utils/cn";
import Button from "../Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema, TNormalForm } from "./validation";

const NormalForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TNormalForm>({
    resolver: zodResolver(SignUpSchema),
  });
  const onSubmit = (data: FieldValues) => {
    console.log("clicked", data);
  };
  const double = true;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("border border-blue-500 max-w-3xl mx-auto p-4", {
        "max-w-5xl": double,
        "max-w-md": !double,
      })}
    >
      <div
        className={cn(
          "grid grid-cols-1 justify-items-center gap-5 center border-2 border-dashed p-1",
          {
            "md:grid-cols-2": double,
          }
        )}
      >
        <div className="w-full">
          <label className="block" htmlFor="email">
            Name
          </label>
          <input type="text" id="name" {...register("name")} />
          {errors.name && (
            <span className="text-xs text-red-600">{errors.name?.message}</span>
          )}
        </div>
        <div className="w-full">
          <label className="block" htmlFor="email">
            Email
          </label>
          <input type="email" id="email" {...register("email")} />
          {errors.email && (
            <span className="text-xs text-red-600">
              {errors.email?.message}
            </span>
          )}
        </div>
        <div className="w-full">
          <label className="block" htmlFor="email">
            Password
          </label>
          <input type="password" id="password" {...register("password")} />
          {errors.password && (
            <span className="text-xs text-red-600">
              {errors.password?.message}
            </span>
          )}
        </div>
        <div className="w-full">
          <label className="block" htmlFor="email">
            Select
          </label>
          <select>
            <option value="one">One</option>
            <option value="two">Two</option>
            <option value="three">Three</option>
          </select>
        </div>
        <div className="w-full">
          <label className="block" htmlFor="email">
            Message
          </label>
          <textarea></textarea>
        </div>
        <div className="w-full">
          <label className="block" htmlFor="email">
            Select
          </label>
          <input type="checkbox" name="" id="checkbox" />
        </div>
      </div>
      <div className=" flex justify-end mt-8">
        <Button className="md:w-fit w-full" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default NormalForm;
