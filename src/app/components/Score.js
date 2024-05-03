export default function Score(props) { 
  return (
    <div className="relative flex flex-wrap items-center justify-between w-full pb-5">
        <div className="grid w-full grid-cols-11 gap-1">
            <div className="rounded-full col-span-2 mt-2 h-4 bg-[#66C61C]">&nbsp;</div>
            <div className="rounded-full col-span-2 mt-2 h-4 bg-[#F79009]">&nbsp;</div>
            <div className="rounded-full col-span-2 mt-2 h-4 bg-[#66C61C]">&nbsp;</div>
            <div className="rounded-full col-span-2 mt-2 h-4 bg-[#D7D3D0]">&nbsp;</div>
            <div className="rounded-full col-span-2 mt-2 h-4 bg-[#D7D3D0]">&nbsp;</div>
            <div className="text-right text-[#E31B54]">&#10084; {props.score}</div>
        </div>
    </div>
  );
}