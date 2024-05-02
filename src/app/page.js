import Image from "next/image"

export default function Home() {
    return (
        <div className="h-screen w-screen flex flex-col font-serif items-center justify-center p-8 pb-0 bg-[#586FB5]">
            <h1 className='text-[#FDFDFC] text-5xl pt-5 pb-10'>Trigonometriska funktioner & identiteter</h1>
            <div className="flex flex-col items-center justify-center w-full p-5 bg-white rounded-xl md:px-20">
                <div className="flex flex-col w-full max-w-screen-lg p-5 mx-auto text-2xl">
                    <div className="relative flex flex-wrap items-center justify-between w-full pb-5">
                        <div className="grid w-full grid-cols-11 gap-1">
                            <div className="rounded-full col-span-2 mt-2 h-4 bg-[#66C61C]">&nbsp;</div>
                            <div className="rounded-full col-span-2 mt-2 h-4 bg-[#F79009]">&nbsp;</div>
                            <div className="rounded-full col-span-2 mt-2 h-4 bg-[#66C61C]">&nbsp;</div>
                            <div className="rounded-full col-span-2 mt-2 h-4 bg-[#D7D3D0]">&nbsp;</div>
                            <div className="rounded-full col-span-2 mt-2 h-4 bg-[#D7D3D0]">&nbsp;</div>
                            <div className="text-right text-[#E31B54]">&#10084; 3</div>
                        </div>
                    </div>
                    <p className="pb-10">En mäklare använder sig av två arvodesmodeller (priset säljaren ska betala till mäklaren vid försäljning av bostaden). I den första modellen betalar säljaren
80000kr oavsett vad bostaden säljs för. I den andra modellen betalar säljaren ett lägre fast belopp på
60000kr och om försäljningspriset överstiger 2000000kr får mäklaren 10% av det överskjutande beloppet. Upp till vilket försäljningspris är den andra modellen mer lönsam för säljaren?</p>
                    <form>
                        <ul class="w-full text-[#44403C] text-2xl">
                            <li class="w-full border border-gray-200 rounded-lg mb-2 p-2 relative justify-center flex">
                                <div class="flex items-center ps-3 mx-auto w-auto">
                                    <input id="list-radio-license" type="radio" value="" name="list-radio" class="border-gray-300" />
                                    <label for="list-radio-license" class="pl-2">2 100 000 kr</label>
                                </div>
                            </li>
                            <li class="w-full border border-gray-200 rounded-lg mb-2 p-2 relative justify-center flex">
                                <div class="flex items-center ps-3 mx-auto w-auto">
                                    <input id="list-radio-license" type="radio" value="" name="list-radio" class="border-gray-300" />
                                    <label for="list-radio-license" class="pl-2">2 200 000 kr</label>
                                </div>
                            </li>
                            <li class="w-full border border-gray-200 rounded-lg mb-2 p-2 relative justify-center flex">
                                <div class="flex items-center ps-3 mx-auto w-auto">
                                    <input id="list-radio-license" type="radio" value="" name="list-radio" class="border-gray-300" />
                                    <label for="list-radio-license" class="pl-2">2 300 000 kr</label>
                                </div>
                            </li>
                            <li class="w-full border border-gray-200 rounded-lg mb-2 p-2 relative justify-center flex">
                                <div class="flex items-center ps-3 mx-auto w-auto">
                                    <input id="list-radio-license" type="radio" value="" name="list-radio" class="border-gray-300" />
                                    <label for="list-radio-license" class="pl-2">2 000 000 kr</label>
                                </div>
                            </li>
                        </ul>

                        <button className="rounded-lg text-white w-full bg-[#586FB5] font-sans p-2 text-base">Check</button>
                    </form>
                </div>
            </div>
        </div>

    );
}
