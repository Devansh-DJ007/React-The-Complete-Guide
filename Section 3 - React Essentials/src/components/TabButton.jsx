export default function TabButton({children, onSelect, isSelected}) {
// children prop is created and provided by react which gives access to the content 
// that is passed to your component between opening and closing tags
    return (
    <li>
        <button className={isSelected ? "active" : undefined} onClick={onSelect}>
            {children}
        </button>
    </li>
  )
}