export default function Button({ id,children, onClick, type = 'button', ariaLabel }) {
  return (
    <button id={id} type={type} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  )
}
