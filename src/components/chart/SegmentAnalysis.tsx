import * as React from "react";
import * as c3 from "c3";
import { Typeahead } from "react-bootstrap-typeahead";
import "./chart.scss";

interface ComponentProps {

}

interface ComponentState {
    pushedSegments: [];
}

// csvData format [[segmentName1, LH1, RH1],[segmentName2, LH2, RH2]]
const csvData = [
  ["GSFrontToMargin", 3.12, 3.4],
  ["GOrbital", -2.0, -1.6],
  ["GTemporalMiddle", 1.0, 1.4],
  ["SCentral", 4.0, 4.4],
  ["SFrontSup", -1.5, -1.1],
  ["STemporalInf", 2.5, 2.0]
];

const defaultLeftHemisphere = ["leftHemisphere", 3.12, -2.0, 2.5];
const defaultRightHemisphere = ["rightHemisphere", 3.4, -1.6, 2.0];
const defaultChartData = [ defaultLeftHemisphere, defaultRightHemisphere ];
const defaultSegments = ["GSFrontToMargin", "GOrbital", "STemporalInf"];

const segments = ["GSFrontToMargin", "GOrbital", "GTemporalMiddle",
                    "SCentral", "SFrontSup", "STemporalInf"];
const segmentValues = [[3.12, 3.4], [-2.0, -1.6], [1.0, 1.4],
                          [4.0, 4.4], [-1.5, -1.1], [2.5, 2.0]];

class SegmentAnalysis extends React.Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props);

    this.state = {
      pushedSegments: []
    };

    this.changeData = this.changeData.bind(this);
  }

  pickDefaultSegments(segmentOffSet: any) {
    const defaultLeft : any[] = [];
    const defaultRight : any[] = [];
    let defaultSegmentation: any[] = [];
    let segmentData;
    defaultLeft.push("leftHemisphere");
    defaultRight.push("rightHemisphere");
    for ( let i = 0; i < 4; i++ ) {
      segmentData = this.getSegmentData(segmentOffSet[i][0]);
      if (segmentData) {
        defaultSegmentation.push(segmentData[0]);
        console.log("segmentData[1]", segmentData[1]);
        defaultLeft.push(segmentData[1]);
        defaultRight.push(segmentData[2]);
      }
    }
    this.callChart([defaultLeft, defaultRight], defaultSegmentation);
  }

  sortFunction(a: any, b: any) {
    if (a[1] === b[1]) {
      return 0;
    } else {
      return (a[1] < b[1]) ? 1 : -1;
    }
  }

  calculateOffset() {
    let segmentOffSet: any[] = [];
    let result: any[] = [];
    for ( let i = 0; i < segments.length; i++ ) {
      segmentOffSet.push([segments[i], Math.abs(segmentValues[i][0]) +
                                        Math.abs(segmentValues[i][1])]);
    }
    result = segmentOffSet.sort(this.sortFunction);
    this.pickDefaultSegments(result);
    return result;
  }

  componentDidMount() {
    //Calculate Offset
    this.calculateOffset();
  }

  callChart(inputChart: any, segments: any) {
    c3.generate({
      bindto: "#SegmentAnalysis",
      data: {
        columns: inputChart,
        type: "bar",
        colors: {
            leftHemisphere: "#FFA500",
            rightHemisphere: "#00BFFF"
        }
      },
      axis: {
        x: {
            type: "category",
            categories: segments,
        },
        y: {
            label: {
                text: "Deviation from Standard in %",
                position: "outer-middle"
            }
        }
      },
      grid: {
        y: {
            lines: [
                {value: 0, text: "Average", position: "start"},
            ]
        }
      },
      padding: {
        top: 40,
        bottom: 20,
        right: 20
      },
      size: {
        height: 500 // **** Working find the element and resize to modal
      }
    });
  }

  parseData(filteredData: any) {
    const leftHemisphereData = ["leftHemisphere"];
    const rightHemisphereData = ["rightHemisphere"];
    // Parse for the leftHemisphereData and rightHemisphereData
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < filteredData.length; i++) {
      console.log("filteredData[i][1]",filteredData[i][1]);
      leftHemisphereData.push(filteredData[i][1]);
      rightHemisphereData.push(filteredData[i][2]);
    }
    return [leftHemisphereData, rightHemisphereData];
  }

  getSegmentData(segment: any) {
    const segmentData = csvData.find((segmentData) => {
      return (segmentData[0] === segment);
    });
    return segmentData;
  }

  setFilter() {
    let filteredData: any[] = [];
    let parsedData: any[] = [];
    if (this.state.pushedSegments.length > 0) {
        filteredData = this.state.pushedSegments.map((segment) =>
          this.getSegmentData(segment));
    }
    parsedData = this.parseData(filteredData);
    return parsedData;
  }

  changeData(selectedSegments: any) {
    // Call back function to avoid asynchronous setState
    let processedData;
    this.setState({
      pushedSegments : selectedSegments
    }, () => {
      // Input processing
      processedData = this.setFilter();
      this.callChart(processedData, this.state.pushedSegments);
    });
  }

  render() {
    return (
      <div className="chart-viewer">
        <React.Fragment>
          <Typeahead
            clearButton
            defaultSelected={defaultSegments}
            id="selector"
            multiple
            options={segments}
            placeholder="Choose a brain segment..."
            onChange={(selectedSegments) => this.changeData(selectedSegments)}
          />
        </React.Fragment>
        <div id="SegmentAnalysis"></div>
      </div>
    );
  }
}

export default SegmentAnalysis;
