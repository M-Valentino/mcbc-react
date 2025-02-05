// mcbc-react\src\pages\OriginalApp.jsx
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import Button from '../components/common/Button'

function OriginalApp() {
  return (
    <div>
      <Button className="primary" to="/home">
        Home Page
      </Button>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button>count is 0</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default OriginalApp
