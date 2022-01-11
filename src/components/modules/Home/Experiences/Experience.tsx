import {ExperienceType} from 'types/experience'
import Typography from 'components/elements/Typography'
import IconButton from 'components/elements/IconButton'
import RightIcon from 'components/elements/icons/Right'

export default function Experience(props: {experience: ExperienceType}) {
  const {experience} = props
  const {image, title, description, users} = experience

  return (
    <div className="flex flex-row justify-between items-center py-2 cursor-pointer">
      <div className="flex flex-row gap-4">
        <img src={`images/${image}`} />
        <div className="flex flex-col justify-center">
          <Typography variant="title1">{title}</Typography>
          <Typography variant="description">{description}</Typography>
          <Typography variant="other" className="text-[#587BE0]">{`${users} users`}</Typography>
        </div>
      </div>
      <div className="mr-[14px]">
        <IconButton>
          <RightIcon />
        </IconButton>
      </div>
    </div>
  )
}
