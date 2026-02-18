import svgPaths from "./svg-4xwvn02tu5";
import imgPicngBlackLogo1 from "@/assets/images/pi-CNG-blacK-logo.png";
import imgWhatsAppImage20260203At90418Am23 from "@/assets/images/1c94135fbe3911064625628ceff56994ed6b37d7.png";
import imgVectorSmartObjectCopy22 from "@/assets/images/mission.png";
import { imgGroup } from "./svg-ugmip";

function Chat() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[40px] top-1/2" data-name="chat 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="chat 1">
          <path d={svgPaths.p36730c80} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p1b5ea000} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Bubble() {
  return (
    <div className="absolute bg-[#1bad50] left-[calc(91.67%-32px)] overflow-clip rounded-[100px] shadow-[0px_69.11px_55.28px_0px_rgba(0,0,0,0.07)] size-[80px] top-[659px]" data-name="Bubble">
      <Chat />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex items-center justify-between px-[30px] py-[12px] relative rounded-[16px] shrink-0 w-[87px]" data-name="Component 1">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#080808] text-[14px] text-center">Home</p>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex items-center justify-between px-[30px] py-[12px] relative rounded-[16px] shrink-0 w-[110px]" data-name="Component 2">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#080808] text-[14px] text-center">Who We Are</p>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex items-center justify-between px-[30px] py-[12px] relative rounded-[16px] shrink-0 w-[116px]" data-name="Component 3">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#080808] text-[14px] text-center">Departments</p>
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex items-center justify-between px-[30px] py-[12px] relative rounded-[16px] shrink-0 w-[87px]" data-name="Component 4">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#080808] text-[14px] text-center">News</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[12px] items-center left-[calc(41.67%+89px)] top-1/2">
      <Component />
      <Component1 />
      <Component2 />
      <Component3 />
    </div>
  );
}

function Text() {
  return (
    <div className="bg-[#1bad50] content-stretch flex h-[48px] items-center justify-center px-[28px] py-[14px] relative shrink-0 w-[140px]" data-name="Text">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-center text-white">CONTACT US</p>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-right 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-right 1">
          <path d={svgPaths.pcac9600} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#1bad50] content-stretch flex h-[48px] items-center justify-center px-[16px] py-[14px] relative shrink-0" data-name="icon">
      <ArrowRight />
    </div>
  );
}

function HeaderButton() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-px items-center left-[calc(83.33%-25px)] top-1/2" data-name="Header button">
      <Text />
      <Icon />
    </div>
  );
}

function DesktopHeader() {
  return (
    <div className="-translate-x-1/2 absolute bg-white h-[100px] left-1/2 overflow-clip top-0 w-[1440px]" data-name="Desktop Header">
      <div className="-translate-y-1/2 absolute h-[43.039px] left-[72px] top-1/2 w-[125.845px]" data-name="picng-black-logo 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPicngBlackLogo1} />
      </div>
      <Frame />
      <HeaderButton />
    </div>
  );
}

function Frame21() {
  return <div className="absolute bg-[#f9e745] h-[8px] left-[84px] rounded-[100px] top-0 w-[113px]" />;
}

function Frame35() {
  return (
    <div className="h-[8px] relative shrink-0 w-[281px]">
      <Frame21 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[20px] items-center left-[282.89px] top-1/2 w-[874.211px]">
      <p className="font-['Neue_Montreal:Bold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[50px] text-center text-white w-[min-content] whitespace-pre-wrap">The Pi-CNG Mandate</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-center text-white w-[612.664px] whitespace-pre-wrap">{`The Presidential Initiative on Compressed Natural Gas and Electric vehicles (Pi-CNG & EV) is a flagship programme of the Federal Government of Nigeria launched in 2023. Its primary mandate is to fast-track Nigeria’s transition to cleaner, more affordable, and sustainable transportation energy sources following the removal of fuel subsidies.`}</p>
      <Frame35 />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#f7f8fa] h-[600px] left-1/2 overflow-clip top-[100px] w-[1440px]" data-name="Hero Section">
      <div className="absolute h-[979.332px] left-[-14.5px] top-[-189.67px] w-[1468.999px]" data-name="WhatsApp Image 2026-02-03 at 9.04.18 AM (2) 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhatsAppImage20260203At90418Am23} />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#080808] h-[740px] left-1/2 opacity-70 top-1/2 w-[1440px]" />
      <Frame36 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[73.08px] top-[69.32px]">
      <div className="absolute h-[58.236px] left-[73.08px] top-[69.32px] w-[170.859px]" data-name="Vector Smart Object copy 2 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVectorSmartObjectCopy22} />
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Component 3">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[30px] py-[12px] relative w-full">
          <p className="font-['Neue_Montreal:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-white">Quick Links</p>
        </div>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="mb-[-4px] relative rounded-[16px] shrink-0 w-full" data-name="Component 4">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[30px] py-[12px] relative w-full">
          <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-white">Home</p>
        </div>
      </div>
    </div>
  );
}

function Component6() {
  return (
    <div className="mb-[-4px] relative rounded-[16px] shrink-0 w-full" data-name="Component 5">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[30px] py-[12px] relative w-full">
          <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-white">Conversion Centers</p>
        </div>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="mb-[-4px] relative rounded-[16px] shrink-0 w-full" data-name="Component 6">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[30px] py-[12px] relative w-full">
          <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-white">Testimonials</p>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full">
      <Component5 />
      <Component6 />
      <Component7 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[748.04px] top-[69.32px] w-[140px]">
      <Component4 />
      <Frame4 />
    </div>
  );
}

function Component8() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Component 3">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[30px] py-[12px] relative w-full">
          <p className="font-['Neue_Montreal:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-white">Company</p>
        </div>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="mb-[-4px] relative rounded-[16px] shrink-0 w-full" data-name="Component 4">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[30px] py-[12px] relative w-full">
          <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-white">About Us</p>
        </div>
      </div>
    </div>
  );
}

function Component10() {
  return (
    <div className="mb-[-4px] relative rounded-[16px] shrink-0 w-full" data-name="Component 5">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[30px] py-[12px] relative w-full">
          <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-white">Departments</p>
        </div>
      </div>
    </div>
  );
}

function Component11() {
  return (
    <div className="mb-[-4px] relative rounded-[16px] shrink-0 w-full" data-name="Component 6">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[30px] py-[12px] relative w-full">
          <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-white">News</p>
        </div>
      </div>
    </div>
  );
}

function Component12() {
  return (
    <div className="mb-[-4px] relative rounded-[16px] shrink-0 w-full" data-name="Component 7">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[30px] py-[12px] relative w-full">
          <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-white">Contact</p>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full">
      <Component9 />
      <Component10 />
      <Component11 />
      <Component12 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[988.04px] top-[69.32px] w-[140px]">
      <Component8 />
      <Frame6 />
    </div>
  );
}

function Component13() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Component 3">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[30px] py-[12px] relative w-full">
          <p className="font-['Neue_Montreal:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-white">Socials</p>
        </div>
      </div>
    </div>
  );
}

function RiFacebookFill() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="ri:facebook-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="ri:facebook-fill">
          <path d={svgPaths.p2a17ae60} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component14() {
  return (
    <div className="mb-[-4px] relative rounded-[16px] shrink-0 w-full" data-name="Component 4">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[30px] py-[12px] relative w-full">
          <RiFacebookFill />
          <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-white">Facebook</p>
        </div>
      </div>
    </div>
  );
}

function MdiInstagram() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[18px]" data-name="mdi:instagram">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="mdi:instagram">
          <path d={svgPaths.pda19900} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <MdiInstagram />
    </div>
  );
}

function Component15() {
  return (
    <div className="mb-[-4px] relative rounded-[16px] shrink-0 w-full" data-name="Component 5">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[30px] py-[12px] relative w-full">
          <Group4 />
          <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-white">Instagram</p>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[4.69%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-0.656px] mask-size-[14px_14px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 12.688">
        <g id="Group">
          <path d={svgPaths.p1d6b7300} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <ClipPathGroup />
    </div>
  );
}

function PrimeTwitter() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="prime:twitter">
      <Group />
    </div>
  );
}

function Component16() {
  return (
    <div className="mb-[-4px] relative rounded-[16px] shrink-0 w-full" data-name="Component 6">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[30px] py-[12px] relative w-full">
          <PrimeTwitter />
          <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-white">X</p>
        </div>
      </div>
    </div>
  );
}

function IcOutlineTiktok() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="ic:outline-tiktok">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="ic:outline-tiktok">
          <path d={svgPaths.p5912380} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component17() {
  return (
    <div className="mb-[-4px] relative rounded-[16px] shrink-0 w-full" data-name="Component 7">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[30px] py-[12px] relative w-full">
          <IcOutlineTiktok />
          <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-white">TikTok</p>
        </div>
      </div>
    </div>
  );
}

function LineMdYoutube() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="line-md:youtube">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="line-md:youtube">
          <path d={svgPaths.pb93980} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p1f11d600} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Component18() {
  return (
    <div className="mb-[-4px] relative rounded-[16px] shrink-0 w-full" data-name="Component 8">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[30px] py-[12px] relative w-full">
          <LineMdYoutube />
          <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-white">YouTube</p>
        </div>
      </div>
    </div>
  );
}

function LineMdLinkedin() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="line-md:linkedin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="line-md:linkedin">
          <path d={svgPaths.p127a4d00} fill="var(--fill-0, white)" id="Vector" />
          <g id="Group">
            <path d="M3 7.5V15" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            <path d="M7.5 7.5V15" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            <path d={svgPaths.p6d74200} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Component19() {
  return (
    <div className="mb-[-4px] relative rounded-[16px] shrink-0 w-full" data-name="Component 9">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[30px] py-[12px] relative w-full">
          <LineMdLinkedin />
          <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-white">LinkedIn</p>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full">
      <Component14 />
      <Component15 />
      <Component16 />
      <Component17 />
      <Component18 />
      <Component19 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[1228.04px] top-[69.32px] w-[140px]">
      <Component13 />
      <Frame8 />
    </div>
  );
}

function Footer() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#080808] h-[543px] left-1/2 overflow-clip top-[2131px] w-[1440px]" data-name="Footer">
      <Group3 />
      <div className="absolute h-0 left-[72.48px] top-[446.32px] w-[1295.562px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1295.56 1">
            <line id="Line 5" stroke="var(--stroke-0, #B9B6B6)" x2="1295.56" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Neue_Montreal:Regular',sans-serif] leading-[22px] left-[72.48px] not-italic text-[16px] text-white top-[455.32px]">{`© 2026  -  Presidential Initiative on CNG (Pi-CNG)`}</p>
      <Frame3 />
      <Frame5 />
      <Frame7 />
      <div className="absolute font-['Neue_Montreal:Regular',sans-serif] leading-[22px] left-[73.08px] not-italic text-[16px] text-white top-[167.55px] w-[321.344px] whitespace-pre-wrap">
        <p className="mb-0">{`Get updates delivered to your inbox. You can also reach us via the email address below. `}</p>
        <p className="text-[#1bad50]">info@pci.gov.ng</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-end relative shrink-0">
      <p className="font-['Neue_Montreal:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#080808] text-[32px]">Key objectives of the Pi-CNG mandate include</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[796px]">
      <Frame2 />
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[18px] text-black text-center w-[636.436px] whitespace-pre-wrap">The initiative operates under the Renewed Hope Agenda and includes the Commercial Vehicle Conversion Incentive programme (CV-CIP), which provides free or highly discounted conversion kits for transporters.</p>
    </div>
  );
}

function CarWash() {
  return (
    <div className="absolute left-[12.5px] size-[34px] top-[13px]" data-name="car-wash 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g clipPath="url(#clip0_5_1337)" id="car-wash 1">
          <g id="Group">
            <path d={svgPaths.p9658200} fill="var(--fill-0, #53BBF3)" id="Vector" />
            <path d={svgPaths.p12fd4900} fill="var(--fill-0, #53BBF3)" id="Vector_2" />
            <path d={svgPaths.p2fd5f300} fill="var(--fill-0, #53BBF3)" id="Vector_3" />
          </g>
          <path d={svgPaths.p2721c040} fill="var(--fill-0, #384149)" id="Vector_4" />
          <path d={svgPaths.p7f23100} fill="var(--fill-0, #384149)" id="Vector_5" />
          <path d={svgPaths.p14f64200} fill="var(--fill-0, #019F74)" id="Vector_6" />
          <path d={svgPaths.p2feef200} fill="var(--fill-0, #019F74)" id="Vector_7" />
          <path d={svgPaths.p26f11300} fill="var(--fill-0, #35A880)" id="Vector_8" />
          <path d={svgPaths.p2c72e00} fill="var(--fill-0, #017A54)" id="Vector_9" />
          <path d={svgPaths.p3c7e1400} fill="var(--fill-0, #C1ECFB)" id="Vector_10" />
          <path d={svgPaths.p33393780} fill="var(--fill-0, #DFF8FF)" id="Vector_11" />
          <path d={svgPaths.p5bc1500} fill="var(--fill-0, #1FC091)" id="Vector_12" />
          <path d={svgPaths.p2c13db80} fill="var(--fill-0, #019F74)" id="Vector_13" />
          <path d={svgPaths.pf0a5500} fill="var(--fill-0, #DFF8FF)" id="Vector_14" />
          <path d={svgPaths.p38dd0c80} fill="var(--fill-0, #DFF8FF)" id="Vector_15" />
          <path d={svgPaths.p1570aa00} fill="var(--fill-0, #019F74)" id="Vector_16" />
        </g>
        <defs>
          <clipPath id="clip0_5_1337">
            <rect fill="white" height="34" width="34" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-[#fefdec] overflow-clip relative rounded-[24px] shrink-0 size-[60px]">
      <CarWash />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
      <Frame27 />
      <p className="font-['Neue_Montreal:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#080808] text-[16px]">Driving Affordability</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[12px] items-start left-1/2 top-[40px] w-[300px]">
      <Frame17 />
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#080808] text-[14px] w-full whitespace-pre-wrap">{`Reducing transportation costs for commuters and vehicle owners by promoting CNG as a cheaper alternative to petrol and diesel. `}</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-white h-[265px] overflow-clip relative rounded-[24px] shrink-0 w-[360px]">
      <Frame28 />
    </div>
  );
}

function DeliveryTruck() {
  return (
    <div className="absolute left-[12.52px] size-[34px] top-[13.02px]" data-name="delivery-truck 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g clipPath="url(#clip0_5_1389)" id="delivery-truck 1">
          <path d={svgPaths.p3c490080} fill="var(--fill-0, #FF7058)" id="Vector" />
          <path d={svgPaths.p1819fdf0} fill="var(--fill-0, #84DBFF)" id="Vector_2" />
          <path d={svgPaths.pe543072} fill="var(--fill-0, #CDD6E0)" id="Vector_3" />
          <path d={svgPaths.p301bea40} fill="var(--fill-0, #F2F2F2)" id="Vector_4" />
          <path d={svgPaths.p17e65700} fill="var(--fill-0, #FFD15C)" id="Vector_5" />
          <path d={svgPaths.p37001f00} fill="var(--fill-0, #F2F2F2)" id="Vector_6" />
          <path d={svgPaths.p30ad6b00} fill="var(--fill-0, #334A5E)" id="Vector_7" />
          <path d={svgPaths.p39b04e00} fill="var(--fill-0, #40596B)" id="Vector_8" />
          <path d={svgPaths.p74f0100} fill="var(--fill-0, #ACB3BA)" id="Vector_9" />
          <path d={svgPaths.p27a6c972} fill="var(--fill-0, #40596B)" id="Vector_10" />
          <path d={svgPaths.p2509c400} fill="var(--fill-0, #ACB3BA)" id="Vector_11" />
        </g>
        <defs>
          <clipPath id="clip0_5_1389">
            <rect fill="white" height="34" width="34" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-[#fefdec] overflow-clip relative rounded-[24px] shrink-0 size-[60px]">
      <DeliveryTruck />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
      <Frame31 />
      <p className="font-['Neue_Montreal:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#080808] text-[16px]">Environmental Sustainability</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[12px] items-start left-1/2 top-[40px] w-[300px]">
      <Frame18 />
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#080808] text-[14px] w-full whitespace-pre-wrap">Accelerating CNG and EV adoption to reduce emissions and build cleaner mobility systems</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-white h-[265px] overflow-clip relative rounded-[24px] shrink-0 w-[360px]">
      <Frame30 />
    </div>
  );
}

function Mechanic1() {
  return (
    <div className="absolute left-[13px] size-[34px] top-[13px]" data-name="mechanic (1) 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="mechanic (1) 1">
          <path d={svgPaths.p39c47800} fill="var(--fill-0, #707DD3)" id="Vector" />
          <path d={svgPaths.p1cbeb800} fill="var(--fill-0, #5766CB)" id="Vector_2" />
          <path d={svgPaths.p3d68e300} fill="var(--fill-0, #5766CB)" id="Vector_3" />
          <path d={svgPaths.p105afc80} fill="var(--fill-0, #DAE4EA)" id="Vector_4" />
          <path d={svgPaths.pd9ed700} fill="var(--fill-0, #C6D0DA)" id="Vector_5" />
          <path d={svgPaths.p364c4c00} fill="var(--fill-0, #808B95)" id="Vector_6" />
          <path d={svgPaths.p2ed3c700} fill="var(--fill-0, #5E6B75)" id="Vector_7" />
          <path d={svgPaths.p35906500} fill="var(--fill-0, #DAE4EA)" id="Vector_8" />
          <path d={svgPaths.p3174b500} fill="var(--fill-0, #E4936B)" id="Vector_9" />
          <path d={svgPaths.p2979a00} fill="var(--fill-0, #F6F9F9)" id="Vector_10" />
          <path d={svgPaths.p29b8dc00} fill="var(--fill-0, #E7ECF1)" id="Vector_11" />
          <path d={svgPaths.p1def8680} fill="var(--fill-0, #707DD3)" id="Vector_12" />
          <path d={svgPaths.p18c91a00} fill="var(--fill-0, #5766CB)" id="Vector_13" />
          <path d={svgPaths.p3f7ef980} fill="var(--fill-0, #D5D8F1)" id="Vector_14" />
          <path d={svgPaths.p2b15c600} fill="var(--fill-0, #BEC3EA)" id="Vector_15" />
          <path d={svgPaths.p1f60a930} fill="var(--fill-0, #5766CB)" id="Vector_16" />
          <path d={svgPaths.p28b50100} fill="var(--fill-0, #808B95)" id="Vector_17" />
          <path d={svgPaths.p1182fe80} fill="var(--fill-0, #E28086)" id="Vector_18" />
          <path d={svgPaths.p18924240} fill="var(--fill-0, #F1D0A5)" id="Vector_19" />
          <path d={svgPaths.p762a3c0} fill="var(--fill-0, #E28086)" id="Vector_20" />
          <path d={svgPaths.p199e8200} fill="var(--fill-0, #DD636E)" id="Vector_21" />
          <path d={svgPaths.p72cff80} fill="var(--fill-0, #F1D0A5)" id="Vector_22" />
          <path d={svgPaths.p11c88a00} fill="var(--fill-0, #F6E266)" id="Vector_23" />
          <path d={svgPaths.p24e20180} fill="var(--fill-0, #F6E266)" id="Vector_24" />
          <path d={svgPaths.p3370ec40} fill="var(--fill-0, black)" id="Vector_25" />
          <path d={svgPaths.p264b9a80} fill="var(--fill-0, black)" id="Vector_26" />
        </g>
      </svg>
    </div>
  );
}

function Frame39() {
  return (
    <div className="bg-[#fefdec] overflow-clip relative rounded-[24px] shrink-0 size-[60px]">
      <Mechanic1 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
      <Frame39 />
      <p className="font-['Neue_Montreal:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#080808] text-[16px]">{`Economic Empowerment & Job Creation`}</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[12px] items-start left-1/2 top-[40px] w-[300px]">
      <Frame19 />
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#080808] text-[14px] w-full whitespace-pre-wrap">Creating employment through the establishment of conversion workshops and training technicians in CNG technology.</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="bg-white h-[265px] overflow-clip relative rounded-[24px] shrink-0 w-[360px]">
      <Frame38 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
      <Frame25 />
      <Frame26 />
      <Frame33 />
    </div>
  );
}

function Component23() {
  return (
    <div className="absolute inset-[-0.03%_3.34%]" data-name="_273015776">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.7271 34.0229">
        <g id="_273015776">
          <path clipRule="evenodd" d={svgPaths.pd248f80} fill="var(--fill-0, #E6E6E6)" fillRule="evenodd" id="_272986544" />
          <path clipRule="evenodd" d={svgPaths.pfaeb200} fill="var(--fill-0, #E6E6E6)" fillRule="evenodd" id="_272986784" />
          <path clipRule="evenodd" d={svgPaths.p19d19680} fill="var(--fill-0, #FF5959)" fillRule="evenodd" id="_272986880" />
          <path clipRule="evenodd" d={svgPaths.p2837a300} fill="var(--fill-0, #E6E6E6)" fillRule="evenodd" id="_273018632" />
          <path clipRule="evenodd" d={svgPaths.pee65f80} fill="var(--fill-0, #3C5174)" fillRule="evenodd" id="_273018752" />
          <g id="Group">
            <path clipRule="evenodd" d={svgPaths.p25558300} fill="var(--fill-0, #808DA4)" fillRule="evenodd" id="_273018656" />
            <path clipRule="evenodd" d={svgPaths.pa9cef00} fill="var(--fill-0, #808DA4)" fillRule="evenodd" id="_273018296" />
            <path clipRule="evenodd" d={svgPaths.p2580a400} fill="var(--fill-0, #808DA4)" fillRule="evenodd" id="_273017936" />
            <path clipRule="evenodd" d={svgPaths.p3fc6fcf0} fill="var(--fill-0, #808DA4)" fillRule="evenodd" id="_273018128" />
          </g>
          <path clipRule="evenodd" d={svgPaths.p113ce900} fill="var(--fill-0, #334562)" fillRule="evenodd" id="_273018224" />
          <path clipRule="evenodd" d={svgPaths.p6fdab00} fill="var(--fill-0, #334562)" fillRule="evenodd" id="_273017168" />
          <path clipRule="evenodd" d={svgPaths.p29cb5500} fill="var(--fill-0, #FEC9A3)" fillRule="evenodd" id="_273017576" />
          <path clipRule="evenodd" d={svgPaths.p30170f78} fill="var(--fill-0, #3C5174)" fillRule="evenodd" id="_273017360" />
          <path clipRule="evenodd" d={svgPaths.p2c83f000} fill="var(--fill-0, #49648E)" fillRule="evenodd" id="_273017528" />
          <path clipRule="evenodd" d={svgPaths.p28cedc40} fill="var(--fill-0, #D6D6D4)" fillRule="evenodd" id="_273017480" />
          <path clipRule="evenodd" d={svgPaths.p3e0cbd80} fill="var(--fill-0, #E6E6E6)" fillRule="evenodd" id="_273017672" />
          <path clipRule="evenodd" d={svgPaths.p1ab2680} fill="var(--fill-0, #FEC9A3)" fillRule="evenodd" id="_273016448" />
          <path clipRule="evenodd" d={svgPaths.pd4709c0} fill="var(--fill-0, #FEB593)" fillRule="evenodd" id="_273016928" />
          <g id="Group_2">
            <path clipRule="evenodd" d={svgPaths.p159da600} fill="var(--fill-0, #334562)" fillRule="evenodd" id="_273017048" />
            <path clipRule="evenodd" d={svgPaths.p14b86a80} fill="var(--fill-0, #334562)" fillRule="evenodd" id="_273016664" />
          </g>
          <path clipRule="evenodd" d={svgPaths.p3d365600} fill="var(--fill-0, #FEC9A3)" fillRule="evenodd" id="_273016616" />
          <path clipRule="evenodd" d={svgPaths.p3ebc9480} fill="var(--fill-0, #FEC9A3)" fillRule="evenodd" id="_273016856" />
        </g>
      </svg>
    </div>
  );
}

function LayerX() {
  return (
    <div className="absolute contents inset-[-0.03%_3.34%]" data-name="Layer_x0020_1">
      <Component23 />
    </div>
  );
}

function Mechanic() {
  return (
    <div className="absolute left-[13px] overflow-clip size-[34px] top-[13px]" data-name="mechanic 1">
      <LayerX />
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-[#fefdec] overflow-clip relative rounded-[24px] shrink-0 size-[60px]">
      <Mechanic />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
      <Frame43 />
      <p className="font-['Neue_Montreal:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#080808] text-[16px]">Energy Security</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[12px] items-start left-1/2 top-[40px] w-[300px]">
      <Frame20 />
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#080808] text-[14px] w-full whitespace-pre-wrap">{`Leveraging Nigeria’s vast domestic natural gas reserves to reduce dependency on imported petroleum. `}</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="bg-white h-[265px] overflow-clip relative rounded-[24px] shrink-0 w-[360px]">
      <Frame42 />
    </div>
  );
}

function GasPump() {
  return (
    <div className="absolute left-[13px] size-[34px] top-[13px]" data-name="gas-pump 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g clipPath="url(#clip0_5_1300)" id="gas-pump 1">
          <path d={svgPaths.p4c2c00} fill="var(--fill-0, #BDBFBA)" id="Vector" />
          <path d={svgPaths.pfbff300} fill="var(--fill-0, #525360)" id="Vector_2" />
          <path d={svgPaths.p250c9300} fill="var(--fill-0, #BDBFBA)" id="Vector_3" />
          <path d={svgPaths.p8acf070} fill="var(--fill-0, #FF8C01)" id="Vector_4" />
          <path d={svgPaths.p31470800} fill="var(--fill-0, #E8650C)" id="Vector_5" />
          <path d={svgPaths.pa44a600} fill="var(--fill-0, #636570)" id="Vector_6" />
          <path d={svgPaths.p1672e300} fill="var(--fill-0, #393A47)" id="Vector_7" />
          <path d={svgPaths.p33aa9000} fill="var(--fill-0, #C8E5FC)" id="Vector_8" />
          <path d={svgPaths.p10cea7c0} fill="var(--fill-0, #E0F1FC)" id="Vector_9" />
          <path d={svgPaths.p3f732580} fill="var(--fill-0, #FFDAA4)" id="Vector_10" />
          <path d={svgPaths.p2f7e9f00} fill="var(--fill-0, #FFC35A)" id="Vector_11" />
          <path d={svgPaths.p1ac10600} fill="var(--fill-0, #E8650C)" id="Vector_12" />
          <path d={svgPaths.p5537c80} fill="var(--fill-0, #8FC8F2)" id="Vector_13" />
          <path d={svgPaths.p28120880} fill="var(--fill-0, #636570)" id="Vector_14" />
          <path d={svgPaths.p380ade00} fill="var(--fill-0, #FCA84C)" id="Vector_15" />
          <path d={svgPaths.p22da9c80} fill="var(--fill-0, #FF8C01)" id="Vector_16" />
          <path d={svgPaths.p24086c80} fill="var(--fill-0, #577DDD)" id="Vector_17" />
          <path d={svgPaths.p3589f480} fill="var(--fill-0, #4369B5)" id="Vector_18" />
          <path d={svgPaths.p3427bb00} fill="var(--fill-0, #636570)" id="Vector_19" />
          <path d={svgPaths.p14508710} fill="var(--fill-0, #393A47)" id="Vector_20" />
        </g>
        <defs>
          <clipPath id="clip0_5_1300">
            <rect fill="white" height="34" width="34" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame46() {
  return (
    <div className="bg-[#fefdec] overflow-clip relative rounded-[24px] shrink-0 size-[60px]">
      <GasPump />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
      <Frame46 />
      <p className="font-['Neue_Montreal:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#080808] text-[16px]">Infrastructure Development</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[12px] items-start left-1/2 top-[40px] w-[300px]">
      <Frame22 />
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#080808] text-[14px] w-full whitespace-pre-wrap">Facilitating the deployment of CNG-powered mass transit buses and establishing a nationwide network of refuelling stations and conversion centers.</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="bg-white h-[265px] overflow-clip relative rounded-[24px] shrink-0 w-[360px]">
      <Frame45 />
    </div>
  );
}

function Budget() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[34px] top-1/2" data-name="budget 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g clipPath="url(#clip0_16_2584)" id="budget 1">
          <path d={svgPaths.p38fe2a00} fill="var(--fill-0, #FFC477)" id="Vector" />
          <path d={svgPaths.pd25ce00} fill="var(--fill-0, #FFDAAA)" id="Vector_2" />
          <path d={svgPaths.p1943d500} fill="var(--fill-0, #4CBA68)" id="Vector_3" />
          <path d={svgPaths.p30510200} fill="var(--fill-0, #7CCC92)" id="Vector_4" />
          <path d={svgPaths.p20afc000} fill="var(--fill-0, #2C733F)" id="Vector_5" />
          <path d={svgPaths.pb457100} fill="var(--fill-0, #1E81CE)" id="Vector_6" />
          <path d={svgPaths.p349eb000} fill="var(--fill-0, #3D9AE2)" id="Vector_7" />
          <g id="Group">
            <path d={svgPaths.p1bc70d00} fill="var(--fill-0, #2C733F)" id="Vector_8" />
            <path d={svgPaths.p28dcc380} fill="var(--fill-0, #2C733F)" id="Vector_9" />
          </g>
          <path d={svgPaths.p3c402040} fill="var(--fill-0, #EE8700)" id="Vector_10" />
          <g id="Group_2">
            <path d={svgPaths.p1d760200} fill="var(--fill-0, #2C733F)" id="Vector_11" />
            <path d={svgPaths.p93d7f00} fill="var(--fill-0, #2C733F)" id="Vector_12" />
            <path d={svgPaths.p3750f300} fill="var(--fill-0, #2C733F)" id="Vector_13" />
          </g>
          <path d={svgPaths.p39b93400} fill="var(--fill-0, #EE8700)" id="Vector_14" />
          <g id="Group_3">
            <path d={svgPaths.p34f97d00} fill="var(--fill-0, #317F46)" id="Vector_15" />
            <path d={svgPaths.p2ba0b680} fill="var(--fill-0, #317F46)" id="Vector_16" />
            <path d={svgPaths.p1d576900} fill="var(--fill-0, #317F46)" id="Vector_17" />
          </g>
          <path d={svgPaths.p36ecfe00} fill="var(--fill-0, #FF9811)" id="Vector_18" />
          <g id="Group_4">
            <path d={svgPaths.p335c8800} fill="var(--fill-0, #317F46)" id="Vector_19" />
            <path d={svgPaths.pa927e60} fill="var(--fill-0, #317F46)" id="Vector_20" />
            <path d={svgPaths.p2bda4540} fill="var(--fill-0, #317F46)" id="Vector_21" />
          </g>
          <path d={svgPaths.p267c2d00} fill="var(--fill-0, #FF9811)" id="Vector_22" />
          <path d={svgPaths.p23171d00} fill="var(--fill-0, #FFB655)" id="Vector_23" />
          <g id="Group_5">
            <path d={svgPaths.p257a5c80} fill="var(--fill-0, #4E901E)" id="Vector_24" />
            <path d={svgPaths.p2afe1540} fill="var(--fill-0, #4E901E)" id="Vector_25" />
            <path d={svgPaths.pcf22e00} fill="var(--fill-0, #4E901E)" id="Vector_26" />
            <path d={svgPaths.p2df34d00} fill="var(--fill-0, #4E901E)" id="Vector_27" />
            <path d={svgPaths.p3b932770} fill="var(--fill-0, #4E901E)" id="Vector_28" />
          </g>
          <path d={svgPaths.p19e7a800} fill="var(--fill-0, #AA6100)" id="Vector_29" />
          <path d={svgPaths.p35f0ba80} fill="var(--fill-0, #CC7400)" id="Vector_30" />
          <path d={svgPaths.p34c22f00} fill="var(--fill-0, #EE8700)" id="Vector_31" />
          <path d={svgPaths.p39e2f900} fill="var(--fill-0, #FF9811)" id="Vector_32" />
          <path d={svgPaths.p3a883200} fill="var(--fill-0, #FFA733)" id="Vector_33" />
          <path d={svgPaths.p4e4ef00} fill="var(--fill-0, #CC7400)" id="Vector_34" />
          <path d={svgPaths.pb658700} fill="var(--fill-0, #FFC477)" id="Vector_35" />
          <path d={svgPaths.p25581a00} fill="var(--fill-0, #CC7400)" id="Vector_36" />
          <path d={svgPaths.p1e88ce00} fill="var(--fill-0, #EE8700)" id="Vector_37" />
          <path d={svgPaths.p3bc5aa00} fill="var(--fill-0, #FFA733)" id="Vector_38" />
          <g id="Group_6">
            <path d={svgPaths.p128c6cf0} fill="var(--fill-0, #AA6100)" id="Vector_39" />
            <path d={svgPaths.p28657600} fill="var(--fill-0, #AA6100)" id="Vector_40" />
            <path d={svgPaths.p3e3985e0} fill="var(--fill-0, #AA6100)" id="Vector_41" />
            <path d={svgPaths.pf5eef00} fill="var(--fill-0, #AA6100)" id="Vector_42" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_16_2584">
            <rect fill="white" height="34" width="34" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame49() {
  return (
    <div className="bg-[#fefdec] overflow-clip relative rounded-[24px] shrink-0 size-[60px]">
      <Budget />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
      <Frame49 />
      <p className="font-['Neue_Montreal:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#080808] text-[16px]">Targeted Adoption</p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[12px] items-start left-1/2 top-[40px] w-[300px]">
      <Frame23 />
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#080808] text-[14px] w-full whitespace-pre-wrap">{`A specific goal to have one million gas-powered vehicles on Nigerian roads by the end of 2027 through conversion programme and new vehicle assembly. `}</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="bg-white h-[265px] overflow-clip relative rounded-[24px] shrink-0 w-[360px]">
      <Frame48 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
      <Frame41 />
      <Frame44 />
      <Frame47 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame29 />
      <Frame40 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[60px] items-center left-0 top-1/2 w-[1120px]">
      <Frame37 />
      <Frame32 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="absolute h-[732px] left-[160px] top-[96px] w-[1120px]">
      <Frame34 />
    </div>
  );
}

function Desktop2() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#f7f8fa] h-[963px] left-1/2 overflow-clip top-[700px] w-[1440px]" data-name="Desktop - 16">
      <Frame50 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[2.14%_0]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59.9999 57.4372">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p145bb80} fill="var(--fill-0, #9DC6FB)" id="Vector" />
            <path d={svgPaths.pd976e00} fill="var(--fill-0, #80B4FB)" id="Vector_2" />
          </g>
          <g id="Group_3">
            <path d={svgPaths.p33349d00} fill="var(--fill-0, #E27A66)" id="Vector_3" />
            <path d={svgPaths.p1c2fbf80} fill="var(--fill-0, #DD636E)" id="Vector_4" />
          </g>
          <g id="Group_4">
            <path d={svgPaths.p325d2180} fill="var(--fill-0, #FFE07D)" id="Vector_5" />
            <path d={svgPaths.p1b588f00} fill="var(--fill-0, #FFD064)" id="Vector_6" />
          </g>
          <path d={svgPaths.p33053700} fill="var(--fill-0, #F9F6F9)" id="Vector_7" />
          <path d={svgPaths.p12319900} fill="var(--fill-0, #D0CEE7)" id="Vector_8" />
          <g id="Group_5">
            <path d={svgPaths.p919a300} fill="var(--fill-0, #B3E59F)" id="Vector_9" />
            <path d={svgPaths.p24a44b00} fill="var(--fill-0, #95D6A4)" id="Vector_10" />
          </g>
          <g id="Group_6">
            <path d={svgPaths.p331e9000} fill="var(--fill-0, #5E54AC)" id="Vector_11" />
            <path d={svgPaths.p2b891c80} fill="var(--fill-0, #5E54AC)" id="Vector_12" />
            <path d={svgPaths.p1c260b00} fill="var(--fill-0, #5E54AC)" id="Vector_13" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Faq() {
  return (
    <div className="overflow-clip relative shrink-0 size-[60px]" data-name="faq 1">
      <Group2 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Faq />
      <p className="font-['Neue_Montreal:Bold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#080808] text-[40px] w-[min-content] whitespace-pre-wrap">Frequently Asked Questions</p>
    </div>
  );
}

function ArrowRight1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow-right 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-right 1">
          <path d={svgPaths.p2fbb9880} fill="var(--fill-0, #1BAD50)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative rounded-[16px] shrink-0">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1bad50] text-[16px]">Contact us</p>
      <ArrowRight1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[234px]">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#080808] text-[20px] w-[min-content] whitespace-pre-wrap">Have other questions?</p>
      <Frame1 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[60px] items-start left-1/2 top-1/2 w-[325px]">
      <Frame24 />
      <Frame11 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute h-[359px] left-[72px] overflow-clip rounded-[20px] top-[54.5px] w-[440px]">
      <Frame10 />
    </div>
  );
}

function Elements() {
  return (
    <div className="absolute inset-[8.33%]" data-name="elements">
      <div className="absolute inset-[-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 21.5">
          <g>
            <path d={svgPaths.p19249180} id="Vector" stroke="var(--stroke-0, #080808)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <circle cx="10.75" cy="10.75" id="Vector_2" r="10" stroke="var(--stroke-0, #080808)" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function PlusSignCircle1() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="plus-sign-circle">
      <Elements />
    </div>
  );
}

function PlusSignCircle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="plus-sign-circle">
      <PlusSignCircle1 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#080808] text-[16px] whitespace-nowrap">
        <p className="leading-[22px]">What is Pi-CNG, and how does it work?</p>
      </div>
      <PlusSignCircle />
    </div>
  );
}

function FaqComp() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center px-[42px] py-[30px] relative shrink-0 w-[715px]" data-name="FAQ Comp">
      <Frame12 />
    </div>
  );
}

function Elements1() {
  return (
    <div className="absolute inset-[8.33%]" data-name="elements">
      <div className="absolute inset-[-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 21.5">
          <g>
            <path d={svgPaths.p19249180} id="Vector" stroke="var(--stroke-0, #080808)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <circle cx="10.75" cy="10.75" id="Vector_2" r="10" stroke="var(--stroke-0, #080808)" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function PlusSignCircle3() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="plus-sign-circle">
      <Elements1 />
    </div>
  );
}

function PlusSignCircle2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="plus-sign-circle">
      <PlusSignCircle3 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#080808] text-[16px] whitespace-nowrap">
        <p className="leading-[22px]">Which vehicles can use CNG under the Pi-CNG initiative?</p>
      </div>
      <PlusSignCircle2 />
    </div>
  );
}

function Component20() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center px-[42px] py-[30px] relative shrink-0 w-[715px]" data-name="Component 15">
      <Frame13 />
    </div>
  );
}

function Elements2() {
  return (
    <div className="absolute inset-[8.33%]" data-name="elements">
      <div className="absolute inset-[-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 21.5">
          <g>
            <path d={svgPaths.p19249180} id="Vector" stroke="var(--stroke-0, #080808)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <circle cx="10.75" cy="10.75" id="Vector_2" r="10" stroke="var(--stroke-0, #080808)" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function PlusSignCircle5() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="plus-sign-circle">
      <Elements2 />
    </div>
  );
}

function PlusSignCircle4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="plus-sign-circle">
      <PlusSignCircle5 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#080808] text-[16px] whitespace-nowrap">
        <p className="leading-[22px]">How safe is CNG compared to petrol or diesel for transportation?</p>
      </div>
      <PlusSignCircle4 />
    </div>
  );
}

function Component21() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center px-[42px] py-[30px] relative shrink-0 w-[715px]" data-name="Component 14">
      <Frame14 />
    </div>
  );
}

function Elements3() {
  return (
    <div className="absolute inset-[8.33%]" data-name="elements">
      <div className="absolute inset-[-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 21.5">
          <g>
            <path d={svgPaths.p19249180} id="Vector" stroke="var(--stroke-0, #080808)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <circle cx="10.75" cy="10.75" id="Vector_2" r="10" stroke="var(--stroke-0, #080808)" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function PlusSignCircle7() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="plus-sign-circle">
      <Elements3 />
    </div>
  );
}

function PlusSignCircle6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="plus-sign-circle">
      <PlusSignCircle7 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Neue_Montreal:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#080808] text-[16px] whitespace-nowrap">
        <p className="leading-[22px]">What are the cost benefits of using CNG for personal or commercial vehicles?</p>
      </div>
      <PlusSignCircle6 />
    </div>
  );
}

function Component22() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center px-[42px] py-[30px] relative shrink-0 w-[715px]" data-name="Component 16">
      <Frame15 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[624px] top-[66px] w-[715px]">
      <FaqComp />
      <Component20 />
      <Component21 />
      <Component22 />
    </div>
  );
}

function Desktop1() {
  return (
    <div className="-translate-x-1/2 absolute bg-white h-[468px] left-1/2 overflow-clip top-[1663px] w-[1440px]" data-name="Desktop - 11">
      <Frame9 />
      <Frame16 />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-[#d0d5dd] relative size-full" data-name="Desktop">
      <Bubble />
      <DesktopHeader />
      <HeroSection />
      <Footer />
      <Desktop2 />
      <Desktop1 />
    </div>
  );
}