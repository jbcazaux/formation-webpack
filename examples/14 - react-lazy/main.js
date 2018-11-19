import React, {Suspense, useState} from 'react'
import ReactDOM from 'react-dom'

const LazyGoodbye = React.lazy(() => import(/* webpackChunkName: "LazyGoodbye" */ './Goodbye'))

const Button = () => {
  const [display, setDisplay] = useState(false)

  return (<>
    <button onClick={() => setDisplay(true)}>
      click !
    </button>

    {display && <Suspense fallback={<div>Loading...</div>}>
      <LazyGoodbye name="Docto"/>
    </Suspense>}
  </>)
}

const Hello = ({name}) => (<div> Hello {name}</div>)

ReactDOM.render((
  <>
    <Hello name="Doctolib"/>
    <Button/>
  </>
), document.getElementById('root'))


