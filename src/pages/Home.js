export function Home() {
    return (
        
        <div>
        <div className="row justify-content-center text-center m-2 p-2">
          <div className="card mb-3 movie-details-card">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img alt="movie" src="http://lorempixel.com/g/626/939/abstract/" className="card-img" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">TITLE</h5>
                  <p className="card-text">OVERVIEW</p>
                  <p className="card-text">GENRES</p>
                  <p className="card-text">DIRECTOR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <h4 className="text-center">CAST</h4>
          <div className="row cards-deck m-2">
            <div className="justify-content-center text-center card-group">    
              CHARACTER
            </div>
          </div>
        </div>
      </div>
        )
}