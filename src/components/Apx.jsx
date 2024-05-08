import React, { Component } from "react";

class Apx extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [
            "SMS yuborilganlar",
            "Linkga kirganlar",
            "Mahsulot sahifasiga kirganlar",
            "Sotib olganlar",
            "Izoh qoldirganlar",
          ],
        },
      },
      series: [
        {
          name: "series",
          data: [110, 70, 55, 85, 77],
        },
      ],
      title: {
        text: "Monthly Inflation in Argentina, 2002",
      },
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <h1 className="chatPar">Tracking loyhasi</h1>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="1018"
              height="460"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Apx;
