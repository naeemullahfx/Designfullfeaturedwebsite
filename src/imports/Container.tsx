import svgPaths from "./svg-x6e7auih1e";
import imgImageLayyahDesert from "figma:asset/574007953c5b5490b810772ec110745deffd41da.png";

function ImageLayyahDesert() {
  return (
    <div className="absolute h-[700px] left-0 top-0 w-[1028.889px]" data-name="Image (Layyah Desert)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageLayyahDesert} />
    </div>
  );
}

function Container2() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.6)] h-[700px] left-0 to-[rgba(0,0,0,0.7)] top-0 via-1/2 via-[rgba(0,0,0,0.4)] w-[1028.889px]" data-name="Container" />;
}

function Container1() {
  return (
    <div className="absolute h-[700px] left-0 top-0 w-[1028.889px]" data-name="Container">
      <ImageLayyahDesert />
      <Container2 />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[15.99px] relative shrink-0 w-[130.278px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[16px] left-0 text-[12px] text-[rgba(255,255,255,0.5)] top-[-2.11px] tracking-[1.2px] uppercase">Scroll to Explore</p>
      </div>
    </div>
  );
}

function Container4() {
  return <div className="bg-gradient-to-b from-white h-[47.986px] shrink-0 to-[rgba(0,0,0,0)] w-[0.99px]" data-name="Container" />;
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.986px] h-[71.962px] items-center left-[449.31px] top-[597.2px] w-[130.278px]" data-name="Container">
      <Text />
      <Container4 />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute bg-[rgba(254,154,0,0.2)] border-[1.111px] border-[rgba(254,154,0,0.4)] border-solid h-[30.191px] left-[398.02px] rounded-[37282700px] top-0 w-[150.139px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[74.5px] text-[#ffd230] text-[14px] text-center top-[1.99px]">Welcome to Layyah</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[127.778px] items-start left-[470.61px] top-[-4.44px] w-[372.5px]" data-name="Text">
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[120px] relative shrink-0 text-[#fe9a00] text-[96px] text-center tracking-[-2.4px]">Heritage</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[240px] left-0 top-[54.18px] w-[946.198px]" data-name="Heading 1">
      <p className="-translate-x-1/2 absolute font-['Arimo:Bold',sans-serif] font-bold leading-[120px] left-[275.46px] text-[96px] text-center text-white top-[-9.44px] tracking-[-2.4px]">Discover</p>
      <Text2 />
      <p className="-translate-x-1/2 absolute font-['Arimo:Bold',sans-serif] font-bold leading-[120px] left-[855.61px] text-[96px] text-center text-white top-[-9.44px] tracking-[-2.4px]">,</p>
      <p className="-translate-x-1/2 absolute font-['Arimo:Bold',sans-serif] font-bold leading-[120px] left-[473px] text-[85px] text-center text-white top-[110.56px] tracking-[-2.4px]">{`Culture & Experiences`}</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[65px] left-[137.1px] top-[318.18px] w-[671.997px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[32.5px] left-[336.05px] text-[#e7e5e4] text-[20px] text-center top-[-2.78px] w-[649px] whitespace-pre-wrap">Immerse yourself in the spiritual shrines, vast deserts, and vibrant festivals of Layyah. A journey through history awaits.</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[32px] size-[20px] top-[17.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_100_1428)" id="Icon">
          <path d={svgPaths.p1750c900} id="Vector" stroke="var(--stroke-0, #1C1917)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p14d24500} id="Vector_2" stroke="var(--stroke-0, #1C1917)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_100_1428">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[55.99px] relative rounded-[37282700px] shrink-0 w-[235.642px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon />
        <p className="-translate-x-1/2 absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-[131.98px] text-[#1c1917] text-[16px] text-center top-[12.99px]">Explore Experiences</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[197.12px] size-[20px] top-[17.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1ae0b780} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#e17100] h-[55.99px] relative rounded-[37282700px] shrink-0 w-[249.115px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arimo:Bold',sans-serif] font-bold leading-[24px] left-[111px] text-[16px] text-center text-white top-[12.99px]">Book a Heritage Walk</p>
        <Icon1 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex gap-[15.99px] h-[55.99px] items-center justify-center left-0 top-[423.18px] w-[946.198px]" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[480px] left-[41px] top-[110px] w-[947px]" data-name="Container">
      <Text1 />
      <Heading />
      <Paragraph />
      <Container6 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="relative size-full" data-name="Container">
      <Container1 />
      <Container3 />
      <Container5 />
    </div>
  );
}