import { useTheme } from '@/hooks'
import LayoutMain from '@/layouts'

import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const HomePage = lazy(() => import('@/pages').then((m) => ({ default: m.HomePage })))

// you can add Header, footer anything else you might want to, or else leave it to be
const StravitalApp = () => {
  // useTheme shold always on top of app
  useTheme()
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path='/' element={<LayoutMain />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default StravitalApp
