import React from 'react'

import { action } from '@storybook/addon-actions'
import { Button } from '@storybook/react/demo'

export default {
  title: 'WDM Form',
  component: Button,
}

export const Text2 = () => (
  <Button onClick={action('clicked')}>Hello Again Button</Button>
)

export const Emoji2 = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
)

Emoji2.story = {
  name: 'with wdmform',
}
