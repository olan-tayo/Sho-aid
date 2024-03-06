import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { Button, Tab } from '..'

const data = [
  { key: 1, value: 'One' },
  { key: 2, value: 'Two' },
  { key: 3, value: 'Three' },
]

const handleSelectedTab = () => {}

describe('Render Button', () => {
  it('renders button without crashing', () => {
    render(<Button>Test</Button>)
  })
})

describe('Render Tab', () => {
  it('renders tab without crashing', () => {
    render(
      <Tab tabText='' tabContainer='' onSelectedTab={handleSelectedTab} data={data}>
        <div>Yes one</div>
        <div>Yes two</div>
        <div>Yes three</div>
      </Tab>,
    )
  })
})
