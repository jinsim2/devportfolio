import { Route, Routes, useLocation } from "react-router-dom";
import { MainLayout } from "./layouts";
import { App, ProjectDetail, ResumeDetail } from "./pages";

export function AppRoutes() {
  const location = useLocation();

  // Link 태그의 state로 전달된 backgroundLocation 정보가 있는지 확인합니다.
  // 이 정보가 있으면 현재 배경 위에 모달을 띄우는 상태입니다.
  const state = location.state as { backgroundLocation?: Location };

  return (
    <>
      {/* 1. 기본 라우팅: 배경이 있으면 배경을, 없으면 현재 위치를 기준으로 렌더링합니다. */}
      <Routes location={state?.backgroundLocation || location}>
        <Route element={<MainLayout />}>
          <Route index element={<App />} />

          {/* 모달이 아닐 때(URL로 직접 진입 시) 보여줄 경로들 */}
          <Route path="project/:id" element={<ProjectDetail />} />
          <Route path="resume" element={<ResumeDetail />} />
        </Route>
      </Routes>

      {/* 2. 모달 라우팅: 배경 정보가 있을 때만 추가로 상세 페이지를 렌더링합니다. */}
      {state?.backgroundLocation && (
        <Routes>
          <Route path="project/:id" element={<ProjectDetail />} />
          <Route path="resume" element={<ResumeDetail />} />
        </Routes>
      )}
    </>
  );
}
