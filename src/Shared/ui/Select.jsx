export default function Select({id, value, onChange, options, ariaLabel }) {
  return (
    <select id={id} value={value} onChange={onChange} aria-label={ariaLabel}>
      {options.map(opt => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  )
}
