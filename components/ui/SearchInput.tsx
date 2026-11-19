export default function SearchInput({ value, onChange, label }: {
  value: string;
  onChange: (value: string) => void;
  label: string;
}) {
  return <label className="search"><span aria-hidden="true">⌕</span>
    <input type="search" aria-label={label} placeholder={label} value={value} onChange={(event) => onChange(event.target.value)} />
  </label>;
}
