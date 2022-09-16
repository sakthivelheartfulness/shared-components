import React, { useState } from 'react';
import HFNButton from './sharedcomponents/Button';
import { HFNConfirmDialog } from '@sharedcomponents/ConfirmDialog';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './assets/index.css';
import './assets/DialogDemo.css';



const App = () => {
  const [displayBasic, setDisplayBasic] = useState(false);
  const [displayBasic2, setDisplayBasic2] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);
  const [displayMaximizable, setDisplayMaximizable] = useState(false);
  const [displayPosition, setDisplayPosition] = useState(false);
  const [displayResponsive, setDisplayResponsive] = useState(false);
  const [position, setPosition] = useState('center');

  const dialogFuncMap = {
      'displayBasic': setDisplayBasic,
      'displayBasic2': setDisplayBasic2,
      'displayModal': setDisplayModal,
      'displayMaximizable': setDisplayMaximizable,
      'displayPosition': setDisplayPosition,
      'displayResponsive': setDisplayResponsive
  }

  const onClick = (name, position) => {
      dialogFuncMap[`${name}`](true);

      if (position) {
          setPosition(position);
      }
  }

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


  return (
      <>
          <div className="dialog-demo">
              <div className="card">
                  <h5>Basic</h5>
                 <HFNButton label="Show" icon="pi pi-external-link" onClick={() => onClick('displayBasic')} />
                  <HFNConfirmDialog header="Header" visible={displayBasic} style={{ width: '50vw' }} footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </HFNConfirmDialog>

                 <HFNButton label="Long Content" icon="pi pi-external-link" onClick={() => onClick('displayBasic2')} />
                  <HFNConfirmDialog header="Header" visible={displayBasic2} style={{ width: '50vw' }} footer={renderFooter('displayBasic2')} onHide={() => onHide('displayBasic2')}>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                          ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                          culpa qui officia deserunt mollit anim id est laborum.</p>
                      <br />
                      <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                          qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
                          quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
                          vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                      <br />
                      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
                          similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
                          cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                          eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                      <br />
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                          ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                          culpa qui officia deserunt mollit anim id est laborum.</p>
                      <br />
                      <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                          qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
                          quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
                          vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                      <br />
                      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
                          similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
                          cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                          eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                      <br />
                  </HFNConfirmDialog>

                  <h5>Without Modal</h5>
                 <HFNButton label="Show" icon="pi pi-external-link" onClick={() => onClick('displayModal')} />
                  <HFNConfirmDialog header="Header" visible={displayModal} modal={false} style={{ width: '50vw' }} footer={renderFooter('displayModal')} onHide={() => onHide('displayModal')}>
                      <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </HFNConfirmDialog>

                  <h5>Responsive</h5>
                 <HFNButton label="Show" icon="pi pi-external-link" onClick={() => onClick('displayResponsive')} />
                  <HFNConfirmDialog header="Header" visible={displayResponsive} onHide={() => onHide('displayResponsive')} breakpoints={{ '960px': '75vw' }} style={{ width: '50vw' }} footer={renderFooter('displayResponsive')}>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </HFNConfirmDialog>

                  <h5>Maximizable</h5>
                 <HFNButton label="Show" icon="pi pi-external-link" onClick={() => onClick('displayMaximizable')} />
                  <HFNConfirmDialog header="Header" visible={displayMaximizable} maximizable modal style={{ width: '50vw' }} footer={renderFooter('displayMaximizable')} onHide={() => onHide('displayMaximizable')}>
                      <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </HFNConfirmDialog>

                  <h5>Position</h5>
                  <div className="grid flex-column">
                      <div className="col">
                         <HFNButton label="Left" icon="pi pi-arrow-right" onClick={() => onClick('displayPosition', 'left')} className="p-button-help" />
                         <HFNButton label="Right" icon="pi pi-arrow-left" onClick={() => onClick('displayPosition', 'right')} className="p-button-help" />
                      </div>
                      <div className="col">
                         <HFNButton label="TopLeft" icon="pi pi-arrow-down-right" onClick={() => onClick('displayPosition', 'top-left')} className="p-button-warning" />
                         <HFNButton label="Top" icon="pi pi-arrow-down" onClick={() => onClick('displayPosition', 'top')} className="p-button-warning" />
                         <HFNButton label="TopRight" icon="pi pi-arrow-down-left" onClick={() => onClick('displayPosition', 'top-right')} className="p-button-warning" />
                      </div>
                      <div className="col">
                         <HFNButton label="BottomLeft" icon="pi pi-arrow-up-right" onClick={() => onClick('displayPosition', 'bottom-left')} className="p-button-success" />
                         <HFNButton label="Bottom" icon="pi pi-arrow-up" onClick={() => onClick('displayPosition', 'bottom')} className="p-button-success" />
                         <HFNButton label="BottomRight" icon="pi pi-arrow-up-left" onClick={() => onClick('displayPosition', 'bottom-right')} className="p-button-success" />
                      </div>
                  </div>

                  <HFNConfirmDialog header="Header" visible={displayPosition} position={position} modal style={{ width: '50vw' }} footer={renderFooter('displayPosition')} onHide={() => onHide('displayPosition')}
                      draggable={false} resizable={false}>
                      <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </HFNConfirmDialog>
              </div>
          </div>
      </>
  )
};

export default App;
