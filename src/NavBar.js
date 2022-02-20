import React from 'react';

class NavBar extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            activeID: 1
        }

        this.helper = 1;

        this.style = {

            margin: 'none',
            border: 'none',
            paddingLeft: '5vw',
            paddingRight: '5vw',

            backgroundColor: 'black',

            width: '90vw'
        }

        this.changeActive = this.changeActive.bind(this);
    }

    changeActive(ID){

        this.props.changePage(ID);
        this.setState({activeID: ID});
    }


    render(){
        return(
            <div key={this.state.activeID} style={this.style}>
                <MenuButton text="button1" id={0} active={this.state.activeID} change={this.changeActive}/>
                <MenuButton text="button2" id={1} active={this.state.activeID} change={this.changeActive}/>
                <MenuButton text="button3" id={2} active={this.state.activeID} change={this.changeActive}/>
            </div>
        );
    }
}

class MenuButton extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            isMouseOver: false,
            active: this.props.active
        }

        this.mouseEnterHandler = this.mouseEnterHandler.bind(this);

        this.style = {
            margin: '1vw',
            padding: 'none',
            border: 'none',

            width: '6vw',
            height: '6vh',

            borderRadius: '7%',

            backgroundColor: 'black',
            color: 'white',

            minHeight: '40px',
            minWidth: '80px',

            position: 'relative',

            textAlign: 'center'
        }
        this.hStyle = {

            backgroundColor: 'white',
            width: '4vw',
            height: '0.3vh',
            borderRadius: '17%',
            position: 'absolute',
            marginLeft: 'auto',
            marginRight: 'auto',
            left: '0',
            right: '0',
            marginTop: '0.4vh',
            minWidth: '40px',
        }
    }

    mouseEnterHandler(){
        this.props.change(this.props.id);
    }

    render(){

        if (this.props.id === this.props.active){
            return(
                <button 
                    style={this.style} 
                    onMouseEnter={this.mouseEnterHandler}>
                        {this.props.text}
    
                        <div style={this.hStyle}></div>
                </button>
            );

        }

        return(
            <button 
                style={this.style} 
                onMouseEnter={this.mouseEnterHandler}>
                    {this.props.text}
            </button>
        );
    }
}

export default NavBar;