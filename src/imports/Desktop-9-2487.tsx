import svgPaths from "./svg-5s05oznsaq";
import imgPicngBlackLogo1 from "@/assets/images/e7e64e42be655a27a9f21c22e639cde53ab42106.png";
import imgWhatsAppImage20260203At90419Am24 from "@/assets/images/slash.png";
import imgVectorSmartObjectCopy22 from "@/assets/images/mission.png";
import imgImage1 from "@/assets/images/fb10a2772a73e681839bb04308e5d9734db9ec1c.png";
import imgImage2 from "@/assets/images/7c336df9985e7275c07f0b13c68b769881092ba0.png";
import imgImage4 from "@/assets/images/72c7ca6d39f1fd49bfd4f275fff6d830860464a9.png";
import { imgGroup } from "./svg-f2ydy";

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
    <div className="bg-[#fefdec] content-stretch flex items-center justify-between px-[20px] py-[10px] relative rounded-[12px] shrink-0 w-[87px]" data-name="Component 4">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1bad50] text-[14px] text-center">News</p>
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

function Frame26() {
  return <div className="absolute bg-[#f9e745] h-[8px] left-[84px] rounded-[100px] top-0 w-[113px]" />;
}

function Frame27() {
  return (
    <div className="h-[8px] relative shrink-0 w-[281px]">
      <Frame26 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[30px] items-center left-1/2 top-[calc(50%-32px)] w-[874.211px]">
      <p className="font-['Neue_Montreal:Bold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[50px] text-center text-white w-[min-content] whitespace-pre-wrap">{`Stories & Updates`}</p>
      <Frame27 />
    </div>
  );
}

function Component4() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex h-[48px] items-center justify-between px-[20px] py-[10px] relative rounded-[16px] shrink-0 w-[139px]" data-name="Component 5">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">{`News & Articles`}</p>
    </div>
  );
}

function Component5() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex h-[48px] items-center justify-between px-[20px] py-[10px] relative rounded-[16px] shrink-0 w-[139px]" data-name="Component 6">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">Newsletters</p>
    </div>
  );
}

function Component6() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex h-[48px] items-center justify-between px-[20px] py-[10px] relative rounded-[16px] shrink-0 w-[139px]" data-name="Component 7">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">Testimonies</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[20px] items-center left-1/2 top-[377px]">
      <Component4 />
      <Component5 />
      <Component6 />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#f7f8fa] h-[600px] left-1/2 overflow-clip top-[100px] w-[1440px]" data-name="Hero Section">
      <div className="absolute h-[988.18px] left-[-21.13px] top-[-234.09px] w-[1482.27px]" data-name="WhatsApp Image 2026-02-03 at 9.04.19 AM (2) 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhatsAppImage20260203At90419Am24} />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#080808] h-[740px] left-1/2 opacity-70 top-1/2 w-[1440px]" />
      <Frame28 />
      <Frame29 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[73.08px] top-[69.32px]">
      <div className="absolute h-[58.236px] left-[73.08px] top-[69.32px] w-[170.859px]" data-name="Vector Smart Object copy 2 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVectorSmartObjectCopy22} />
      </div>
    </div>
  );
}

function Component7() {
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

function Component8() {
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

function Component9() {
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

function Component10() {
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

function Frame21() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full">
      <Component8 />
      <Component9 />
      <Component10 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[748.04px] top-[69.32px] w-[140px]">
      <Component7 />
      <Frame21 />
    </div>
  );
}

function Component11() {
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

function Component12() {
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

function Component13() {
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

function Component14() {
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

function Component15() {
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

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full">
      <Component12 />
      <Component13 />
      <Component14 />
      <Component15 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[988.04px] top-[69.32px] w-[140px]">
      <Component11 />
      <Frame23 />
    </div>
  );
}

function Component16() {
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

function Component17() {
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

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <MdiInstagram />
    </div>
  );
}

function Component18() {
  return (
    <div className="mb-[-4px] relative rounded-[16px] shrink-0 w-full" data-name="Component 5">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[30px] py-[12px] relative w-full">
          <Group3 />
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

function Component19() {
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

function Component20() {
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

function Component21() {
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

function Component22() {
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

function Frame25() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full">
      <Component17 />
      <Component18 />
      <Component19 />
      <Component20 />
      <Component21 />
      <Component22 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[1228.04px] top-[69.32px] w-[140px]">
      <Component16 />
      <Frame25 />
    </div>
  );
}

function Footer() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#080808] h-[543px] left-1/2 overflow-clip top-[2357px] w-[1440px]" data-name="Footer">
      <Group2 />
      <div className="absolute h-0 left-[72.48px] top-[446.32px] w-[1295.562px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1295.56 1">
            <line id="Line 5" stroke="var(--stroke-0, #B9B6B6)" x2="1295.56" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Neue_Montreal:Regular',sans-serif] leading-[22px] left-[72.48px] not-italic text-[16px] text-white top-[455.32px]">{`© 2026  -  Presidential Initiative on CNG (Pi-CNG)`}</p>
      <Frame20 />
      <Frame22 />
      <Frame24 />
      <div className="absolute font-['Neue_Montreal:Regular',sans-serif] leading-[22px] left-[73.08px] not-italic text-[16px] text-white top-[167.55px] w-[321.344px] whitespace-pre-wrap">
        <p className="mb-0">{`Get updates delivered to your inbox. You can also reach us via the email address below. `}</p>
        <p className="text-[#1bad50]">info@pci.gov.ng</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-end left-1/2 top-[50px]">
      <p className="font-['Neue_Montreal:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#080808] text-[32px]">{`Latest Insights & Stories`}</p>
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

function Frame1() {
  return (
    <div className="bg-[#d0d5dd] h-[244px] overflow-clip relative rounded-[20px] shrink-0 w-full">
      <div className="absolute h-[306.286px] left-[-10.21px] top-[-22.14px] w-[459.428px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[12px] items-start left-1/2 not-italic top-1/2 w-[320px] whitespace-pre-wrap">
      <p className="font-['Neue_Montreal:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#080808] text-[18px] w-full">Pi-CNG signs Mou with YJT of China</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#080808] text-[14px] w-full">{`Pi-CNG & EVs has signed a Memorandum of Understanding (MoU) with You Jie Te Environment Technology Ltd (YJT) of China, following a five-d...`}</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#1bad50] text-[16px] w-full">Read More</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="h-[165px] overflow-clip relative rounded-[20px] shrink-0 w-[358px]">
      <Frame5 />
    </div>
  );
}

function NewsCard() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[358px]" data-name="News Card">
      <Frame1 />
      <Frame35 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#d0d5dd] h-[244px] overflow-clip relative rounded-[20px] shrink-0 w-full">
      <div className="absolute h-[261.173px] left-[-11.88px] top-[-14.17px] w-[391.367px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[12px] items-start left-1/2 not-italic top-1/2 w-[320px] whitespace-pre-wrap">
      <p className="font-['Neue_Montreal:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#080808] text-[18px] w-full">AKK Project - 2026 Unveiling</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#080808] text-[14px] w-full">{`The Executive Chairman of Pi-CNG & EVs, Barr. Ismaeel Ahmed, recently conducted an inspection visit to the newly commissioned state-of-the-art...`}</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#1bad50] text-[16px] w-full">Read More</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="h-[165px] overflow-clip relative rounded-[20px] shrink-0 w-[358px]">
      <Frame6 />
    </div>
  );
}

function NewsCard1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[358px]" data-name="News Card">
      <Frame2 />
      <Frame36 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#d0d5dd] h-[244px] overflow-clip relative rounded-[20px] shrink-0 w-full">
      <div className="absolute h-[272.956px] left-[-16.18px] top-[-19.5px] w-[409.991px]" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[12px] items-start left-1/2 not-italic top-1/2 w-[320px] whitespace-pre-wrap">
      <p className="font-['Neue_Montreal:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#080808] text-[18px] w-full">EV Fair: Electrifying Mobility</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#080808] text-[14px] w-full">{`The Pi-CNG & EVs hosted an EV Fair: Electrifying Mobility at Eagle Square, Abuja — bringing together innovators, policymakers, OEMs, and clean energy...`}</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#1bad50] text-[16px] w-full">Read More</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="h-[165px] overflow-clip relative rounded-[20px] shrink-0 w-[358px]">
      <Frame7 />
    </div>
  );
}

function NewsCard2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[358px]" data-name="News Card">
      <Frame3 />
      <Frame37 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[30px] items-start relative shrink-0 w-full">
      <NewsCard />
      <NewsCard1 />
      <NewsCard2 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-[128px] w-[1134px]">
      <Frame30 />
    </div>
  );
}

function Frame4() {
  return <div className="bg-[#d0d5dd] h-[244px] overflow-clip rounded-[20px] shrink-0 w-full" />;
}

function Frame8() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[12px] items-start left-1/2 not-italic top-1/2 w-[320px] whitespace-pre-wrap">
      <p className="font-['Neue_Montreal:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#080808] text-[18px] w-full">Lorem ipsum lorem ipsum lorem ipsum</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#080808] text-[14px] w-full">Lorem ipsum dolor sit amet consectetur. Lacus varius cras est luctus urna ante ut eget. Vel orci vestibulum nunc quisque lectus ante libero aliquet cras egestas.</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#1bad50] text-[16px] w-full">Read More</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="h-[165px] overflow-clip relative rounded-[20px] shrink-0 w-[358px]">
      <Frame8 />
    </div>
  );
}

function NewsCard3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[358px]" data-name="News Card">
      <Frame4 />
      <Frame39 />
    </div>
  );
}

function Frame9() {
  return <div className="bg-[#d0d5dd] h-[244px] overflow-clip rounded-[20px] shrink-0 w-full" />;
}

function Frame10() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[12px] items-start left-1/2 not-italic top-1/2 w-[320px] whitespace-pre-wrap">
      <p className="font-['Neue_Montreal:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#080808] text-[18px] w-full">Lorem ipsum lorem ipsum lorem ipsum</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#080808] text-[14px] w-full">Lorem ipsum dolor sit amet consectetur. Lacus varius cras est luctus urna ante ut eget. Vel orci vestibulum nunc quisque lectus ante libero aliquet cras egestas.</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#1bad50] text-[16px] w-full">Read More</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="h-[165px] overflow-clip relative rounded-[20px] shrink-0 w-[358px]">
      <Frame10 />
    </div>
  );
}

function NewsCard4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[358px]" data-name="News Card">
      <Frame9 />
      <Frame40 />
    </div>
  );
}

function Frame11() {
  return <div className="bg-[#d0d5dd] h-[244px] overflow-clip rounded-[20px] shrink-0 w-full" />;
}

function Frame12() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[12px] items-start left-1/2 not-italic top-1/2 w-[320px] whitespace-pre-wrap">
      <p className="font-['Neue_Montreal:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#080808] text-[18px] w-full">Lorem ipsum lorem ipsum lorem ipsum</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#080808] text-[14px] w-full">Lorem ipsum dolor sit amet consectetur. Lacus varius cras est luctus urna ante ut eget. Vel orci vestibulum nunc quisque lectus ante libero aliquet cras egestas.</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#1bad50] text-[16px] w-full">Read More</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="h-[165px] overflow-clip relative rounded-[20px] shrink-0 w-[358px]">
      <Frame12 />
    </div>
  );
}

function NewsCard5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[358px]" data-name="News Card">
      <Frame11 />
      <Frame41 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[30px] items-start relative shrink-0 w-full">
      <NewsCard3 />
      <NewsCard4 />
      <NewsCard5 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-[575px] w-[1134px]">
      <Frame31 />
    </div>
  );
}

function Frame13() {
  return <div className="bg-[#d0d5dd] h-[244px] overflow-clip rounded-[20px] shrink-0 w-full" />;
}

function Frame14() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[12px] items-start left-1/2 not-italic top-1/2 w-[320px] whitespace-pre-wrap">
      <p className="font-['Neue_Montreal:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#080808] text-[18px] w-full">Lorem ipsum lorem ipsum lorem ipsum</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#080808] text-[14px] w-full">Lorem ipsum dolor sit amet consectetur. Lacus varius cras est luctus urna ante ut eget. Vel orci vestibulum nunc quisque lectus ante libero aliquet cras egestas.</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#1bad50] text-[16px] w-full">Read More</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="h-[165px] overflow-clip relative rounded-[20px] shrink-0 w-[358px]">
      <Frame14 />
    </div>
  );
}

function NewsCard6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[358px]" data-name="News Card">
      <Frame13 />
      <Frame43 />
    </div>
  );
}

function Frame15() {
  return <div className="bg-[#d0d5dd] h-[244px] overflow-clip rounded-[20px] shrink-0 w-full" />;
}

function Frame16() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[12px] items-start left-1/2 not-italic top-1/2 w-[320px] whitespace-pre-wrap">
      <p className="font-['Neue_Montreal:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#080808] text-[18px] w-full">Lorem ipsum lorem ipsum lorem ipsum</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#080808] text-[14px] w-full">Lorem ipsum dolor sit amet consectetur. Lacus varius cras est luctus urna ante ut eget. Vel orci vestibulum nunc quisque lectus ante libero aliquet cras egestas.</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#1bad50] text-[16px] w-full">Read More</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="h-[165px] overflow-clip relative rounded-[20px] shrink-0 w-[358px]">
      <Frame16 />
    </div>
  );
}

function NewsCard7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[358px]" data-name="News Card">
      <Frame15 />
      <Frame44 />
    </div>
  );
}

function Frame17() {
  return <div className="bg-[#d0d5dd] h-[244px] overflow-clip rounded-[20px] shrink-0 w-full" />;
}

function Frame18() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[12px] items-start left-1/2 not-italic top-1/2 w-[320px] whitespace-pre-wrap">
      <p className="font-['Neue_Montreal:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#080808] text-[18px] w-full">Lorem ipsum lorem ipsum lorem ipsum</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#080808] text-[14px] w-full">Lorem ipsum dolor sit amet consectetur. Lacus varius cras est luctus urna ante ut eget. Vel orci vestibulum nunc quisque lectus ante libero aliquet cras egestas.</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#1bad50] text-[16px] w-full">Read More</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="h-[165px] overflow-clip relative rounded-[20px] shrink-0 w-[358px]">
      <Frame18 />
    </div>
  );
}

function NewsCard8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[358px]" data-name="News Card">
      <Frame17 />
      <Frame45 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[30px] items-start relative shrink-0 w-full">
      <NewsCard6 />
      <NewsCard7 />
      <NewsCard8 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-[1022px] w-[1134px]">
      <Frame33 />
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-[#1bad50] content-stretch flex h-[48px] items-center justify-center px-[28px] py-[14px] relative shrink-0 w-[140px]" data-name="Text">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-center text-white">Load More</p>
    </div>
  );
}

function ArrowRight1() {
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

function Icon1() {
  return (
    <div className="bg-[#1bad50] content-stretch flex h-[48px] items-center justify-center px-[16px] py-[14px] relative shrink-0" data-name="icon">
      <ArrowRight1 />
    </div>
  );
}

function HeaderButton1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-px items-center left-1/2 top-1/2" data-name="Header button">
      <Text1 />
      <Icon1 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="absolute h-[48px] left-[623.5px] top-[1499px] w-[193px]">
      <HeaderButton1 />
    </div>
  );
}

function Desktop1() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#f6f6f6] h-[1657px] left-1/2 overflow-clip top-[700px] w-[1440px]" data-name="Desktop - 14">
      <Frame19 />
      <Frame32 />
      <Frame38 />
      <Frame42 />
      <Frame34 />
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
      <Desktop1 />
    </div>
  );
}