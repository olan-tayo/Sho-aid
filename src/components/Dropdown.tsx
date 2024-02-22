import React from 'react'
import { useState } from 'react'
import { CSSProperties } from 'react'

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
}

const Dropdown = ({ title, data, onSelect, selectStyle, optionStyle }: DropdownType) => {
  const [isToggleSelect, setIsToggleSelect] = useState(false)

  const handleSelectOption = (option: Data) => {
    setIsToggleSelect(false)
    onSelect(option)
  }

  return (
    <div className='relative '>
      <div onClick={() => setIsToggleSelect((prev) => !prev)} className='sho-dropdown' style={selectStyle}>
        <p>{title || 'Select an option'}</p>

        {isToggleSelect ? (
          <div>
            <svg height='20' viewBox='0 0 48 48' width='20' xmlns='http://www.w3.org/2000/svg'>
              <path d='M24 16l-12 12 2.83 2.83 9.17-9.17 9.17 9.17 2.83-2.83z' />
              <path d='M0 0h48v48h-48z' fill='none' />
            </svg>
          </div>
        ) : (
          <svg height='20' viewBox='0 0 48 48' width='20' xmlns='http://www.w3.org/2000/svg'>
            <path d='M33.17 17.17l-9.17 9.17-9.17-9.17-2.83 2.83 12 12 12-12z' />
            <path d='M0 0h48v48h-48z' fill='none' />
          </svg>
        )}
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
