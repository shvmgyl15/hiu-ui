import React from "react";

import DiagnosticReportComponent from "../../components/DiagnosticReport/DiagnosticReportComponent";
import ObservationTable from "../../components/ObservationTable/ObservationTable";
import MedicationRequestsComponent from "../../components/Medication/MedicationRequestsComponent";
import {identifyParentOfType} from "../../components/common/HealthInfo/FhirResourcesUtils";

const CCRDocument = ({ consentReqId, compositionData }) => {
  const independentObservations =  compositionData ? 
    compositionData.filter(entry => {
      if (entry.resourceType != "Observation") {
        return false;
      }
      if (entry.parentResources) {
        var parent = identifyParentOfType(entry, "Composition");
        return parent != undefined;
      }
      return false;
    }) : [];
  
  const independentMedicationRequests =  compositionData ? 
    compositionData.filter(entry => {
      if (entry.resourceType != "MedicationRequest") {
        return false;
      }
      if (entry.parentResources) {
        var parent = identifyParentOfType(entry, "Composition");
        return parent != undefined;
      }
      return false;
    }) : [];

  return compositionData && compositionData.length > 0 ? (
    <div>
      Document type: TODO
      <ObservationTable data={independentObservations} />
      <MedicationRequestsComponent medicationRequests={independentMedicationRequests} />
      {/* <DiagnosticReportComponent consentReqId={consentReqId} data={data} /> */}
    </div>
  ) : (
    <div></div>
  );
};

export default CCRDocument;