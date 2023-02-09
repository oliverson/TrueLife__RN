import React from 'react';
import {
  IconAlertError,
  IconAlertInfo,
  IconAlertSuccess,
  IconAlertWarning,
} from './icons';

const success = {
  title: '#1a7a4c',
  backgroundColor: '#f6ffed',
  borderColor: '#b7eb8f',
  icon: <IconAlertSuccess />,
};

const error = {
  title: '#b83726',
  backgroundColor: '#fff2f0',
  borderColor: '#ffccc7',
  icon: <IconAlertError />,
};

const warning = {
  title: '#b2b422',
  backgroundColor: '#fffbe6',
  borderColor: '#ffe58f',
  icon: <IconAlertWarning />,
};

const info = {
  title: '#1a86a7',
  backgroundColor: '#e6f7ff',
  borderColor: '#91d5ff',
  icon: <IconAlertInfo />,
};

export default {
  success,
  error,
  warning,
  info,
};
