import faUser from '@fortawesome/fontawesome-free-solid/faUser';
import faEmail from '@fortawesome/fontawesome-free-solid/faAt';
import faMap from '@fortawesome/fontawesome-free-solid/faMapMarkerAlt';

export const formInputs = [
  {
    label: 'Name',
    required: 'true',
    id: 'name',
    icon: faUser,
  },
  {
    label: 'Email',
    required: 'true',
    id: 'email',
    icon: faEmail,
  },
  {
    label: 'Telegram',
    id: 'telegram',
  },
  {
    label: 'Country',
    required: 'true',
    id: 'country',
    icon: faMap,
  },
  {
    label: 'Skycoin Wallet Address',
    required: 'true',
    id: 'walletAddress',
  },
];
export const nodeQuantityArray = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6', label: '6' },
  { value: '7', label: '7' },
  { value: '8', label: '8' },
  { value: 'more', label: 'More' },
];
export const osArray = [
  { value: 'linux', label: 'Linux' },
  { value: 'macOS', label: 'MacOS' },
  { value: 'Windows', label: 'windows' },
  { value: 'android', label: 'Android' },
  { value: 'ios', label: 'IOS' },
];
export const brandArray = [
  { value: 'orangePi', label: 'Orange Pi' },
  { value: 'raspberryPi', label: 'Raspberry Pi' },
  { value: 'asus', label: 'Asus' },
  { value: 'bananaPi', label: 'Banana Pi' },
  { value: 'beelink', label: 'Beelink' },
  { value: 'cubieboard', label: 'Cubieboard' },
  { value: 'helios', label: 'Helios' },
  { value: 'libreComputer', label: 'Libre Computer' },
  { value: 'mqMaker', label: 'MQMaker' },
  { value: 'nanoPi', label: 'Nano Pi' },
  { value: 'odroid', label: 'Odroid' },
  { value: 'olimex', label: 'Olimex' },
  { value: 'pine', label: 'Pine' },
  { value: 'solidRun', label: 'SolidRun' },
  { value: 'udoo', label: 'Udoo' },
];
export const hardwareModels = {
  orangePi: [
    { value: 'Prime', label: 'Prime' },
    { value: '2G-IOT', label: '2G-IOT' },
    { value: '4G-IOT', label: '4G-IOT' },
    { value: 'I96', label: 'I96' },
    { value: 'Lite', label: 'Lite' },
    { value: 'Lite2', label: 'Lite2' },
    { value: 'One', label: 'One' },
    { value: 'One-Plus', label: 'One-Plus' },
    { value: 'PC', label: 'PC' },
    { value: 'PC-Plus', label: 'PC-Plus' },
    { value: 'PC2', label: 'PC2' },
    { value: 'Plus', label: 'Plus' },
    { value: 'Plus2', label: 'Plus2' },
    { value: 'Plus2E', label: 'Plus2E' },
    { value: 'RK3399', label: 'RK3399' },
    { value: 'Win', label: 'Win' },
    { value: 'Win-Plus', label: 'Win-Plus' },
    { value: 'Zero', label: 'Zero' },
    { value: 'Zero-Plus', label: 'Zero-Plus' },
    { value: 'Zero-Plus2', label: 'Zero-Plus2' },
    { value: 'Other', label: 'Other' },
  ],
  raspberryPi: [
    { value: '3-Model-B+', label: '3-Model-B+' },
    { value: '3-Model-B', label: '3-Model-B' },
    { value: '2-Model-B', label: '2-Model-B' },
    { value: '1-Model-B+', label: '1-Model-B+' },
    { value: '1-Model-A+', label: '1-Model-A+' },
    { value: 'Zero-W', label: 'Zero-W' },
    { value: 'Zero', label: 'Zero' },
    { value: 'Other', label: 'Other' },
  ],
  asus: [
    { value: 'Tinkerboard', label: 'Tinkerboard' },
    { value: 'Other', label: 'Other' },
  ],
  bananaPi: [
    { value: 'BPI-D1', label: 'BPI-D1' },
    { value: 'BPI-G1', label: 'BPI-G1' },
    { value: 'BPI-M1', label: 'BPI-M1' },
    { value: 'BPI-M1+', label: 'BPI-M1+' },
    { value: 'BPI-M2', label: 'BPI-M2' },
    { value: 'BPI-M2+', label: 'BPI-M2+' },
    { value: 'BPI-M2-Berry', label: 'BPI-M2-Berry' },
    { value: 'BPI-M2M', label: 'BPI-M2M' },
    { value: 'BPI-M2U', label: 'BPI-M2U' },
    { value: 'BPI-M64', label: 'BPI-M64' },
    { value: 'BPI-R2', label: 'BPI-R2' },
    { value: 'BPI-R3', label: 'BPI-R3' },
    { value: 'BPI-Zero', label: 'BPI-Zero' },
    { value: 'Other', label: 'Other' },
  ],
  beelink: [
    { value: 'X2', label: 'X2' },
    { value: 'Other', label: 'Other' },
  ],
  cubieboard: [
    { value: 'Cubietruck', label: 'Cubietruck' },
    { value: 'Cubietruck-Plus', label: 'Cubietruck-Plus' },
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '4', label: '4' },
    { value: 'Other', label: 'Other' },
  ],
  helios: [
    { value: '4', label: '4' },
    { value: 'Other', label: 'Other' },
  ],
  libreComputer: [
    { value: 'Le-Potato-AML-S905X-CC', label: 'Le-Potato-AML-S905X-CC' },
    { value: 'Renegade-ROC-RK3328-CC', label: 'Renegade-ROC-RK3328-CC' },
    { value: 'Tritium-ALL-H3-CC', label: 'Tritium-ALL-H3-CC' },
    { value: 'Other', label: 'Other' },
  ],
  mqMaker: [
    { value: 'MiQi', label: 'MiQi' },
    { value: 'Other', label: 'Other' },
  ],
  nanoPi: [
    { value: 'NanoPi', label: 'NanoPi' },
    { value: '2-Fire', label: '2-Fire' },
    { value: 'A64', label: 'A64' },
    { value: 'K2', label: 'K2' },
    { value: 'M1', label: 'M1' },
    { value: 'M1-plus', label: 'M1-plus' },
    { value: 'M2', label: 'M2' },
    { value: 'M2A', label: 'M2A' },
    { value: 'M3', label: 'M3' },
    { value: 'NEO', label: 'NEO' },
    { value: 'NEO-Air', label: 'NEO-Air' },
    { value: 'NEO-Core', label: 'NEO-Core' },
    { value: 'NEO-Core2', label: 'NEO-Core2' },
    { value: 'NEO2', label: 'NEO2' },
    { value: 'S2', label: 'S2' },
    { value: 'Smart4418', label: 'Smart4418' },
    { value: 'Other', label: 'Other' },
  ],
  odroid: [
    { value: 'HC1', label: 'HC1' },
    { value: 'HC2', label: 'HC2' },
    { value: 'MC1', label: 'MC1' },
    { value: 'XU4', label: 'XU4' },
    { value: 'Other', label: 'Other' },
  ],
  olimex: [
    { value: 'Lime1', label: 'Lime1' },
    { value: 'Lime2', label: 'Lime2' },
    { value: 'Lime2-eMMC', label: 'Lime2-eMMC' },
    { value: 'LimeA33', label: 'LimeA33' },
    { value: 'Micro', label: 'Micro' },
    { value: 'Other', label: 'Other' },
  ],
  pine: [
    { value: 'Pine-A64', label: 'Pine-A64' },
    { value: 'Pinebook-A64', label: 'Pinebook-A64' },
    { value: 'Sopine-A64', label: 'Sopine-A64' },
  ],
  solidRun: [
    { value: 'CuBox-i', label: 'Other' },
    { value: 'CuBox-Pulse', label: 'CuBox-Pulse' },
    { value: 'Humming-Board', label: 'Humming-Board' },
    { value: 'Humming-Board-Pulse', label: 'Humming-Board-Pulse' },
    { value: 'ClearCloud-8K', label: 'ClearCloud-8K' },
    { value: 'ClearFog-A38', label: 'ClearFog-A38' },
    { value: 'ClearFog-GT-8K', label: 'ClearFog-GT-8K' },
    { value: 'Other', label: 'Other' },
  ],
  udoo: [
    { value: 'Blu', label: 'Blu' },
    { value: 'Bricks', label: 'Bricks' },
    { value: 'Dual', label: 'Dual' },
    { value: 'Neo', label: 'Neo' },
    { value: 'Quad', label: 'Quad' },
    { value: 'Other', label: 'Other' },
  ],
};
export const dropzoneStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  width: '150px',
  height: '150px',
  position: 'relative',
  border: '1px dashed #92a4ba',
  cursor: 'pointer',
  margin: '5px',
};
