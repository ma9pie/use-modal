import { useEffect, useState } from 'react';

const useMount = () => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return { mount };
};

export { useMount };
