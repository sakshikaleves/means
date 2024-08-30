import { useState, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const HomePage = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <p>home</p>
  );
};

export default HomePage;
