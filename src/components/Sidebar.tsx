import React from 'react';
import {
  IconAnalytics,
  IconClose,
  IconCustomers,
  IconDashboard,
  IconHelp,
  IconInvoice,
  IconLogout,
  IconMessages,
  IconOpen,
  IconThemeDark,
  IconThemeLight,
} from '../icons';

type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <nav>
      <h2>Sidebar</h2>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <IconAnalytics />
        <IconClose />
        <IconCustomers />
        <IconDashboard />
        <IconHelp />
        <IconInvoice />
        <IconLogout />
        <IconMessages />
        <IconOpen />
        <IconThemeDark />
        <IconThemeLight />
      </div>
    </nav>
  );
};
export default Sidebar;
