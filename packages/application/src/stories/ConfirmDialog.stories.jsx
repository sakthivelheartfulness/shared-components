
import Wrapper from "../Wrapper";
import HFNButton from "../sharedcomponents/Button";
import HFNConfirmDialog from "../sharedcomponents/ConfirmDialog";
import { withKnobs, text, boolean, date } from "@storybook/addon-knobs";

export default {
  component: HFNConfirmDialog,
  title: "Confirm dialog",
  decorators: [withKnobs],
  argTypes: {
    position: {
      options: ['middle','top', 'right', 'left','bottom','topleft','topright','bottomleft','bottomright'],
      control: { type: 'select' }, // Automatically inferred when 'options' is defined
    },
       children: { control: 'text' }

  },
};

const confirmData = {
  visible: true,
  header: "Confirm Dialog",
  checked: false,
  draggable: false,
  resizable: false 
};


const onHide = (name) => {
  dialogFuncMap[`${name}`](false);
}

const renderFooter = (name) => {
  return (
      <div>
         <HFNButton label="No" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
         <HFNButton label="Yes" icon="pi pi-check" onClick={() => onHide(name)} autoFocus />
      </div>
  );
}


const BasicTemplate = (args) => {
return (  
  <Wrapper>
    <HFNConfirmDialog {...args} style={{ width: '50vw' }} footer={renderFooter('displayModal')} onHide={() => onHide('displayModal')}>
      <p className="m-0">{args.children}</p>
    </HFNConfirmDialog>
  </Wrapper>
)}

export const Basic = BasicTemplate.bind({})
Basic.args = {
  ...confirmData,
  position: "middle",
  children:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}

