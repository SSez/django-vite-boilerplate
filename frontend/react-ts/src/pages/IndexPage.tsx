import { useState } from 'react'

export const IndexPage = () => {
    const [count, setCount] = useState(0)

    const viteLogo = `/static/vite/react.svg`
    const reactLogo = `/static/vite/vite.svg`
    return (
        <>
            <div>
                <img src={viteLogo} className="logo" alt="Vite logo" />
                <img src={reactLogo} className="logo react" alt="React logo" />
            </div>
            <h1>Vite + React-TS + Django</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <div>
                <a href="/mock">Mock Page</a>
            </div>
        </>
    )
}
