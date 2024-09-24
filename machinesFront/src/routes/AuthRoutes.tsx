import { Navigate, Route, Routes } from "react-router-dom";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={} />
      <Route path="/*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
