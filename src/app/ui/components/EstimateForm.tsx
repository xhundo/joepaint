"use client";
import { useRef, useEffect } from "react";
import { useFormState } from "react-dom";
import { emailSubmission } from "@/app/lib/actions";

export const EstimateForm = () => {
  const [state, formAction] = useFormState(emailSubmission as any, {
    error: {
      first: "",
      last: "",
      email: "",
      phone: "",
      message: "",
      subject: "",
    },
  });

  const { error } = state;

  const first = useRef<HTMLInputElement>(null);
  const last = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLTextAreaElement>(null);
  const subject = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!error) {
      first.current!.value = "";
      last.current!.value = "";
      email.current!.value = "";
      phone.current!.value = "";
      message.current!.value = "";
      subject.current!.value = "";
    }
  }, [error]);

  return (
    <form
      className="flex flex-col gap-y-[15px]  md:max-w-full lg:max-w-full lg:gap-y-[50px]"
      action={formAction}
    >
      <section className="sm relative flex justify-center md:gap-x-[25px] lg:gap-x-8">
        <label
          htmlFor="name"
          className="first absolute z-10 bg-white text-center text-black lg:-top-[11px] lg:right-[972px] lg:w-[59px]  lg:text-base"
        >
          Name*
        </label>
        <input
          type="text"
          className={`relative text-black placeholder:text-black ${
            error?.first ? "border-red-700" : "border-black"
          } first-sm name-label-sm h-[21px] w-[318px] rounded-none border-[1px] border-black px-[5px] py-[2px] font-normal md:h-[36px] md:w-[266px] md:px-[10px] md:py-[5px] md:text-xs md:placeholder:text-xs lg:h-[70px] lg:w-[515px] lg:px-5 lg:py-[10px] lg:text-lg lg:placeholder:text-lg`}
          name="name"
          ref={first}
          id="name"
          placeholder="First Name"
        />
        {error?.first && (
          <span className="error-first absolute text-red-700 lg:left-[1px] lg:top-[76px]">
            {error?.first[0]}
          </span>
        )}
        <label
          htmlFor="name"
          className="first-sec absolute z-10 hidden bg-white text-center text-black lg:-top-[11px] lg:right-[972px] lg:w-[59px]  lg:text-base"
        >
          Name*
        </label>
        <input
          type="text"
          className={`relative text-black placeholder:text-[6px] placeholder:text-black md:placeholder:text-xs lg:placeholder:text-lg ${
            error?.last ? "border-red-700" : "border-black"
          }  name-label-sm last-sm h-[21px] w-[318px] rounded-none border-[1px] py-[10px] pl-[20px] font-normal md:h-[36px] md:w-[266px] md:text-xs lg:h-[70px] lg:w-[515px]  lg:px-5  lg:py-[10px]  lg:text-lg`}
          name="last"
          ref={last}
          id="last"
          placeholder="Last Name"
        />
        {error?.last && (
          <span className="error-last absolute text-red-700 lg:right-[338px] lg:top-[76px]">
            {error?.last[0]}
          </span>
        )}
      </section>
      <section className="input-sm relative flex justify-center md:gap-x-[25px] lg:gap-x-8">
        <label
          htmlFor="name"
          className="email absolute z-10 bg-white text-center text-black lg:right-[972px] lg:top-[-12px] lg:h-[23px] lg:w-[59px]"
        >
          Email*
        </label>
        <input
          type="email"
          className={`text-black placeholder:text-black ${
            error?.email ? "border-red-700" : "border-black"
          } email-sm relative rounded-none border-[1px] md:h-[36px] md:w-[266px] md:pl-[10px] md:text-xs  lg:h-[70px] lg:w-[515px] lg:px-5 lg:py-[10px] lg:text-lg`}
          ref={email}
          name="email"
          id="email"
        />
        {error?.email && (
          <span className="error-email absolute text-red-700 lg:left-[1px] lg:top-[75px]">
            {error?.email[0]}
          </span>
        )}
        <label
          htmlFor="phone"
          className="phone phone-label-sm absolute z-10 bg-white text-center text-black lg:right-[355px] lg:top-[-12px] lg:h-[23px] lg:w-32"
        >
          Phone Number*
        </label>
        <input
          type="tel"
          className={`relative text-black placeholder:text-black ${
            error?.phone ? "border-red-700" : "border-black"
          } phone-sm rounded-none border-[1px] md:h-[36px] md:w-[266px] md:pl-[10px] md:text-xs lg:h-[70px] lg:w-[515px] lg:px-5 lg:py-[10px]  lg:text-lg`}
          name="phone"
          ref={phone}
          id="phone"
        />
        {error?.phone && (
          <span className="error-phone absolute text-red-700 lg:right-[116px]  lg:top-[75px]">
            {error?.phone[0]}
          </span>
        )}
      </section>
      <section className="sm relative flex flex-col gap-y-[15px] text-center lg:gap-y-[50px]">
        <label
          htmlFor="subject"
          className="subject subject-label-sm absolute z-10 bg-white text-center text-black lg:right-[958px] lg:top-[-12px] lg:h-[23px] lg:w-[80px]"
        >
          Subject*
        </label>
        <input
          type="text"
          className={`relative text-black placeholder:text-black ${
            error?.subject ? "border-red-700" : "border-black"
          } subject-sm max-w-full rounded-none border-[1px] px-[10px] py-[5px] md:h-[36px] md:text-xs lg:h-[70px] lg:px-5 lg:py-[10px] lg:text-lg`}
          name="subject"
          ref={subject}
          id="subject"
        />
        {error?.subject && (
          <span className="error-subject absolute text-red-700 lg:top-[72px]">
            {error?.subject[0]}
          </span>
        )}
        <label
          htmlFor="message"
          className="message message-label-sm absolute z-10 h-[23px] bg-white text-center text-black lg:right-[958px] lg:top-[107px] lg:w-[86px]"
        >
          Message*
        </label>
        <textarea
          className={`relative text-black placeholder:text-black md:h-[116px] lg:h-[245px] ${
            error?.message ? "border-red-700" : "border-black"
          } message-sm max-w-full rounded-none border-[1px] px-5 py-[10px] md:text-xs lg:text-lg`}
          name="message"
          ref={message}
          id="message"
        ></textarea>
        {error?.message && (
          <span className="error-message absolute text-red-700 lg:top-[372px]">
            {error?.message[0]}
          </span>
        )}
      </section>
      <button
        className="submit-sm h-[14px] w-[65px] self-center border-none  bg-primary text-xs font-bold text-white  md:mb-[79px] md:h-[36px] md:w-[129px] md:py-[5px] md:pl-[10px] lg:mb-100x lg:h-[70px] lg:w-[250px] lg:text-lg"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
