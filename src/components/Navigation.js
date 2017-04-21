import React, {
  Component
} from 'react'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import {
  Navbar,
  Nav,
  NavItem
  // MenuItem,
  // NavDropdown
} from 'react-bootstrap'
import {
  LinkContainer
} from 'react-router-bootstrap'
import PropTypes from 'prop-types'



const itemPropType = {
  key: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

class Navigation extends Component {

  static propTypes = {
    left: PropTypes.arrayOf(
      React.PropTypes.shape(itemPropType)
    ),
    right: PropTypes.arrayOf(
      React.PropTypes.shape(itemPropType)
    )
  }

  // static propTypes = {
  //   children: PropTypes.element.isRequired,
  //   onClick: PropTypes.func,
  //   replace: PropTypes.bool,
  //   to: PropTypes.oneOfType([
  //     PropTypes.string,
  //     PropTypes.object,
  //   ]).isRequired,
  //   exact: PropTypes.bool,
  //   strict: PropTypes.bool,
  //   className: PropTypes.string,
  //   activeClassName: PropTypes.string,
  //   style: PropTypes.object,
  //   activeStyle: PropTypes.object,
  //   isActive: PropTypes.func,
  // };


  render() {
    return (
      <Router>
				<Navbar inverse collapseOnSelect>
					<Navbar.Header>
            <Navbar.Toggle/>
          </Navbar.Header>

					<Navbar.Collapse>
						<Nav>
							{createNavbar(this.props)}
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Router>
    )
  }
}

function createNavbar(props) {
  const items = []
  if (props.left) {
    items.push(
      <Nav>
        {createNavContent(props.left)}
      </Nav>
    )
  }
  if (props.right) {
    items.push(
      <Nav pullRight>
        {createNavContent(props.right)}
      </Nav>
    )
  }

  return items
}

function createNavContent(props) {
  const items = []
  props.forEach(item => {
    let eventKey = item.name
    if(item.key){
      eventKey = item.key
    }

    items.push(
      <LinkContainer to={item.link}>
				<NavItem eventKey={{eventKey}} >{item.name}</NavItem>
			</LinkContainer>
    )
  })
  return items
}


// <Nav bsStyle="pills"  onSelect={handleSelect}>
// 	<LinkContainer to="/home">
// 		<NavItem eventKey={1} >NavItem 1 content</NavItem>
// 	</LinkContainer>
// 	<NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
// 	<NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
// 	<NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
// 		<MenuItem eventKey="4.1">Action</MenuItem>
// 		<MenuItem eventKey="4.2">Another action</MenuItem>
// 		<MenuItem eventKey="4.3">Something else here</MenuItem>
// 		<MenuItem divider />
// 		<MenuItem eventKey="4.4">Separated link</MenuItem>
// 	</NavDropdown>
// </Nav>


export default Navigation
