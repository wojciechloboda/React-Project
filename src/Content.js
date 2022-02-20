import React from 'react';
import { Transition } from 'react-transition-group';
import './Content.css'

class Content extends React.Component{

    constructor(props){
        super(props);

        

        this.style = {
            margin: 'none',
            padding: 'none',
            flex: '1',
            display: 'flex',
        }
    }

    render(){

        return(
            <div style={this.style}>
                <div style={{flex: '1', overflow: 'hidden', display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>
                    <ContentPage name="NAGLOWEK 1" offset={this.props.pageNumber * 100} isChanged={this.props.isChanged}/>
                    <ContentPage name="NAGLOWEK 2" offset={this.props.pageNumber * 100} isChanged={this.props.isChanged}/>
                    <ContentPage name="NAGLOWEK 3" offset={this.props.pageNumber * 100} isChanged={this.props.isChanged}/>
                </div>
            </div>
        );
    }
}

class ContentPage extends React.Component{
    constructor(props){
        super(props);

        this.style = {
            position: 'relative', 
            width: '100%', 
            height: '100%', 
            backgroundImage: "url(obraz1.jpg)", 
            backgroundSize: "cover", 
            left: '0',
            transition: 'left 3s'
        }

        this.trans = {
            entering: {left: '0'},
            entered: {left: '0'},
            exited: {left: '-' + this.props.offset + 'vw'}
        }

    }

    render(){


        return(

            <Transition in={this.isChanged} timeout={1000}>{state=>(
                <div style={{...this.style, ...this.trans[state]}}>
                    <div style={{position: 'absolute', margin: '15vh' , width: '30vw'}}>
                        <h1>{this.props.name}</h1>
                        <div style={{overflowWrap: 'normal'}}>
                                LOREMIPSI EMMakdsf;lkasdlkadsfkja;sjdflkasjdlkfjasljflkasjdflkjas<br/>
                                lkjfdlkasjdflkjaslkfdjlkasjdflkjasdlkfjlasjdflkjaslkfjljsdfaljlka<br/>
                                lkjfdlkasjdflkjaslkfdjlkasjdflkjasdlkfjlasjdflkjaslkfjljsdfaljlka<br/>
                                lkjfdlkasjdflkjaslkfdjlkasjdflkjasdlkfjlasjdflkjaslkfjljsdfaljlka<br/>
                                lkjfdlkasjdflkjaslkfdjlkasjdflkjasdlkfjlasjdflkjaslkfjljsdfaljlka<br/>
                        </div>
                    </div>
                </div>
            )}
            </Transition>
        )
    }
}   

export default Content;