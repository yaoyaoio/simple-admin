import React, {lazy, Suspense} from 'react'

const LazyComponent = (func) => {
  const LazyComp = lazy(func)
  return props => (
    <Suspense fallback={'加载中...'}>
      <LazyComp {...props} />
    </Suspense>
  )
}

export default LazyComponent
