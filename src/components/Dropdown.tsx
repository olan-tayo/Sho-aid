import React from 'react'
// import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Data, DropdownType } from '../types/Dropdown/Dropdown'
import { useState } from 'react'
import '../../index.css'

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
        {isToggleSelect ? <p style={iconStyle}>^</p> : <p>^</p>}
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
