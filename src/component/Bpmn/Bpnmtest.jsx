import React from "react";
import Modeler from "bpmn-js/lib/Modeler";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";

import diagram from "./diagrams.bpmn";

import PropertiesPanel from "./PropertiesPanel";

export default function App({}) {
  //var [modeler, changeModeler] = React.useState(new Modeler());
  var modeler = new Modeler();
  React.useEffect(() => {
    modeler = setModeler();
    setPropertiesPanel(modeler);
    async function save() {
      var saveXml = await modeler.saveXML({ format: true });
      console.log(saveXml);
    }
    async function importDiagram() {
      await modeler.importXML(diagram);
      save();
    }
    importDiagram();
    
  });

  const setModeler = () => {
    return new Modeler({
      container: document.getElementById("modeler-container"),
      keyboard: {
        bindTo: document.body
      }
    });
  };

  const setPropertiesPanel = (modeler) => {
    const propertiesPanel = new PropertiesPanel({
      container: document.getElementById("properties-container"),
      modeler
    });
  };

  return (
    <div id="modeler-parent">
      <div>
        <div id="modeler-container" style={{ height: "500px" }}></div>
        <div id="properties-container" style={{ height: "200px" }}></div>
      </div>
    </div>
  );
}
