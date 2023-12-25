import React, { Component } from 'react'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarMenuVisible: window.innerWidth > 1159,
      selectedIndex: 0,
    };
    this.toggleSidebarMenu = this.toggleSidebarMenu.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
  }

  handleWindowResize = () => {
    this.setState({ isSidebarMenuVisible: window.innerWidth > 1159 });
  };

  toggleSidebarMenu() {
    this.setState((prevState) => ({
      isSidebarMenuVisible: !prevState.isSidebarMenuVisible,
    }));
  }

    render() {
        return (
<>
<div className="wrapper ">
<div className="header fake-header">
              <div className="nav">
                    <div className="nav-img" id='mynav-img'>
                      <a href="">
                      <img src="https://mweb-cdn.karousell.com/build/carousell-logo-title-2Nnf7YFiNk.svg" alt="" />
                      </a>
                    </div>
                     <div className="nav-name">
                        <div className='nav-midde-name'><a>Electronics</a></div>
                        <div className='nav-midde-name'><a>Fashion</a></div>
                        <div className='nav-midde-name'><a>Luxury</a></div>
                        <div className='nav-midde-name'><a>Services</a></div>
                        <div className='nav-midde-name'><a>Cars</a></div>
                        <div className='nav-midde-name'><a>All Categories</a></div>

                          <div className="nav-right nav-sell-bg" id='onclick-nav-sell'>
                            <div className='nav-right-name'><a>Register</a></div>
                            <div className='nav-right-name'><a>Login</a></div> 
                            <div className='nav-sell'><a>Sell</a></div>
                          </div>
                        </div>
                    </div>
                  <div>
                </div>

              <div className='main'>
                  <div className='nav-spo'>
                      <div className='nav-search'>
                          <i className="fa fa-search" aria-hidden="true"></i>
                          <input
                          type="text" placeholder='Search for anything and everything'/>
                      </div>
                      <div className="nav-position">
                          <i className="fa fa-map-marker" aria-hidden="true"></i>
                          <input
                           type="text" placeholder='All of Singapore'/>
                      </div>
                      <div className="nav-seach-onclick">
                          <a>Search</a>
                      </div>
                  </div>
                </div>
          </div>
       </div>
</>
        )
    }
}

export default Header