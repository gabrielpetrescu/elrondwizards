import React from "react";
import AliceCarousel from "react-alice-carousel";
// prettier-ignore
function RoadMap() {
  const handleDragStart = (e: React.MouseEvent) => e.preventDefault();

  return (
    <>
      <div className="roadmap container">
        <h2>Roadmap</h2>
        <p>We build our future through the present. &quot;Continuous improvement and innovation&quot; is our motto, stay tuned for more.</p>

      </div>

        <div className="graph-mobile d-block d-sm-none">
            <img className="img-fluid" src="/graph-mobile.svg" alt="Graph"/>
        </div>
        <div className="graph d-none d-sm-block">
            <img src="/graph.png" alt="graph" className="img-fluid graph-img"/>
            <img src="/box_blue-1.svg" alt="graph-box" className="img-fluid box-1 box-graph"/>
            <img src="/box_blue-2.svg" alt="graph-box" className="img-fluid box-2 box-graph"/>
            <img src="/box_purpple-1.svg" alt="graph-box" className="img-fluid box-3 box-graph"/>
            <img src="/box_green-1.svg" alt="graph-box" className="img-fluid box-4 box-graph"/>
            <img src="/box_purpple-2.svg" alt="graph-box" className="img-fluid box-5 box-graph"/>
            <img src="/box_green-2.svg" alt="graph-box" className="img-fluid box-6 box-graph"/>
        </div>


        <div className="donut-chart text-center">
            <img src="/donnut_chart.png" alt="donut-chart" className="img-fluid"/>
        </div>
    </>
  );
}

export default RoadMap;
