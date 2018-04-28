import React from 'react';
import IndexStyle from '../styleSheets/Index.css';

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div className={IndexStyle.bg}>
                    {/* <Header history={this.props.history}/>
                    <Banner /> */}
                </div>
                {/* <Content />
                <Footer /> */}
            </div>
        )
    }
}