import React from "react";
// prettier-ignore
function RoadMap() {
  const handleDragStart = (e: React.MouseEvent) => e.preventDefault();

  return (
    <>
      <div className="roadmap container" id="roadmap-link">
        <h2>Roadmap</h2>
        <p>We build our future through the present. &quot;Continuous improvement and innovation&quot; is our motto, stay tuned for more.</p>

      </div>

        <div className="graph-mobile d-block d-md-none text-center">
            <img className="img-fluid" src="/graph-mobile.svg" alt="Graph"/>
        </div>
        <div className="graph d-none d-md-block">
            <img src="/graph.png" alt="graph" className="img-fluid graph-img"/>
            <img src="/box_blue-1.svg" alt="graph-box" className="img-fluid box-1 box-graph"/>
            <img src="/box_blue-2.svg" alt="graph-box" className="img-fluid box-2 box-graph"/>
            <img src="/box_purpple-1.svg" alt="graph-box" className="img-fluid box-3 box-graph"/>
            <img src="/box_green-1.svg" alt="graph-box" className="img-fluid box-4 box-graph"/>
            <img src="/box_purpple-2.svg" alt="graph-box" className="img-fluid box-5 box-graph"/>
            <img src="/box_green-2.svg" alt="graph-box" className="img-fluid box-6 box-graph"/>
        </div>


        <div className="piechart-wrapper d-block d-lg-none px-5">

            <img className="img-fluid " src="/donnut-chart.svg" alt="Pie chart"/>
        </div>


        <div className="piechart-desktop d-none d-lg-block">

            <img className="img-fluid centering" src="/pie-center.png" alt="Pie chart"/>
            <img className="img-fluid centering pie-bg" src="/pie-background.png" alt="Pie chart"/>

            <img className="img-fluid pie-10 " src="/10.svg" alt="Pie chart"/>
            <img className="img-fluid pie-15" src="/15.svg" alt="Pie chart"/>
            <img className="img-fluid pie-20" src="/20.svg" alt="Pie chart"/>
            <img className="img-fluid pie-25" src="/25.svg" alt="Pie chart"/>
            <img className="img-fluid pie-30 " src="/30.svg" alt="Pie chart"/>
        </div>

    </>
  );
}

export default RoadMap;
