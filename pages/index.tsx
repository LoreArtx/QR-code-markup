import Image from "next/image"
import qrCode from "@/images/image-qr-code.png"
import Link from "next/link";

export default function Home() {
  return <div className="h-screen flex flex-col gap-[20px] justify-center items-center bg-slate">

    <div className="w-[320px] h-[499px] bg-white rounded-[20px] px-[16px] pt-[16px] pb-[40px]">
      <Image unoptimized src={qrCode} width={288} height={288} className="rounded-[10px] mb-[16px]" alt="qr-code-img"></Image>

      <div className="w-full flex flex-col justify-center items-center gap-[16px]">
        <h1 className="tg-bold text-heading text-center">Improve your front-end skills by building projects</h1>
        <p className="tg-regular text-paragraph text-center">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>


    <div className="attribution">
      Challenge by <Link href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</Link>.
      Coded by

      <Link href="https://www.frontendmentor.io/profile/ayPromise"> Danylo The Inventor</Link>.
    </div>
  </div >;
}
