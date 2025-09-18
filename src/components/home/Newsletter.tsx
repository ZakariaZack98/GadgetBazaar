'use client'
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { brandsData } from "@/lib/brand";
import Link from "next/link";
import { validateEmail } from "@/helpers/emailValidator";

const Newsletter = () => {
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string | null>(null)
  const brandsAssets = brandsData;

  const handleEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    //* handle email submission logic here ======================
    if(validateEmail(email)) {
      setEmailError(null);
    } else setEmailError('Please input a valid email adress.');
  }

  return (
    <div className="bg-accentBlue py-17">
      <div className="container mx-auto text-white flex flex-col items-center gap-y-8">
        {/* ============= call of invitation =============== */}
        <div className="flex flex-col justify-center gap-y-3">
          <h3 className="heading1 text-center">Subscribe to our newsletter</h3>
          <p className="body-medium-400 w-9/10 md:w-8/10 lg:w-2/3 text-center mx-auto">
            Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et cursus. Donec non quam urna.
            Quisque vitae porta ipsum.
          </p>
        </div>
        {/* ============= email input field ================= */}
        <form onSubmit={(e) => handleEmail(e)} className=" relative w-4/5 md:w-7/10 lg:w-1/2">
          <Input type='email' placeholder='Your Email Address' className='text-gray-700 rounded-none bg-white body-medium-400 py-3.5 ps-5 pe-35 h-15 w-full' value={email} onChange={e => setEmail(e.target.value)}/>
          <Button type="submit" className="cursor-pointer bg-accentOrange hover:bg-accentOrange text-white absolute right-3 top-1/2 -translate-y-[50%]">Subscribe →</Button>
          { emailError && <p className="text-red-200 relative bottom-0 h-0 text-sm text-center">*{emailError}</p> }
        </form>
        {/* ============== brand logo section =============== */}
        <div className="flex h-18 justify-center gap-12 items-center">
          {
            brandsAssets?.map(brand => (
              <Link href={brand.url} key={brand.name}>
                <picture>
                  <img src={brand.logo} alt={`brand_logo_of_${brand.name}`} />
                </picture>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
