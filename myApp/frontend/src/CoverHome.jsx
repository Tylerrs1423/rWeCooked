import React from 'react';
import './CoverHome.css'; 


function CoverHome() {
  return (
    <div className="cover-page">
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column text-center" style={{minHeight: '100vh'}}>
        <header className="mb-auto">
        </header>

        <main className="px-3 d-flex flex-column justify-content-center align-items-center" style={{flex: 1}}>
            <h1>Welcome to Our Project</h1>
            <p className="lead" style={{maxWidth: '600px'}}>
            This is the Blueprint Website Cover page where you can learn backened development!
            </p>
            <p className="lead">
            <a href="/register" className="btn btn-lg btn-secondary fw-bold border-white bg-white text-dark"> {/*subtitle text */}
                Get Started
            </a>
            </p>
        </main>

        <footer className="mt-auto text-muted">
            <p>&copy; Group 2</p>
        </footer>
        </div>
    </div>
  );
}

export default CoverHome;
