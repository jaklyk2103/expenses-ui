import { LinkProps } from "react-router-dom";
import SingleNavigationLink from "../singleNavigationLink/singleNavigationLink";
import './navigationBar.css';

type NavigationBarProps = {
  pageTitle: string;
  leftNavigationBarItem?: LinkProps;
  rightNavigationBarItem?: LinkProps;
}

export default function NavigationBar(props: NavigationBarProps) {
  return(
    <div className='navigation-bar-wrapper'>
      {props.leftNavigationBarItem && <SingleNavigationLink className='navigation-bar-link-left' {...props.leftNavigationBarItem}>{props.leftNavigationBarItem.children}</SingleNavigationLink>} 
      <div className='navigation-bar-page-title'><p>{props.pageTitle}</p></div>
      {props.rightNavigationBarItem && <SingleNavigationLink className='navigation-bar-link-right' {...props.rightNavigationBarItem}>{props.rightNavigationBarItem.children}</SingleNavigationLink>} 
    </div>
  )
}