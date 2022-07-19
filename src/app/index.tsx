import LayoutMain from '@/layouts'

import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const HomePage = lazy(() => import('@/pages').then((m) => ({ default: m.HomePage })))

// you can add Header, footer anything else you might want to, or else leave it to be
const App = () => {
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

export default App
