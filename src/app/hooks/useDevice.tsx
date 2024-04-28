import { useState, useEffect } from 'react';
import { isBrowser, isMobile, isTablet } from 'react-device-detect';

type DeviceType = 'browser' | 'mobile' | 'tablet';

const useDevice = (): DeviceType => {
  const [deviceType, setDeviceType] = useState<DeviceType>('browser');

  useEffect(() => {
    if (isMobile) setDeviceType('mobile');
    else if (isTablet) setDeviceType('tablet');
    else if (isBrowser) setDeviceType('browser');
  }, []);

  return deviceType;
};

export default useDevice;