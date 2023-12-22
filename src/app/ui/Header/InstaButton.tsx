'use client';
import { usePostHog } from 'posthog-js/react';
import Insta from './Insta';
import { MouseEvent } from 'react';

const InstaButton = () => {
  const posthog = usePostHog();

  return (
    <button
      className="block"
      onClick={(e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        posthog?.capture('A user checked our instagram');
        open('https://www.instagram.com/joespaintinginc/');
      }}
    >
      <Insta />
    </button>
  );
};

export default InstaButton;
