import React from "react";

function Layout({ children }) {
  return (
    <>
      {/* Header */}
      <div className="w-screen h-14 bg-secondary top-0 sticky z-50 flex items-center">
        <h1 className="text-2xl pl-4">VirtualPal</h1>
      </div>
      {/* body */}
      {children}
      {/* Footer */}
      <div className="w-screen h-14 bg-secondary bottom-0 fixed z-50 flex justify-between">
        <div className="w-1/3 flex items-center justify-center">Schedule</div>
        <div className="w-1/3 flex items-center justify-center">Talk</div>
        <div className="w-1/3 flex items-center justify-center">Profile</div>
      </div>
    </>
  );
}

export default Layout;
