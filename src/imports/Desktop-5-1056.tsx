import svgPaths from "./svg-bxb5dxz7l3";

import { imgGroup } from "./svg-ur4un";

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
    <div className="bg-[#fefdec] content-stretch flex items-center justify-between px-[20px] py-[10px] relative rounded-[12px] shrink-0 w-[110px]" data-name="Component 2">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1bad50] text-[14px] text-center">Who We Are</p>
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

function Frame29() {
  return <div className="absolute bg-[#f9e745] h-[8px] left-[84px] rounded-[100px] top-0 w-[113px]" />;
}

function Frame54() {
  return (
    <div className="h-[8px] relative shrink-0 w-[281px]">
      <Frame29 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[30px] items-center left-[282.89px] top-1/2 w-[874.211px]">
      <p className="font-['Neue_Montreal:Bold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[50px] text-center text-white w-[min-content] whitespace-pre-wrap">Who We Are</p>
      <Frame54 />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#f7f8fa] h-[600px] left-1/2 overflow-clip top-[100px] w-[1440px]" data-name="Hero Section">
      <div className="absolute h-[786.316px] left-0 top-[-53.16px] w-[1440px]" data-name="download (3) (3) 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDownload331} />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#080808] h-[740px] left-1/2 opacity-70 top-1/2 w-[1440px]" />
      <Frame55 />
    </div>
  );
}

function Group17() {
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

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full">
      <Component5 />
      <Component6 />
      <Component7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[748.04px] top-[69.32px] w-[140px]">
      <Component4 />
      <Frame9 />
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

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full">
      <Component9 />
      <Component10 />
      <Component11 />
      <Component12 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[988.04px] top-[69.32px] w-[140px]">
      <Component8 />
      <Frame11 />
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

function Group18() {
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
          <Group18 />
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

function Frame13() {
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

function Frame12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[1228.04px] top-[69.32px] w-[140px]">
      <Component13 />
      <Frame13 />
    </div>
  );
}

function Footer() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#080808] h-[543px] left-1/2 overflow-clip top-[3531px] w-[1440px]" data-name="Footer">
      <Group17 />
      <div className="absolute h-0 left-[72.48px] top-[446.32px] w-[1295.562px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1295.56 1">
            <line id="Line 5" stroke="var(--stroke-0, #B9B6B6)" x2="1295.56" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Neue_Montreal:Regular',sans-serif] leading-[22px] left-[72.48px] not-italic text-[16px] text-white top-[455.32px]">{`© 2026  -  Presidential Initiative on CNG (Pi-CNG)`}</p>
      <Frame8 />
      <Frame10 />
      <Frame12 />
      <div className="absolute font-['Neue_Montreal:Regular',sans-serif] leading-[22px] left-[73.08px] not-italic text-[16px] text-white top-[167.55px] w-[321.344px] whitespace-pre-wrap">
        <p className="mb-0">{`Get updates delivered to your inbox. You can also reach us via the email address below. `}</p>
        <p className="text-[#1bad50]">info@pci.gov.ng</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap">
      <p className="font-['Neue_Montreal:Bold',sans-serif] leading-[40px] relative shrink-0 text-[#1bad50] text-[40px] w-full">About Us</p>
      <div className="font-['Neue_Montreal:Regular',sans-serif] leading-[24px] relative shrink-0 text-[#080808] text-[18px] w-full">
        <p className="mb-0">{`The Presidential Initiative on CNG (Pi-CNG & EV) is a flagship programme of the Federal Government of Nigeria launched in 2023 to fast-track the nation’s transition to cleaner, more affordable, and more sustainable transportation energy sources. `}</p>
        <p className="mb-0">{` `}</p>
        <p>Rooted in the Renewed Hope Agenda, the initiative promotes the widespread adoption of Compressed Natural Gas (CNG ) and electric vehicles especially in mass transit systems driving cost savings, job creation, energy security, and environmental sustainability while aligning with national policies on sustainable transport, reduced emissions, gas-flaring mitigation, and economic growth.</p>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[461.05px]">
      <Frame36 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="bg-[#080808] h-[360px] overflow-clip relative rounded-[24px] shrink-0 w-[530px]">
      <div className="absolute h-[360px] right-0 top-0 w-[540.211px]" data-name="WhatsApp Image 2026-02-10 at 1.40.27 AM 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhatsAppImage20260210At14027Am1} />
      </div>
    </div>
  );
}

function Frame79() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[100px] items-end left-1/2 top-[168.5px]">
      <Frame37 />
      <Frame78 />
    </div>
  );
}

function Desktop2() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#f6f6f6] h-[701px] left-1/2 overflow-clip top-[700px] w-[1440px]" data-name="Desktop - 14">
      <Frame79 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-end relative shrink-0">
      <p className="font-['Neue_Montreal:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#080808] text-[32px]">Our Vision and Mission</p>
      <div className="h-0 relative shrink-0 w-[43.49px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.4899 1">
            <line id="Line 4" stroke="var(--stroke-0, #080808)" x2="43.4899" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#080808] h-[249px] left-1/2 overflow-clip top-0 w-[428px]">
      <div className="absolute h-[295.036px] left-[-7.28px] top-[-50px] w-[442.554px]" data-name="2731 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img27311} />
      </div>
    </div>
  );
}

function Line() {
  return (
    <div className="absolute inset-[16.67%_4.17%_14.58%_4.17%]" data-name="Line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16.5">
        <g id="Line">
          <g id="Group">
            <path d={svgPaths.p24466700} fill="var(--fill-0, #292E34)" id="Vector" />
            <path d={svgPaths.p1da22cf0} fill="var(--fill-0, #292E34)" id="Vector_2" />
            <path d={svgPaths.p2b7664f0} fill="var(--fill-0, #292E34)" id="Vector_3" />
          </g>
          <path d={svgPaths.p3bd85300} fill="var(--fill-0, #393F44)" id="Vector_4" />
          <path d={svgPaths.p167d4b00} fill="var(--fill-0, #393F44)" id="Vector_5" />
          <path d={svgPaths.p33ff1d80} fill="var(--fill-0, #4D5258)" id="Vector_6" />
          <path d={svgPaths.p16d8ad00} fill="var(--fill-0, #4D5258)" id="Vector_7" />
          <g id="Group_2">
            <path d={svgPaths.p13327f00} fill="var(--fill-0, #DEF3FF)" id="Vector_8" />
            <path d={svgPaths.p583d00} fill="var(--fill-0, #DEF3FF)" id="Vector_9" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Binocular() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="binocular 1">
      <Line />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Binocular />
      <p className="font-['Neue_Montreal:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#080808] text-[16px]">Vision</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[7px] items-start left-1/2 top-[calc(50%+1.5px)] w-[366px]">
      <Frame25 />
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#080808] text-[14px] w-full whitespace-pre-wrap">To achieve universal access to affordable, reliable and sustainable gas and EV infrastructure, enabling cleaner, safer and more inclusive transportation for all.</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#fefdec] bottom-0 h-[146px] left-1/2 overflow-clip rounded-[20px] w-[428px]">
      <Frame5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#f6f6f6] h-[361px] overflow-clip relative rounded-[24px] shrink-0 w-[428px]">
      <Frame4 />
      <Frame24 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#080808] h-[249px] left-1/2 overflow-clip top-0 w-[428px]">
      <div className="absolute h-[288.556px] left-[-2.88px] top-[-19.78px] w-[433.702px]" data-name="77 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img771} />
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[10.37%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.0219 19.0219">
        <g id="Group">
          <path d={svgPaths.p1c4ae380} fill="var(--fill-0, #F05458)" id="Vector" />
          <g id="Group_2">
            <path d={svgPaths.p298bbb00} fill="var(--fill-0, #F4F4F3)" id="Vector_2" />
            <path d={svgPaths.p37110200} fill="var(--fill-0, #F4F4F3)" id="Vector_3" />
            <path d={svgPaths.p98f3f80} fill="var(--fill-0, #F4F4F3)" id="Vector_4" />
          </g>
          <path d={svgPaths.p2cebd00} fill="var(--fill-0, #F2B895)" id="Vector_5" />
          <path d={svgPaths.p28724f00} fill="var(--fill-0, #528BC9)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Goal() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="goal 1">
      <Group2 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Goal />
      <p className="font-['Neue_Montreal:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#080808] text-[16px]">Mission</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[7px] items-start left-1/2 top-[calc(50%-0.5px)] w-[366px]">
      <Frame27 />
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#080808] text-[14px] w-full whitespace-pre-wrap">To drive gas and EV adoption rate for every Nigerian by 30% through ensuring acceptability, availability, and affordability through strategic partnerships, innovative financing, and sustained public awareness and capacity-building initiatives.</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#e8f7ee] bottom-0 h-[146px] left-1/2 overflow-clip rounded-[20px] w-[428px]">
      <Frame15 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#f6f6f6] h-[361px] overflow-clip relative rounded-[24px] shrink-0 w-[428px]">
      <Frame7 />
      <Frame26 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[30px] items-center relative shrink-0 w-full">
      <Frame6 />
      <Frame14 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[50px] items-center left-1/2 top-1/2 w-[886px]">
      <Frame2 />
      <Frame41 />
    </div>
  );
}

function Desktop3() {
  return (
    <div className="-translate-x-1/2 absolute bg-white h-[575px] left-1/2 overflow-clip top-[1401px] w-[1440px]" data-name="Desktop - 15">
      <Frame42 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-end relative shrink-0">
      <p className="font-['Neue_Montreal:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#080808] text-[32px]">Strategic Implementation programme</p>
      <div className="h-0 relative shrink-0 w-[43.49px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.4899 1">
            <line id="Line 4" stroke="var(--stroke-0, #080808)" x2="43.4899" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[796px]">
      <Frame3 />
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[18px] text-black text-center w-[min-content] whitespace-pre-wrap">{`Comprehensive programme designed to accelerate CNG adoption across Nigeria's transportation sector.`}</p>
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

function Frame46() {
  return (
    <div className="bg-[#fefdec] overflow-clip relative rounded-[24px] shrink-0 size-[60px]">
      <CarWash />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
      <Frame46 />
      <p className="font-['Neue_Montreal:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#080808] text-[16px]">Conversion Incentive Programme</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[12px] items-start left-1/2 top-[40px] w-[300px]">
      <Frame28 />
      <div className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#080808] text-[14px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Offers free conversion (labor inclusive) for eligible union-registered commercial vehicles and ride-share fleets. Operators like Uber/Bolt can access 50% subsidized conversions. `}</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-white h-[265px] overflow-clip relative rounded-[24px] shrink-0 w-[360px]">
      <Frame47 />
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

function Frame50() {
  return (
    <div className="bg-[#fefdec] overflow-clip relative rounded-[24px] shrink-0 size-[60px]">
      <DeliveryTruck />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
      <Frame50 />
      <p className="font-['Neue_Montreal:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#080808] text-[16px]">Platform Deployment Programme</p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[12px] items-start left-1/2 top-[40px] w-[300px]">
      <Frame30 />
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#080808] text-[14px] w-full whitespace-pre-wrap">Launching thousands of CNG or bi-fuel buses and tricycles on major national transit corridors.</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="bg-white h-[265px] overflow-clip relative rounded-[24px] shrink-0 w-[360px]">
      <Frame49 />
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

function Frame58() {
  return (
    <div className="bg-[#fefdec] overflow-clip relative rounded-[24px] shrink-0 size-[60px]">
      <Mechanic1 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
      <Frame58 />
      <p className="font-['Neue_Montreal:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#080808] text-[16px]">Conversion Centre Expansion Programme</p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[12px] items-start left-1/2 top-[40px] w-[300px]">
      <Frame31 />
      <div className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#080808] text-[14px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Scaling from pilot workshops to an expansive network. `}</p>
        <p className="mb-0">{` `}</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="bg-white h-[265px] overflow-clip relative rounded-[24px] shrink-0 w-[360px]">
      <Frame57 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
      <Frame43 />
      <Frame45 />
      <Frame56 />
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

function Frame62() {
  return (
    <div className="bg-[#fefdec] overflow-clip relative rounded-[24px] shrink-0 size-[60px]">
      <Mechanic />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
      <Frame62 />
      <p className="font-['Neue_Montreal:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#080808] text-[16px]">{`Training & Capacity Building`}</p>
    </div>
  );
}

function Frame61() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[12px] items-start left-1/2 top-[40px] w-[300px]">
      <Frame32 />
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#080808] text-[14px] w-full whitespace-pre-wrap">Training 1,000 technicians and support staff in pilot phase; targeting 10,000 by 2027 to build local skills.</p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="bg-white h-[265px] overflow-clip relative rounded-[24px] shrink-0 w-[360px]">
      <Frame61 />
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

function Frame65() {
  return (
    <div className="bg-[#fefdec] overflow-clip relative rounded-[24px] shrink-0 size-[60px]">
      <GasPump />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
      <Frame65 />
      <p className="font-['Neue_Montreal:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#080808] text-[16px]">{`Refuelling & Gas Infrastructure`}</p>
    </div>
  );
}

function Frame64() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[12px] items-start left-1/2 top-[40px] w-[300px]">
      <Frame33 />
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#080808] text-[14px] w-full whitespace-pre-wrap">Rolling out both traditional refuelling stations and gas distribution hubs to support an expanding CNG ecosystem.</p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="bg-white h-[265px] overflow-clip relative rounded-[24px] shrink-0 w-[360px]">
      <Frame64 />
    </div>
  );
}

function Budget() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[34px] top-1/2" data-name="budget 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g clipPath="url(#clip0_5_1060)" id="budget 1">
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
          <clipPath id="clip0_5_1060">
            <rect fill="white" height="34" width="34" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame68() {
  return (
    <div className="bg-[#fefdec] overflow-clip relative rounded-[24px] shrink-0 size-[60px]">
      <Budget />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
      <Frame68 />
      <p className="font-['Neue_Montreal:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#080808] text-[16px]">Lower Transport Costs</p>
    </div>
  );
}

function Frame67() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[12px] items-start left-1/2 top-[40px] w-[300px]">
      <Frame34 />
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#080808] text-[14px] w-full whitespace-pre-wrap">Drive down expenses for drivers and commuters by providing low-cost, locally sourced CNG.</p>
    </div>
  );
}

function Frame66() {
  return (
    <div className="bg-white h-[265px] overflow-clip relative rounded-[24px] shrink-0 w-[360px]">
      <Frame67 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
      <Frame60 />
      <Frame63 />
      <Frame66 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute bottom-1/4 left-[9.38%] right-3/4 top-[59.38%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.3125 5.3125">
        <g id="Group">
          <path d={svgPaths.p15b0680} fill="var(--fill-0, #505050)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute bottom-1/4 left-3/4 right-[9.38%] top-[59.38%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.3125 5.3125">
        <g id="Group">
          <path d={svgPaths.p15b0680} fill="var(--fill-0, #505050)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute bottom-1/4 left-[9.38%] right-[81.25%] top-[59.38%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.1875 5.3125">
        <g id="Group">
          <path d={svgPaths.p15c40300} fill="var(--fill-0, #3C3C3C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[31.25%_6.25%_37.5%_6.25%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.75 10.625">
        <g id="Group">
          <path d={svgPaths.p1abf4570} fill="var(--fill-0, #3CC8B4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute bottom-[37.5%] left-[6.25%] right-3/4 top-[31.25%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.375 10.625">
        <g id="Group">
          <path d={svgPaths.pcdc0200} fill="var(--fill-0, #1EAA96)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute bottom-[37.5%] contents left-[6.25%] right-3/4 top-[31.25%]" data-name="Group">
      <Group9 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute bottom-[68.75%] left-[6.25%] right-[81.25%] top-1/4" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.25 2.125">
        <g id="Group">
          <path d={svgPaths.p29850a00} fill="var(--fill-0, #3CC8B4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute bottom-[68.75%] left-[6.25%] right-[85.94%] top-1/4" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.65625 2.125">
        <g id="Group">
          <path d={svgPaths.p1d9bfbf0} fill="var(--fill-0, #1EAA96)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute bottom-[68.75%] left-[81.25%] right-[6.25%] top-1/4" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.25 2.125">
        <g id="Group">
          <path d={svgPaths.p29850a00} fill="var(--fill-0, #3CC8B4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute inset-[6.25%_18.75%_68.75%_18.75%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.25 8.5">
        <g id="Group">
          <path d={svgPaths.p1108eda0} fill="var(--fill-0, #F0F0F0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute inset-[6.25%_63.87%_68.75%_18.75%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.90909 8.5">
        <g id="Group">
          <path d={svgPaths.p396074a0} fill="var(--fill-0, #D2D2D2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute bottom-1/2 left-[9.38%] right-[9.38%] top-[37.5%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.625 4.25">
        <g id="Group">
          <path d="M0 0H27.625V4.25H0V0Z" fill="var(--fill-0, #1EAA96)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute inset-[37.5%_68.75%_53.13%_9.38%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4375 3.1875">
        <g id="Group">
          <path d={svgPaths.p1b825c80} fill="var(--fill-0, #FA6450)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute inset-[37.5%_9.38%_53.13%_68.75%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4375 3.1875">
        <g id="Group">
          <path d={svgPaths.p97e8500} fill="var(--fill-0, #FA6450)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute inset-[56.25%_21.88%_31.25%_65.63%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.25 4.25">
        <g id="Group">
          <path d={svgPaths.p37267f00} fill="var(--fill-0, #F0F0F0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute bottom-[34.38%] left-[68.75%] right-1/4 top-[59.38%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.125 2.125">
        <g id="Group">
          <path d={svgPaths.pb650700} fill="var(--fill-0, #D2D2D2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute bottom-1/4 left-[59.38%] right-[34.38%] top-[68.75%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.125 2.125">
        <g id="Group">
          <path d={svgPaths.pb650700} fill="var(--fill-0, #D2D2D2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute bottom-[6.25%] left-[40.63%] right-[40.63%] top-3/4" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.375 6.375">
        <g id="Group">
          <path d={svgPaths.p158ab700} fill="var(--fill-0, #D2D2D2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute inset-[78.13%_43.75%_9.38%_43.75%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.25 4.25">
        <g id="Group">
          <path d={svgPaths.p22dd1500} fill="var(--fill-0, #F0F0F0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute inset-[37.5%_84.38%_53.13%_9.38%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.125 3.1875">
        <g id="Group">
          <path d="M0 0H2.125V3.1875H0V0Z" fill="var(--fill-0, #DC9600)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute inset-[37.5%_9.38%_53.13%_84.38%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.125 3.1875">
        <g id="Group">
          <path d="M0 0H2.125V3.1875H0V0Z" fill="var(--fill-0, #FAB400)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[6.25%]" data-name="Group">
      <Group4 />
      <Group5 />
      <Group6 />
      <Group7 />
      <Group8 />
      <Group10 />
      <Group11 />
      <Group12 />
      <Group13 />
      <Group14 />
      <Group15 />
      <Group16 />
      <Group19 />
      <Group20 />
      <Group21 />
      <Group22 />
      <Group23 />
      <Group24 />
      <Group25 />
      <Group26 />
    </div>
  );
}

function EmissionControl() {
  return (
    <div className="absolute left-[13px] overflow-clip size-[34px] top-[13px]" data-name="emission-control 1">
      <Group3 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="bg-[#fefdec] overflow-clip relative rounded-[24px] shrink-0 size-[60px]">
      <EmissionControl />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
      <Frame71 />
      <p className="font-['Neue_Montreal:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#080808] text-[16px]">{`Clean Emissions `}</p>
    </div>
  );
}

function Frame70() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[12px] items-start left-1/2 top-[40px] w-[300px]">
      <Frame35 />
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#080808] text-[14px] w-full whitespace-pre-wrap">{`Cut harmful CO₂ and NOₓ emissions to support Nigeria's climate goals and improve air quality.`}</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="bg-white h-[265px] overflow-clip relative rounded-[24px] shrink-0 w-[360px]">
      <Frame70 />
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute inset-[16.8%_16.67%_66.62%_49.8%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3998 5.63783">
        <g id="Group">
          <path d={svgPaths.p1fabf280} fill="var(--fill-0, #D8ECFE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute bottom-[66.81%] left-1/2 right-[16.67%] top-[16.81%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3334 5.56889">
        <g id="Group">
          <path d={svgPaths.p14d43c00} fill="var(--fill-0, #C4E2FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute inset-[16.8%_28.94%_75.62%_62.21%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.0082 2.57763">
        <g id="Group">
          <path d={svgPaths.p2882f8f0} fill="var(--fill-0, #685E68)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute inset-[33.19%_2.89%_34.01%_2.89%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.0371 11.1529">
        <g id="Group">
          <path d={svgPaths.p1feeab80} fill="var(--fill-0, #05E39C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute inset-[33.19%_2.89%_34.01%_2.89%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.0371 11.1529">
        <g id="Group">
          <path d={svgPaths.p3136f180} fill="var(--fill-0, #0ED290)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute inset-[24.18%_29.91%_66.81%_63.19%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.3462 3.06226">
        <g id="Group">
          <path d={svgPaths.p2ecf9400} fill="var(--fill-0, #554E56)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute inset-[28.56%_29.91%_66.81%_63.19%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.3462 1.57336">
        <g id="Group">
          <path d={svgPaths.p247ba500} fill="var(--fill-0, #433F43)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute inset-[0_24.3%_81.93%_57.63%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.14497 6.14497">
        <g id="Group">
          <path d={svgPaths.p25393d00} fill="var(--fill-0, #C96E59)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute bottom-[66.81%] left-[16.67%] right-1/2 top-[16.81%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3334 5.56889">
        <g id="Group">
          <path d={svgPaths.p1f337f00} fill="var(--fill-0, #CBC4CC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute inset-[16.8%_62.28%_75.62%_28.88%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.00814 2.57763">
        <g id="Group">
          <path d={svgPaths.pd4b6300} fill="var(--fill-0, #26A6FE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group42() {
  return (
    <div className="absolute inset-[24.18%_63.24%_66.81%_29.86%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.3462 3.06226">
        <g id="Group">
          <path d={svgPaths.p304d64f0} fill="var(--fill-0, #0593FC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group43() {
  return (
    <div className="absolute inset-[28.56%_63.24%_66.81%_29.86%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.3462 1.57336">
        <g id="Group">
          <path d={svgPaths.p2d13c100} fill="var(--fill-0, #0182FC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute inset-[0_57.63%_81.93%_24.3%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.14497 6.14497">
        <g id="Group">
          <path d={svgPaths.p25393d00} fill="var(--fill-0, #FFCEBF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute bottom-[66.81%] contents left-[16.67%] right-1/2 top-0" data-name="Group">
      <Group40 />
      <Group41 />
      <Group42 />
      <Group43 />
      <Group44 />
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute contents inset-[0_2.89%_34.01%_2.89%]" data-name="Group">
      <Group31 />
      <div className="absolute bottom-[66.62%] left-[16.67%] right-1/2 top-[16.8%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3333 5.63783">
          <path d={svgPaths.pabf4b00} fill="var(--fill-0, #E2DEE2)" id="Vector" />
        </svg>
      </div>
      <Group32 />
      <Group33 />
      <Group34 />
      <Group35 />
      <Group36 />
      <Group37 />
      <Group38 />
      <Group39 />
    </div>
  );
}

function Group46() {
  return (
    <div className="absolute inset-[61.4%_66.67%_0_0]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3334 13.1234">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p5099780} fill="var(--fill-0, #D8ECFE)" id="Vector" />
          </g>
          <g id="Group_3">
            <path d={svgPaths.p1cb13ac0} fill="var(--fill-0, #C4E2FF)" id="Vector_2" />
          </g>
          <path d={svgPaths.p1f932800} fill="var(--fill-0, #C4E2FF)" id="Vector_3" />
          <g id="Group_4">
            <path d={svgPaths.p19191b00} fill="var(--fill-0, #FFCEBF)" id="Vector_4" />
          </g>
          <g id="Group_5">
            <path d={svgPaths.p2978cd00} fill="var(--fill-0, #685E68)" id="Vector_5" />
          </g>
          <g id="Group_6">
            <path d={svgPaths.p2f516f00} fill="var(--fill-0, #554E56)" id="Vector_6" />
          </g>
          <g id="Group_7">
            <path d={svgPaths.p3871f400} fill="var(--fill-0, #433F43)" id="Vector_7" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group48() {
  return (
    <div className="absolute inset-[78.21%_33.33%_0_33.33%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3334 7.40689">
        <g id="Group">
          <path d={svgPaths.p81d48f0} fill="var(--fill-0, #FFD15B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group49() {
  return (
    <div className="absolute inset-[78.2%_41.47%_14.44%_41.47%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.80132 2.50138">
        <g id="Group">
          <path d={svgPaths.p20c1a300} fill="var(--fill-0, #FFD15B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group50() {
  return (
    <div className="absolute inset-[61.4%_40.96%_20.52%_40.96%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.14497 6.14497">
        <g id="Group">
          <path d={svgPaths.p25393d00} fill="var(--fill-0, #C96E59)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group47() {
  return (
    <div className="absolute contents inset-[61.4%_33.33%_0_33.33%]" data-name="Group">
      <Group48 />
      <Group49 />
      <Group50 />
    </div>
  );
}

function Group53() {
  return (
    <div className="absolute bottom-0 left-[66.67%] right-1/4 top-[78.2%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.83442 7.4112">
        <g id="Group">
          <path d={svgPaths.p17b5800} fill="var(--fill-0, #B5ADB6)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group54() {
  return (
    <div className="absolute inset-[78.2%_0_0_91.66%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.83442 7.4112">
        <g id="Group">
          <path d={svgPaths.p1667f080} fill="var(--fill-0, #A79BA7)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group52() {
  return (
    <div className="absolute contents inset-[78.2%_0_0_66.67%]" data-name="Group">
      <Group53 />
      <Group54 />
    </div>
  );
}

function Group55() {
  return (
    <div className="absolute inset-[93.73%_25.2%_0_66.67%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.76602 2.13204">
        <g id="Group">
          <path d="M0 0H2.76602V2.13204H0V0Z" fill="var(--fill-0, #A79BA7)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group56() {
  return (
    <div className="absolute inset-[78.2%_8.14%_0_74.8%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.80132 7.4112">
        <g id="Group">
          <path d="M0 0H5.80132V7.4112H0V0Z" fill="var(--fill-0, #D8ECFE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group57() {
  return (
    <div className="absolute inset-[93.73%_8.14%_0_74.8%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.80132 2.13204">
        <g id="Group">
          <path d="M0 0H5.80132V2.13204H0V0Z" fill="var(--fill-0, #C4E2FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group58() {
  return (
    <div className="absolute inset-[78.2%_8.14%_13.28%_74.8%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.80132 2.89611">
        <g id="Group">
          <path d={svgPaths.p159b7a50} fill="var(--fill-0, #C4E2FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group59() {
  return (
    <div className="absolute inset-[61.4%_7.63%_20.52%_74.3%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.14497 6.14497">
        <g id="Group">
          <path d={svgPaths.p25393d00} fill="var(--fill-0, #FFCEBF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group51() {
  return (
    <div className="absolute contents inset-[61.4%_0_0_66.67%]" data-name="Group">
      <Group52 />
      <Group55 />
      <Group56 />
      <Group57 />
      <Group58 />
      <Group59 />
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute contents inset-[61.4%_0_0_0]" data-name="Group">
      <Group46 />
      <Group47 />
      <Group51 />
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <Group30 />
      <Group45 />
    </div>
  );
}

function Group60() {
  return (
    <div className="absolute inset-[0.11%_24.3%_81.93%_58.95%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.69739 6.10605">
        <g id="Group">
          <path d={svgPaths.p3982e700} fill="var(--fill-0, #BB5D4C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group61() {
  return (
    <div className="absolute inset-[0.11%_57.63%_81.93%_25.61%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.69739 6.10605">
        <g id="Group">
          <path d={svgPaths.p24ad0b80} fill="var(--fill-0, #FFB09E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group62() {
  return (
    <div className="absolute inset-[61.52%_7.63%_20.52%_75.61%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.69739 6.10605">
        <g id="Group">
          <path d={svgPaths.p7789800} fill="var(--fill-0, #FFB09E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group63() {
  return (
    <div className="absolute inset-[61.52%_40.96%_20.52%_42.28%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.69739 6.10605">
        <g id="Group">
          <path d={svgPaths.pc316000} fill="var(--fill-0, #BB5D4C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group64() {
  return (
    <div className="absolute inset-[61.52%_74.3%_20.52%_8.95%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.69739 6.10605">
        <g id="Group">
          <path d={svgPaths.pcf55080} fill="var(--fill-0, #FFB09E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <Group29 />
      <Group60 />
      <Group61 />
      <Group62 />
      <Group63 />
      <Group64 />
    </div>
  );
}

function Group66() {
  return (
    <div className="absolute inset-[39.66%_18.05%_41.42%_18.05%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.7236 6.43276">
        <g id="Group">
          <path d={svgPaths.p2793f00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p391a9e80} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.paddc3f2} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.pc8d780} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p2d6bf880} fill="var(--fill-0, white)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Group68() {
  return (
    <div className="absolute inset-[85.41%_48.54%_11.41%_48.54%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.996094 1.07897">
        <g id="Group">
          <path d={svgPaths.pc47c200} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group69() {
  return (
    <div className="absolute inset-[91.65%_48.54%_5.18%_48.54%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.996094 1.07897">
        <g id="Group">
          <path d={svgPaths.pc47c200} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group67() {
  return (
    <div className="absolute contents inset-[85.41%_48.54%_5.18%_48.54%]" data-name="Group">
      <Group68 />
      <Group69 />
    </div>
  );
}

function Group71() {
  return (
    <div className="absolute inset-[85.41%_15.2%_11.41%_81.87%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.996094 1.07897">
        <g id="Group">
          <path d={svgPaths.pc47c200} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group72() {
  return (
    <div className="absolute inset-[91.65%_15.2%_5.18%_81.87%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.996094 1.07897">
        <g id="Group">
          <path d={svgPaths.pc47c200} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group70() {
  return (
    <div className="absolute contents inset-[85.41%_15.2%_5.18%_81.87%]" data-name="Group">
      <Group71 />
      <Group72 />
    </div>
  );
}

function Group65() {
  return (
    <div className="absolute contents inset-[39.66%_15.2%_5.18%_18.05%]" data-name="Group">
      <Group66 />
      <Group67 />
      <Group70 />
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <div className="absolute inset-[78.2%_33.14%_0_33.14%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.4662 7.41114">
          <path d={svgPaths.p16e8dc80} fill="var(--fill-0, #FFE177)" id="Vector" />
        </svg>
      </div>
      <Group28 />
      <Group65 />
    </div>
  );
}

function Grouping() {
  return (
    <div className="absolute left-[13px] overflow-clip size-[34px] top-[13px]" data-name="grouping 1">
      <Group27 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="bg-[#fefdec] overflow-clip relative rounded-[24px] shrink-0 size-[60px]">
      <Grouping />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
      <Frame74 />
      <p className="font-['Neue_Montreal:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#080808] text-[16px]">Generate Employment</p>
    </div>
  );
}

function Frame73() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[12px] items-start left-1/2 top-[40px] w-[300px]">
      <Frame38 />
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#080808] text-[14px] w-full whitespace-pre-wrap">Create jobs in conversion workshops, fuel distribution, and allied services. Empower technicians with necessary skills.</p>
    </div>
  );
}

function Frame72() {
  return (
    <div className="bg-white h-[265px] overflow-clip relative rounded-[24px] shrink-0 w-[360px]">
      <Frame73 />
    </div>
  );
}

function Artboard() {
  return (
    <div className="absolute inset-[4.05%_3.12%_1.56%_3.11%]" data-name="Artboard 23">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.8789 32.0918">
        <g id="Artboard 23">
          <path d={svgPaths.pd5ac200} fill="var(--fill-0, #2D9739)" id="Vector" />
          <path d={svgPaths.pc4ddd00} fill="var(--fill-0, #44BC59)" id="Vector_2" />
          <path d={svgPaths.p2fbc2a00} fill="var(--fill-0, #2D9739)" id="Vector_3" />
          <path d={svgPaths.paf52f00} fill="var(--fill-0, #FFC239)" id="Vector_4" />
          <path d={svgPaths.p149e0900} fill="var(--fill-0, #ABE4A3)" id="Vector_5" />
          <path d={svgPaths.p1f906400} fill="var(--fill-0, #CDF8C8)" id="Vector_6" />
          <path d={svgPaths.pdce8080} fill="var(--fill-0, #2D9739)" id="Vector_7" />
          <path d={svgPaths.p1abfd700} fill="var(--fill-0, #2D9739)" id="Vector_8" />
          <path d={svgPaths.p8a5ae00} fill="var(--fill-0, #FFC239)" id="Vector_9" />
          <path d={svgPaths.p31b9a300} fill="var(--fill-0, #FFC239)" id="Vector_10" />
          <path d={svgPaths.p17619400} fill="var(--fill-0, #FFC239)" id="Vector_11" />
          <path d={svgPaths.p1c550d80} fill="var(--fill-0, #FFC239)" id="Vector_12" />
          <path d={svgPaths.p17416770} fill="var(--fill-0, #ABE4A3)" id="Vector_13" />
          <path d={svgPaths.p20f3ca00} fill="var(--fill-0, #FFC239)" id="Vector_14" />
          <path d={svgPaths.p2d482700} fill="var(--fill-0, #FFC239)" id="Vector_15" />
          <path d={svgPaths.p20f67e00} fill="var(--fill-0, #FFD55D)" id="Vector_16" />
          <path d={svgPaths.p1d454e80} fill="var(--fill-0, #44BC59)" id="Vector_17" />
          <path d={svgPaths.p7188f00} fill="var(--fill-0, #FFD55D)" id="Vector_18" />
          <path d={svgPaths.p32d6780} fill="var(--fill-0, #FFD55D)" id="Vector_19" />
          <path d={svgPaths.p29500800} fill="var(--fill-0, #FFD55D)" id="Vector_20" />
          <path d={svgPaths.p14efe180} fill="var(--fill-0, #FFD55D)" id="Vector_21" />
          <path d={svgPaths.p14258800} fill="var(--fill-0, #FFD55D)" id="Vector_22" />
          <path d={svgPaths.p1776ac80} fill="var(--fill-0, #F3A606)" id="Vector_23" />
          <path d={svgPaths.p3d248800} fill="var(--fill-0, #FFC239)" id="Vector_24" />
        </g>
      </svg>
    </div>
  );
}

function Earning() {
  return (
    <div className="absolute left-[13px] overflow-clip size-[34px] top-[13px]" data-name="earning 1">
      <Artboard />
    </div>
  );
}

function Frame77() {
  return (
    <div className="bg-[#fefdec] overflow-clip relative rounded-[24px] shrink-0 size-[60px]">
      <Earning />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
      <Frame77 />
      <p className="font-['Neue_Montreal:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#080808] text-[16px]">{`Attract Investments `}</p>
    </div>
  );
}

function Frame76() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[12px] items-start left-1/2 top-[40px] w-[300px]">
      <Frame39 />
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#080808] text-[14px] w-full whitespace-pre-wrap">{`Mobilize public and private capital into Nigeria's gas economy, funding infrastructure and mass vehicle deployment.`}</p>
    </div>
  );
}

function Frame75() {
  return (
    <div className="bg-white h-[265px] overflow-clip relative rounded-[24px] shrink-0 w-[360px]">
      <Frame76 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
      <Frame44 />
      <Frame72 />
      <Frame75 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame48 />
      <Frame59 />
      <Frame69 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[30px] items-center left-[160px] top-1/2 w-[1120px]">
      <Frame52 />
      <Frame51 />
    </div>
  );
}

function Desktop4() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#f7f8fa] h-[1087px] left-1/2 overflow-clip top-[1976px] w-[1440px]" data-name="Desktop - 16">
      <Frame53 />
    </div>
  );
}

function Group73() {
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
      <Group73 />
    </div>
  );
}

function Frame40() {
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

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[234px]">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#080808] text-[20px] w-[min-content] whitespace-pre-wrap">Have other questions?</p>
      <Frame1 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[60px] items-start left-1/2 top-1/2 w-[325px]">
      <Frame40 />
      <Frame18 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute h-[359px] left-[72px] overflow-clip rounded-[20px] top-[54.5px] w-[440px]">
      <Frame17 />
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

function Frame19() {
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
      <Frame19 />
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

function Frame20() {
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
      <Frame20 />
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

function Frame21() {
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
      <Frame21 />
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

function Frame22() {
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
      <Frame22 />
    </div>
  );
}

function Frame23() {
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
    <div className="-translate-x-1/2 absolute bg-white h-[468px] left-1/2 overflow-clip top-[3063px] w-[1440px]" data-name="Desktop - 11">
      <Frame16 />
      <Frame23 />
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
      <Desktop3 />
      <Desktop4 />
      <Desktop1 />
    </div>
  );
}