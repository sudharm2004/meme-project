import { useParams } from "react-router-dom";
import EditingPanel from "./EditingPanel";
import EditingImage from "./EditingImage";

function MemeEditor() {
  const { imgId } = useParams();

  return (
    <div className="bg-orange-50 flex justify-center items-center grow py-8">
      <div className="flex shadow-lg p-8 bg-white">
        <EditingImage imgId={imgId} />
        <EditingPanel />
      </div>
    </div>
  );
}

export default MemeEditor;
