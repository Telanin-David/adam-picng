interface ConversionCenterCardProps {
  name: string;
  address: string;
  code: string;
  lga: string;
  state: string;
}

export function ConversionCenterCard({
  name,
  address,
  code,
  lga,
  state,
}: ConversionCenterCardProps) {
  return (
    <div className="bg-white rounded-[20px] overflow-hidden h-auto min-h-[313px] flex flex-col">
      {/* State Badge */}
      <div className="p-6 pb-0">
        <div className="bg-[#1bad50] inline-flex items-center justify-center px-[10px] py-[10px] rounded-[8px]">
          <p className="text-[14px] leading-[20px] text-white">
            {state}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6 flex-1 flex flex-col justify-between">
        <div className="flex flex-col gap-[8px] mb-5">
          <p className="text-[16px] font-semibold text-black leading-normal">
            {name}
          </p>
          <p className="text-[16px] leading-[22px] text-black">
            {address}
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-[#a9b1c1] mb-5" />

        {/* Code and LGA */}
        <div className="text-[14px] leading-[20px]">
          <p className="mb-2">
            <span className="text-[#667085]">Code: </span>
            <span className="text-[#080808]">{code}</span>
          </p>
          <p>
            <span className="text-[#667085]">LGA: </span>
            <span className="text-[#080808]">{lga}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
