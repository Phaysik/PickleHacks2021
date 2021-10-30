import React, { Props, ReactPropTypes } from 'react'
import './Detail_pop.css'

type DetailProps = 
{
  name: string
}

type DetailState =
{
}

let pickle_image;
let pickle_ID = 0;
let pickle_facts = ["monkey man", "monkey men"];
let pickle_blurb = "lorem ipsum";

export default class Detail_pop extends React.Component<DetailProps, DetailState>
{
  constructor(props: DetailProps)
  {
    super(props);
  }

  private get_information(pickle_name: string) {
    return pickle_name
  }

  render() {
    return (
      <div>
        <div className="imge_text_container">
          <div className="leftimage"><img src="" alt={"An image of " + this.props.name} title={"An image of " + this.props.name} /></div>
          <div className="righttext">
            <h2> Pickle Name: {this.props.name} </h2>
            <h2> Pickle ID: {pickle_ID} </h2>
          </div>
        </div>
        <body>
          <ul> {pickle_facts.map(
            (fact) =>
              <li>{fact}</li>
            )} 
          </ul>
          <p> {pickle_blurb} </p>
          Hello from {this.get_information(this.props.name)}
        </body>
      </div>
    )
  }
}