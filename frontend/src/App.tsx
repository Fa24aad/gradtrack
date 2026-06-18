import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div>
          <h1>GradTrack</h1>
          <p>Graduate job application tracker</p>
        </div>

        <button className="primary-button">Add application</button>
      </header>

      <main className="dashboard">
        <section className="hero-card">
          <div>
            <p className="eyebrow">Application dashboard</p>
            <h2>Track your graduate job search in one place.</h2>
            <p>
              Keep applications, deadlines, interview stages and notes organised
              while applying for graduate software engineering roles.
            </p>
          </div>
        </section>

        <section className="stats-grid" aria-label="Application summary">
          <article className="stat-card">
            <span>Total applications</span>
            <strong>12</strong>
          </article>

          <article className="stat-card">
            <span>Active</span>
            <strong>7</strong>
          </article>

          <article className="stat-card">
            <span>Interviews</span>
            <strong>2</strong>
          </article>

          <article className="stat-card">
            <span>Offers</span>
            <strong>0</strong>
          </article>
        </section>
      </main>
    </div>
  )
}

export default App