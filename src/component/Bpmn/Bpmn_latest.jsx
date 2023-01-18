import Modeler from "bpmn-js/lib/Modeler";

import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";

import { useEffect, useRef } from "react";
import $ from 'jquery' 
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="3.3.5">
  <bpmn:process id="Process_1" isExecutable="true">
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`;

export default function Bpmn() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        let modeler = new Modeler({
            container,
            keyboard: {
                bindTo: document
            }
        });
        

        modeler.importXML(xml, err => {
            if (err) {
                console.error(err);
            }

            const canvas = modeler.get("canvas");
            const elementFactory = modeler.get("elementFactory");

            canvas.zoom("fit-viewport");

            var task = elementFactory.createBpmnElement("shape", {
                type: "bpmn:Task",
                x: 350,
                y: 100
            });

            var root = canvas.getRootElement();

            canvas.addShape(task, root);
            Save(modeler)
        });
        

    }, [])
   
   async function Save(modeler)
    {
        console.log(modeler);
      var saveXml = await modeler.saveXML({ format: true });
      console.log("shanu");
      console.log(saveXml);
    }
   
    
   
    return (
        <div ref={containerRef} id="container"  style={{
            border: "1px solid #000000",
            height: "90vh",
            width: "90vw",
            margin: "auto"
          }}>
          
        </div>
    );

}