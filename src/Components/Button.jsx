export default function Button({children, style, ...props}) {
  return <button style={style} onClick={props.onClick}>{children}</button>;
}
