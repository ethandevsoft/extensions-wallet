import Typography from 'components/elements/Typography'
import {experiences} from './data'
import { ExperienceType } from 'types/experience'
import Experience from './Experience'

export default function Experiences() {
  return (
    <div className="mb-[15px]">
      <div className="mb-2">
        <Typography variant="title">Recent Experiences</Typography>
      </div>
      {
        experiences.map((experience: ExperienceType, index: number) => {
          return (
            <Experience experience={experience} key={index} />
          )
        })
      }
    </div>
  )
}
