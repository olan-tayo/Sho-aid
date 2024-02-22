import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { Button } from '..'

describe('Render Button', () => {
  it('renders button without crashing', () => {
    render(<Button>Test</Button>)
  })
})
