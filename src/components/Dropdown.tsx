import React from 'react'
import { useState } from 'react'
import { CSSProperties } from 'react'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'

type Data = {
  value: string
  key: number | string
}

type DropdownType = {
  title: string
  data: Data[]
  onSelect: (option: Data) => void
  selectStyle?: CSSProperties
  optionStyle?: CSSProperties
  iconStyle?: CSSProperties
}

const Dropdown = ({ title, data, onSelect, selectStyle, optionStyle, iconStyle }: DropdownType) => {
  const [isToggleSelect, setIsToggleSelect] = useState(false)

  const handleSelectOption = (option: Data) => {
    setIsToggleSelect(false)
    onSelect(option)
  }

  return (
    <div className='relative '>
      <div onClick={() => setIsToggleSelect((prev) => !prev)} className='sho-dropdown' style={selectStyle}>
        <p>{title || 'Select an option'}</p>

        {isToggleSelect ? <ExpandLess style={iconStyle} /> : <ExpandMore style={iconStyle} />}
      </div>

      {isToggleSelect && (
        <div className='sho-options' style={optionStyle}>
          {data?.map((item, index) => {
            return (
              <div className='sho-option' key={index} onClick={() => handleSelectOption(item)}>
                <p>{item?.value}</p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Dropdown
