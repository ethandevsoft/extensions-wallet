import Button from 'components/elements/Button'
import BackArrowIcon from 'components/elements/icons/BackArrow'
import HomeIcon from 'components/elements/icons/Home'
import NotificationIcon from 'components/elements/icons/Notification'
import SettingIcon from 'components/elements/icons/Setting'
import SearchBox from './SearchBox'

export default function Header() {
  return (
    <div className="fixed inset-0 bg-neutral-100 flex flex-row justify-between items-center gap-5 w-full h-[72px] px-[21px] py-[13px]">
      <div className="flex flex-row gap-[25.33px]">
        <Button>
          <BackArrowIcon />
        </Button>
        <Button>
          <HomeIcon />
        </Button>
      </div>
      <SearchBox />
      <div className="flex flex-row gap-[11px]">
        <Button>
          <NotificationIcon />
        </Button>
        <Button>
          <SettingIcon />
        </Button>
      </div>
    </div>
  )
}
