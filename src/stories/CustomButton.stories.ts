import { CustomButton } from '../components/CustomButton';

export default {
  title: 'Test/CustomButton',
  component: CustomButton,
  // 여기에 args 및 label 추가
  args: {
    label: 'Button',
  },
};

// 스토리에 있는 label 속성 모두 제거
export const Solid = {
  args: {
    variant: 'solid',
  },
  parameters: {
    backgrounds: {
      values: [
        {
          name: 'blue',
          value: 'blue',
        },
        {
          name: 'red',
          value: 'red',
        },
      ],
    },
  },
};

export const Outline = {
  args: {
    variant: 'outline',
  },
};

export const Small = {
  args: {
    size: 'sm',
  },
};

export const Medium = {
  args: {
    size: 'md',
  },
};

export const Large = {
  args: {
    size: 'lg',
  },
};
