import React, {useState} from 'react';
import { nanoid } from 'nanoid';
import { FaStar } from "react-icons/fa";

// export default function RadioSelector ({ label, count, checked, onChange }) {
//   const inputs = [];
//   for (let i = 0; i < count; i++) {
//     inputs.push(<input type='radio' key={nanoid()} value={i + 1} checked={checked === `${i + 1}`} onChange={({ target: { value } }) => onChange(value)} />);
//   }
//   return (
//     <div className='inputContainer'>
//       <label>
//         {label}
//       </label>
//       <div>
//         {inputs}
//       </div>
//     </div>
//   );
// }
export default function RadioSelector({label, count, checked, onChange}){
  const [ratings, setRatings]= useState(null);
  const [hover, setHover] = useState(null);
  let num;
  for(let i=0;i<count;i++){
    num=i
  }
  return (
    <div className='review_container_category_stars'>
      <div>
      <label>{label}</label>
      </div>
      <div>
      {[...Array(5)].map((star,i)=>{
        let ratingValue = i+1
        return (
          <label>
          <input  type='radio' value={i+1} checked={checked === `${ratingValue}`} onClick={({ target: { value } })=>onChange(value)} onChange={({ target: { value } }) => setRatings(value) }></input>
          <FaStar className='stars_stars' onMouseEnter={()=>setHover(ratingValue)} onMouseLeave={()=>setHover(null)} color={ratingValue <= (hover ||ratings) ? 'yellow':'grey'}/>
          </label>
        )
      })}
      </div>
    </div>
  )
}