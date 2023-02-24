import { Link, LinkProps } from "react-router-dom";
import './navigationBar.css';

type NavigationBarProps = {
  pageTitle: string;
  leftNavigationBarItem?: LinkProps;
  rightNavigationBarItem?: LinkProps;
}

export default function NavigationBar(props: NavigationBarProps) {
  return(
    <div className='navigation-bar-wrapper'>
      {props.leftNavigationBarItem && <Link className='single-navigation-link navigation-bar-link-left' {...props.leftNavigationBarItem}>{props.leftNavigationBarItem.children}</Link>} 
      <div className='navigation-bar-page-title'><p>{props.pageTitle}</p></div>
      {props.rightNavigationBarItem && <Link className='single-navigation-link navigation-bar-link-right' {...props.rightNavigationBarItem}>{props.rightNavigationBarItem.children}</Link>} 
    </div>
  )
}