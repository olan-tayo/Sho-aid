# Sho-aid

![npm-url]

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

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <div>
            <h2>Sho-aid button</h2>
            <Button>Test</Button>
        </div>
        <hr />
        <div>
            <h2>Sho-aid dropdown</h2>
          <Dropdown
        data={[{ value: "Orange", key: 1 }]}
        title="Select a dropdown"
        onSelect={() => {}}
      />
        </div>
    </React.StrictMode>,
)

```

[npm-url]: https://www.npmjs.com/package/sho-aid
