import Rfc from './Rfc';

export default {
  component: Rfc,
  title: 'Rfc',
};

const Template = (args) => <Rfc {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
