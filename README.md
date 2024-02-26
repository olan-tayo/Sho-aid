# Sho-aid

[**npm-url**](https://www.npmjs.com/package/sho-aid)

Sho-aid is an atomic design system containing reusable components built with React and Typescript.

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

Add `Button` to your component:
import the css styles from 'sho-aid/dist/index.css'

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Button,Dropdown } from "sho-aid";
import "sho-aid/dist/index.css";

``DROPDOWN
  const data = [
    { value: "Orange", key: 1 },
    { value: "Apple", key: 2 },
    { value: "Kiwi", key: 3 },
    { value: "Watermelon", key: 4 },
    { value: "Mango", key: 5 },
  ];

  const [selectedOption, setSelectedOption] = useState();

  const handleSelectOptions = (data) => {
    setSelectedOption(data?.value);
  };
return(
     <Dropdown
        data={data}
        title={selectedOption || "Select an option"}
        onSelect={handleSelectOptions}
        selectStyle={{}}
        optionStyle={{}}
      />)

    ``BUTTON
    return(
         <Button
        className=""
        onClick={() => {}}
        disabled={false}
      >
        Test
      </Button>
    )
```

[npm-url]: https://www.npmjs.com/package/sho-aid
