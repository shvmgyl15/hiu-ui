const ResourceData = {
  resourceType: "Bundle",
  id: "12345",
  meta: {
    lastUpdated: "2013-05-28T22:12:21Z"
  },
  identifier: {
    system: "urn:ietf:rfc:3986",
    value: "urn:uuid:0c3151bd-1cbf-4d64-b04d-cd9187a4c6e0"
  },
  type: "document",
  timestamp: "2013-05-28T22:12:21Z",
  entry: [
    {
      fullUrl:
        "http://fhir.healthintersections.com.au/open/Composition/180f219f-97a8-486d-99d9-ed631fe4fc57",
      resource: {
        resourceType: "Composition",
        id: "4567",
        meta: {
          lastUpdated: "2013-05-28T22:12:21Z"
        },
        status: "final",
        encounter: {
          reference: "Encounter/xcda"
        },
        type: {
          coding: [
            {
              system: "http://loinc.org",
              code: "34133-9"
            }
          ],
          text: "Summary of episode note"
        },
        subject: {
          display: "Eve Everywoman"
        },
        date: "2013-02-01T12:30:02Z",
        author: [
          {
            display: "Doctor Dave"
          }
        ],
        title: "Summary of episode note",
        section: [
          {
            title: "Medication Request",
            text: {
              status: "additional",
              div:
                '<div xmlns="http://www.w3.org/1999/xhtml">Unstructured data can be sent here</div>'
            },
            entry: [
              {
                reference: "MedicationRequest/medrx002"
              }
            ]
          },
          {
            title: "Observation",
            text: {
              status: "additional",
              div:
                '<div xmlns="http://www.w3.org/1999/xhtml">Unstructured data can be sent here</div>'
            },
            entry: [
              {
                reference: "Observation/ob111"
              }
            ]
          }
        ]
      }
    },
    {
      resource: {
        resourceType: "MedicationRequest",
        id: "medrx002",
        text: {
          status: "additional",
          div:
            '<div xmlns="http://www.w3.org/1999/xhtml">Unstructured data can be sent here</div>'
        },
        contained: [
          {
            resourceType: "Medication",
            id: "med0304",
            code: {
              coding: [
                {
                  system: "http://hl7.org/fhir/sid/ndc",
                  code: "76388-713-25",
                  display: "Myleran 2mg tablet, film coated"
                }
              ]
            }
          }
        ],
        status: "active",
        intent: "order",
        subject: {
          display: "Eve Everywoman"
        },
        medicationReference: {
          reference: "#med0304",
          display: "prescribed medication"
        },
        authoredOn: "2015-03-01",
        dosageInstruction: [
          {
            sequence: 1,
            text: "Take one tablet daily as directed",
            timing: {
              code: {
                text: "Start on 10th Jan till 20th Jan. 3 times a day"
              }
            }
          }
        ]
      }
    },
    {
      resource: {
        resourceType: "Observation",
        id: "ob111",
        status: "final",
        text: {
          status: "additional",
          div:
            '<div xmlns="http://www.w3.org/1999/xhtml">Unstructured data can be sent here</div>'
        },
        code: {
          text: "Day1"
        },
        effectiveDateTime: "2012-09-17",
        issued: "2018-04-03T15:30:10+01:00",
        valueString: "Value of what was observed",
        interpretation: [
          {
            text: "Abnormal"
          }
        ],
        component: [
          {
            code: {
              text: "Key events"
            },
            valueString: "Afebrile, mild cough",
            interpretation: [
              {
                text: "Afebrile, mild cough"
              }
            ]
          },
          {
            code: {
              text: "Action Taken"
            },
            valueString: "Continue Induction D2, Syp. Posaconazole, Anti TLS",
            interpretation: [
              {
                text: "Continue Induction D2, Syp. Posaconazole, Anti TLS"
              }
            ]
          }
        ]
      }
    }
  ]
};

export default ResourceData;
