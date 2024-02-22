import React from 'react'

type ButtonType = {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  disabled?: boolean
}

const Button = ({ children, className, onClick, disabled }: ButtonType) => {
  return (
    <div>
      <button disabled={disabled} onClick={onClick} className={`${className} outline-none`}>
        {children}
      </button>
    </div>
  )
}

export default Button
