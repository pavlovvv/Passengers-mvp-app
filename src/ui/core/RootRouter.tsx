import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const PassengersRoot = lazy(
  () => import('features/passengers/components/PassengersRoot/PassengersRoot'),
);

export default function RootRouter() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Navigate to="/passengers" replace />} />
        <Route path="/passengers" element={<PassengersRoot />} />
        <Route path="*" element={<Navigate to="/passengers" replace />} />
      </Routes>
    </Suspense>
  );
}
