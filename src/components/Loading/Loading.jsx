import './Loading.css';

function Loading ({text = 'Cargando...'}) {
  return (
    <div>
      <div className="d-flex justify-content-center mb-2">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      <div className='d-flex justify-content-around'>
        { text }
      </div>
    </div>
  )
}

export default Loading;