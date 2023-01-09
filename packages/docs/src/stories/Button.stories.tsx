import {StoryObj, Meta } from '@storybook/react';
import { Button, ButtonProps } from '@rmuikit/react';


export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Clicke me'
  },
  argTypes: {
    size: {
      control: {
        options: ['sm', 'md', 'big'],
        type: 'select'
      }
    },
    actions: {
      control: {
        options: ['primary', 'success', 'danger', 'warning'],
        type: 'select'
      }
    },
    onClick: {
      action: 'click'
    }

  }
} as Meta<ButtonProps>


export const Default: StoryObj<ButtonProps> = {}
export const Success: StoryObj<ButtonProps> = {
  args: {

    actions: 'success'
  }
}
