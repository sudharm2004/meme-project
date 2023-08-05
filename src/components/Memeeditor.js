import { useParams } from "react-router-dom";
import EditingPanel from "./EditingPanel";
import EditingImage from "./EditingImage";
import { InputContextProvider } from "../utils/inputContext";

function MemeEditor() {
  const { imgId } = useParams();

  return (
    <InputContextProvider>
      <div className="bg-orange-50 flex justify-center items-center grow py-8">
        <div className="flex shadow-lg p-8 bg-white">
          <EditingImage imgId={imgId} />
          <EditingPanel />
        </div>
      </div>
    </InputContextProvider>
  );
}

export default MemeEditor;
