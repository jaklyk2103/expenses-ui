import { Link, LinkProps } from "react-router-dom";
import './singleNavigationLink.css';

export default function SingleNavigationLink(props: LinkProps) {
  return(
    <div className='single-navigation-link-wrapper'>
      <Link className='single-navigation-link' {...props}>{props.children}</Link>
    </div>
  )
}