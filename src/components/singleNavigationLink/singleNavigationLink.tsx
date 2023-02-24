import { Link, LinkProps } from "react-router-dom";
import './singleNavigationLink.css';

export default function SingleNavigationLink(props: LinkProps) {
  return(
    <div className={props.className}>
      <Link {...props} className='single-navigation-link'>{props.children}</Link>
    </div>
  )
}