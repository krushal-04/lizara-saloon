import * as React from 'react';
import { extendTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import GroupIcon from '@mui/icons-material/Group';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider  } from '@toolpad/core'; 
import { DashboardLayout } from '@toolpad/core'; 
import { PageContainer } from '@toolpad/core'; 
import AppointmentList from './AppointmentList';
import StaffSchedule from './StaffSchedule';
import CustomerList from './CustomerList';
import ServiceList from './ServiceList';
import Analytics from './Analytics';

const NAVIGATION = [
  {
    kind: 'header',
    title: 'Salon Management',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'appointments',
    title: 'Appointments',
    icon: <CalendarTodayIcon />,
  },
  {
    segment: 'staff',
    title: 'Staff',
    icon: <GroupIcon />,
  },
  {
    segment: 'customers',
    title: 'Customers',
    icon: <GroupIcon />,
  },
  {
    segment: 'services',
    title: 'Services',
    icon: <DesignServicesIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Analytics',
  },
  {
    segment: 'reports',
    title: 'Reports',
    icon: <BarChartIcon />,
  },
  {
    segment: 'integrations',
    title: 'Integrations',
    icon: <LayersIcon />,
  },
];

// Theme configuration
const salonTheme = extendTheme({

  palette: {
    primary: {
      main: '#FF6F61', // Salon-friendly pinkish theme
    },
    secondary: {
      main: '#4CAF50', // Accent color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

// Custom router hook
function useSalonRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(
    () => ({
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    }),
    [pathname]
  );

  return router;
}

export default function SalonAdminPanel(props) {
  const { window } = props;
  const router = useSalonRouter('/dashboard');
  const salonWindow = window ? window() : undefined;

  const renderContent = () => {
    switch (router.pathname) {
      case '/dashboard':
        return <Analytics />;
      case '/appointments':
        return <AppointmentList />;
      case '/staff':
        return <StaffSchedule />;
      case '/customers':
        return <CustomerList />;
      case '/services':
        return <ServiceList />;
      default:
        return <div style={{ textAlign: 'center', padding: '20px' }}>Page not found</div>;
    }
  };

  return (
    <AppProvider
   
    navigation={NAVIGATION}
    branding={{
      
      logo: <img src="../images/Logo1.png" alt="MUI logo" 
      sx={{ width: 90, height: 90 }}
      />,
      title: 'Lizara Salon',
      homeUrl: '/toolpad/core/introduction',
    }}
    router={router}
    theme={salonTheme}
    window={salonWindow}
  >
      <DashboardLayout>
        <PageContainer>
          {renderContent()}
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
