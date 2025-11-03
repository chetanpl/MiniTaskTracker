export default function Input({ id, value, onChange, placeholder, ariaLabel, inputRef , className=''}) {
  return (
    <input
    id={id}
      type="text"
      ref={inputRef}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      aria-label={ariaLabel}
      className={className}
    />
  )
}
