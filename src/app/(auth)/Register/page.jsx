"use client";

import { GraduationCap } from "lucide-react";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { useRef, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";
import { toast } from "react-toastify";

export default function Example() {
  const loginLinkRef = useRef(null);

  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log(data);
  };
  const [showPassword, setShowPassword] = useState(true);

  const togglePass = () => {
    setShowPassword(!showPassword);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, name, url, password } = data;

    const { data: res, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: url || undefined,
      callbackURL: "/",
    });
    console.log(res);
    console.log(error);

    if (error) {
      toast(error.message);
    }

    if (res) {
      toast("Signup Successful");
      loginLinkRef.current?.click();
    }
  };

  return (
    <>
      <Link ref={loginLinkRef} href="/Login" className="hidden">
        Login
      </Link>
      <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8 bg-black">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="bg-linear-to-r from-orange-500 to-orange-600 p-3 rounded-lg">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <span className="text-3xl font-bold bg-linear-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              SkillSphere
            </span>
          </div>

          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
            Register your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-100"
              >
                Email address
              </label>

              <div className="mt-2">
                <input
                  defaultValue=""
                  {...register("email", { required: "Password is required" })}
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-100"
                >
                  Name
                </label>
              </div>

              <div className="mt-2">
                <input
                  defaultValue=""
                  {...register("name")}
                  id="name"
                  type="text"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">Name is required.</p>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="Photo Url"
                  className="block text-sm/6 font-medium text-gray-100"
                >
                  Photo Url
                </label>
              </div>

              <div className="mt-2">
                <input
                  defaultValue=""
                  {...register("url")}
                  id="url"
                  type="url"
                  required
                  autoComplete="current-url"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white"
                />
                {errors.url && (
                  <p className="text-red-500 text-xs mt-1">Url is required.</p>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-100"
                >
                  Password
                </label>
              </div>

              <div className="mt-2">
                <input
                  defaultValue=""
                  {...register("password")}
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    Password is required.
                  </p>
                )}
              </div>
              <button
                type="button"
                className="btn mt-4"
                onClick={() => togglePass()}
              >
                show password
              </button>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white"
              >
                Register
              </button>
              <button
                type="button"
                className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm/6 font-semibold text-white btn mt-3"
                onClick={handleGoogleSignIn}
              >
                <FaGoogle />
                Sign in with GOOGLE
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
