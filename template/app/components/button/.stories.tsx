// stories/MyButton.stories.tsx
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '@components';

export default {
  title: 'MyButton',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Basic: ComponentStory<typeof Button> = args => (
  <Button {...args} />
);

Basic.args = {
  text: 'country',
  color: 'danger',
};
