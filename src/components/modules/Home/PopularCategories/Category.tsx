import { CategoryType } from "types/category";
import Typography from "components/elements/Typography";
import RightSmallIcon from "components/elements/icons/RightSmall";

export default function Category(props: {category: CategoryType}) {
  const {category} = props
  const {background, label, color, icon} = category

  return (
    <div className="rounded-lg w-[150px] h-[94px] mb-[13px] p-4 flex justify-between flex-col" style={{backgroundColor: background}}>
      <div className="flex items-start">
        <div className="w-[35px] h-[35px] rounded-full flex items-center justify-center" style={{backgroundColor: color}}>
          <img src={`images/${icon}`} alt="icon" />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center">
        <Typography variant="title1">{label}</Typography>
        <RightSmallIcon />
      </div>
    </div>
  )
}
