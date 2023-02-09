import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';

export const IconAlertSuccess = props => (
  <Svg
    fill="#52c41a"
    strokeWidth={0}
    viewBox="0 0 16 16"
    height={25}
    width={25}
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
  </Svg>
);

export const IconAlertError = props => (
  <Svg
    stroke="currentColor"
    fill="#ff4d4f"
    strokeWidth={0}
    viewBox="0 0 24 24"
    height={25}
    width={25}
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G stroke="none">
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z" />
    </G>
  </Svg>
);

export const IconAlertWarning = props => (
  <Svg
    stroke="currentColor"
    fill="#faad14"
    strokeWidth={0}
    baseProfile="tiny"
    viewBox="0 0 24 24"
    height={25}
    width={25}
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="m21.171 15.398-5.912-9.854C14.483 4.251 13.296 3.511 12 3.511s-2.483.74-3.259 2.031l-5.912 9.856c-.786 1.309-.872 2.705-.235 3.83C3.23 20.354 4.472 21 6 21h12c1.528 0 2.77-.646 3.406-1.771.637-1.125.551-2.521-.235-3.831zM12 17.549c-.854 0-1.55-.695-1.55-1.549 0-.855.695-1.551 1.55-1.551s1.55.696 1.55 1.551c0 .854-.696 1.549-1.55 1.549zm1.633-7.424c-.011.031-1.401 3.468-1.401 3.468-.038.094-.13.156-.231.156s-.193-.062-.231-.156l-1.391-3.438a1.776 1.776 0 0 1-.129-.655c0-.965.785-1.75 1.75-1.75a1.752 1.752 0 0 1 1.633 2.375z"
      stroke="none"
    />
  </Svg>
);

export const IconAlertInfo = props => (
  <Svg
    stroke="currentColor"
    fill="#1890ff"
    strokeWidth={0}
    viewBox="0 0 24 24"
    height={25}
    width={25}
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G stroke="none">
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z" />
    </G>
  </Svg>
);

export const IconClose = props => (
  <Svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth={0}
    viewBox="0 0 24 24"
    height={20}
    width={20}
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path fill="none" stroke="#000" strokeWidth={2} d="m3 3 18 18M3 21 21 3" />
  </Svg>
);
