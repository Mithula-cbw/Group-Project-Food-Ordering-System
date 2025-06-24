import React from 'react';

type AuthLayoutProps = {
  children : React.ReactNode;
};

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start" id="auth-layout">
      {children}
    </div>
  );
};

export default AuthLayout;
