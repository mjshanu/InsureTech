import ReactBpmn from "react-bpmn";

export const BpmnJs = (props) => {
  const onShown = () => {
    console.log("diagram shown");
  };

  const onLoading = () => {
    console.log("diagram loading");
  };

  const onError = (err) => {
    console.log("failed to show diagram");
  };

  return (
    <ReactBpmn
      url="./pizzaDiagram.bpmn"
      onShown={onShown}
      onLoading={onLoading}
      onError={onError}
    />
  );
};
