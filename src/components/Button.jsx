import  PropTypes  from 'prop-types'

function Button({ name, classname, func}) {
  return (
    <button onClick={func} className={classname}>{name}</button>
  )
}

export default Button

Button.propTypes = {
    name: PropTypes.string,
    classname: PropTypes.string,
    func : PropTypes.func
}

Button.defaultProps = {
    name: 'button-state'
}
