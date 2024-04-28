# Sho-aid

Sho-aid is an atomic design system containing reusable components built with React and Typescript.

[**Link to the npm package**](https://www.npmjs.com/package/sho-aid)

[**Live Demo**]

## Installation:

```bash
npm install sho-aid
```

or

```bash
yarn add sho-aid
```

## Usage :

Add `Dropdown` to your component:
import the css styles from 'sho-aid/dist/index.css'

### Dropdown :

```js
import React from 'react'
import { Dropdown } from 'sho-aid'
import 'sho-aid/dist/index.css'

const DropDownComponent = () => {
  const data = [
    { value: 'Orange', key: 1 },
    { value: 'Apple', key: 2 },
    { value: 'Kiwi', key: 3 },
    { value: 'Watermelon', key: 4 },
    { value: 'Mango', key: 5 },
  ]

  const [selectedOption, setSelectedOption] = useState()

  const handleSelectOptions = (data) => {
    setSelectedOption(data?.value)
  }
  return (
    <Dropdown
      data={data}
      title={selectedOption || 'Select an option'}
      onSelect={handleSelectOptions}
      selectStyle={{}}
      optionStyle={{}}
    />
  )
}

export default DropDownComponent
```

Add `Button` to your component:
import the css styles from 'sho-aid/dist/index.css'

### Button :

```js
import React from 'react'
import { Button } from 'sho-aid'
import 'sho-aid/dist/index.css'

const ButtonComponent = () => {
  return (
    <Button className='' onClick={() => {}} disabled={false}>
      Test
    </Button>
  )
}

export default ButtonComponent
```

Add `Tab` to your component:
import the css styles from 'sho-aid/dist/index.css'

### Tab :

```js
import React from 'react'
import { Tab } from 'sho-aid'
import 'sho-aid/dist/index.css'

const TabComponent = () => {
  const tabValues = [
    { value: 'Orange', key: 1 },
    { value: 'Apple', key: 2 },
    { value: 'Kiwi', key: 3 },
  ]
  return (
    <Tab
      data={tabValues}
      tabText='flex gap-3 cursor-pointer'
      tabContainer=''
      onSelectedTab={(tab) => {
        console.log(tab) //{value: 'Orange', key: 1}
      }}
    >
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
    </Tab>
  )
}

export default TabComponent
```

### Custom styling

If you want to use default sho-aid styling to build upon it, you can import sho-aid's styles by using:

```ts
import 'sho-aid/dist/index.css'
```

[npm-url]: https://www.npmjs.com/package/sho-aid
