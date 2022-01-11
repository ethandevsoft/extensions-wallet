import SearchIcon from 'components/elements/icons/Search'
import FilterIcon from 'components/elements/icons/Filter'
import Button from 'components/elements/Button'
import styles from './SearchBar.module.css'

export default function SearchBar() {
  return (
    <div className="flex flex-row w-full h-[40px] items-center justify-between">
      <div className="flex flex-row bg-gray-100 rounded-[8px] px-[11.67px] py-[11.67px] w-full mr-[25px]">
        <SearchIcon />
        <input
          type="text"
          className={`focus:outline-none bg-transparent px-4 w-full font-mono font-medium placeholder:text-[#BEBEC2] ${styles.search}`}
          placeholder="Search experiences"
        />
      </div>
      <div className="mr-[18px]">
        <Button>
          <FilterIcon />
        </Button>
      </div>
    </div>
  )
}
