// export default function TabButtons(label){ //children
//     return <li><button>{props.children}</button></li>; //children
// }

export default function TabButtons({ onClick, children, isSelected }) {
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} onClick={onClick}>{children}</button>
    </li>
  );
}
