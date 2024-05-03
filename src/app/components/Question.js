import Score from './Score';
export default function Question({question}) {
  return (
    <div className="flex flex-col items-center justify-center w-full p-5 bg-white rounded-xl md:px-20">
        <div className="flex flex-col w-full max-w-screen-lg p-5 mx-auto text-2xl">
            <Score score={question.difficultyScore} />
            <div>
                <p className="pb-10 text-black">{question.questionText}</p>
                <form>
                    <ul className="w-full text-[#44403C] text-2xl">
                        {question.answerOptions.map(option => (
                            <li key={option.id} className="relative flex justify-center w-full p-2 mb-2 border border-gray-200 rounded-lg">
                                <div className="flex items-center w-auto mx-auto ps-3">
                                    <input id={option.id} type="checkbox" value="" name="list-checkbox" className="border-gray-300" />
                                    <label htmlFor={option.id} className="pl-2">{option.text}</label>
                                </div>
                            </li>
                        ))}

                    </ul>
                    <button className="rounded-lg text-white w-full bg-[#586FB5] font-sans p-2 text-base">Check</button>
                </form>
            </div>
        </div>
    </div>
  );
}