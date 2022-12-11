import PropTypes from 'prop-types';

const getMessage = () => {
    return "Nuevo Mensaje"
}

export const HelloWorldApp = ({title, subtitle}) => {
  return (
    <> 
      <h1 data-testid="test-title">{ title }</h1>    
      <h2>{ subtitle }</h2>
      <h2>{ subtitle }</h2>
      <p>{ getMessage() }</p>
    </>
  )
}

HelloWorldApp.defaultProps = {
    title: "hola default",
    subtitle: "Subtitulo default"
}

HelloWorldApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}



//Los signos <> </> corresponden a un fragmento y es el remplazo del tipico div padre que se usaba en las otras versiones.