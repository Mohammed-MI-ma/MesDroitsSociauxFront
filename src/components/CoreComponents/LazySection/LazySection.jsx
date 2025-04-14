// components/Shared/LazySection.jsx
import React, { Suspense } from "react";

const LazySection = ({ children, fallback = "Loading..." }) => {
  return (
    <Suspense fallback={<div className="text-center py-4">{fallback}</div>}>
      {children}
    </Suspense>
  );
};

export default LazySection;
