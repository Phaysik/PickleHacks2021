import React, { Props, ReactPropTypes, useEffect } from 'react'
import './Detail_pop.css'
import { PickleData } from '../PicklePeriodic'

type DetailProps = 
{
  name: string,
  pickles: PickleData[]
}

type DetailState =
{
  pickle_id: number
  facts: any
  pickle_desc: string
  pickle_image_url: string
}

export default class Detail_pop extends React.Component<DetailProps, DetailState>
{
  constructor(props: DetailProps)
  {
    super(props);

    this.state = 
    {
      pickle_id: 0,
      pickle_desc: "",
      pickle_image_url: "/pickle_test_image.jpg",
      facts: <p>hello</p>
    }
  }

  componentDidUpdate()
  {
    let data = this.props.pickles[0]

    this.setState(
      {
        pickle_id: data.id,
        pickle_image_url: data.filePath,
        pickle_desc: data.description,
        facts: <div className="facts">
          <table className="fact_table">
            <thead><tr className="fact_header"><th align="left">Facts</th><th></th></tr></thead>
              <tbody>
              {Object.keys(data.facts).map(
                (key) =>
                <tr className="fact_data">
                  <td>{key}</td>
                  <td align="right" className="fact_value">{data.facts[key]}</td>
                </tr>
              )}
              </tbody>
            </table>
        </div>
      }
    )
  }

  render() {
    return (
      <div className="Popup">
        <div className="imge_text_container">
          <div className="leftimage"><img src={this.state.pickle_image_url} alt={"An image of " + this.props.name} title={"An image of " + this.props.name} /></div>
          <div className="righttext">
            <h4> Pickle Name: {this.props.name} </h4>
            <h4> Pickle ID: {this.state.pickle_id} </h4>
          </div>
        </div>
        <div>
          {this.state.facts}
          <div className="pickleDesc">
            <h4>Description: </h4>
            <p>{this.state.pickle_desc} </p>
          </div>
        </div>
      </div>
    )
  }
}