export default function Score(props) { 
  const renderStars = (difficultyScore) => {
    const totalStars = 5;
    const filledStars = Math.floor(difficultyScore); 
    const emptyStars = totalStars - filledStars;

    const stars = [];
 
    for (let i = 0; i < filledStars; i++) {
      if (i === 1 || i === 3){
        stars.push(
          <div key={i} className="rounded-full col-span-2 mt-2 h-4 bg-[#F79009]">&nbsp;</div>
        );  
      } else {
        stars.push(
          <div key={i} className="rounded-full col-span-2 mt-2 h-4 bg-[#66C61C]">&nbsp;</div>
        );  
      }
        
    }

    for (let i = 0; i < emptyStars; i++) {
        stars.push(
          <div key={i} className="rounded-full col-span-2 mt-2 h-4 bg-[#D7D3D0]">&nbsp;</div>
        ); 
    }
    return stars;
  };

  return (
    <div className="relative flex flex-wrap items-center justify-between w-full pb-5">        
        <div className="grid w-full grid-cols-11 gap-1">
        {renderStars(props.score)}
          <div className="text-right text-[#E31B54]">&#10084; {props.score}</div>
        </div>
    </div>
  );
}