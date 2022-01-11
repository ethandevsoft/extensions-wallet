import DownIcon from 'components/elements/icons/Down'
import IconButton from 'components/elements/IconButton'
import styles from './SearchBox.module.css'

export default function SearchBox() {
  return (
    <div className="flex flex-row w-full h-full items-center border border-solid border-[#DFDFE0] bg-white rounded-[30px] pl-[8px] pr-[17px] py-[10px]">
      <img alt="palette" src="images/palette.svg" />
      <input
        type="text"
        className={`w-full h-full border-none pl-[8px] pr-[15px] focus:outline-none font-mono font-semibold ${styles.search}`}
      />
      <IconButton>
        <DownIcon />
      </IconButton>
    </div>
  )
}
