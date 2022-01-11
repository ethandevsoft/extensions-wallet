import Typography from 'components/elements/Typography'
import Button from 'components/elements/Button'
import RightBlueIcon from 'components/elements/icons/RightBlue'
import Category from './Category'
import {categories} from './data'
import {CategoryType} from 'types/category'

export default function PopularCategories() {
  return (
    <div>
      <div className="mb-2 flex flex-row justify-between">
        <Typography variant="title">Popular Categories</Typography>
        <Button>
          <div className="flex flex-row items-center gap-4">
            <Typography variant="button" className="text-[#885FFF]">
              See All
            </Typography>
            <RightBlueIcon />
          </div>
        </Button>
      </div>
      <div className="flex flex-row flex-wrap justify-between mt-6">
        {categories.map((category: CategoryType, index: number) => {
          return <Category key={index} category={category} />
        })}
      </div>
    </div>
  )
}
