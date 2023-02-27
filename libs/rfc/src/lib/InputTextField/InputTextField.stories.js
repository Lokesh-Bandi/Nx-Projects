import InputTextField from './InputTextField';

export default {
  component: InputTextField,
  title: 'InputTextField',
};

const Template = (args) => <InputTextField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isRoundedCorners: true,
  placeHolder:"Enter your name", 
  type: 'password'
};
