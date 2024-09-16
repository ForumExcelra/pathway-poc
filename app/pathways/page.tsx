/* eslint-disable react/jsx-no-comment-textnodes */
// import Reaction from './reaction';
"use client";
import { useRef, useEffect } from "react";
import { defineCustomElements } from "@merckgroup/chemuix/dist/esm/loader";

const nodes = [
  {
    id: "06160e59c3ed4901a7fbdc133f34ba79",
    type: "molecule",
    smiles: "NCCCC(=O)O",
    score: "$0.73",
  },
  {
    id: "53edcccb57524c609ced90ec218d175b",
    parentId: "06160e59c3ed4901a7fbdc133f34ba79",
    type: "reaction",
  },
  {
    id: "22e637ae8aba45ddabc630946dc30538",
    parentId: "53edcccb57524c609ced90ec218d175b",
    type: "molecule",
    smiles: "CC(C)(C)OC(=O)CCCNC(=O)OC(C)(C)C",
    score: null,
  },
  {
    id: "64d24e2b84ad4cb8961bf458e8adf72a",
    parentId: "22e637ae8aba45ddabc630946dc30538",
    type: "reaction",
    score: 3,
    name: "Photocatalytic Decarboxylative Conjugate Addition (PDC) of Carboxylic Acids to Electron-Deficient Alkenes and Alkynes",
    condition:
      "Stage 1: 1h, 65 degree, Iron(III) chloride), Lithium-aluminum hydride, Anisole, Benzene, Tetrahydrofuran, Dichloromethane, CHF303S Trimfluoromethane sulfonic and C6H18LiNSi2",
    reactionCount: 50,
    doi: "10.1021/acs.orglett.7b01111",
  },
  {
    id: "ac7824333d054cb090fbd3449a85e164",
    parentId: "64d24e2b84ad4cb8961bf458e8adf72a",
    type: "molecule",
    smiles: "CC(C)(C)OC(=O)NCC(=O)O",
    score: "$2.256",
  },
  {
    id: "8277ec4940274546af6e605544c26439",
    parentId: "64d24e2b84ad4cb8961bf458e8adf72a",
    type: "molecule",
    smiles: "C=CC(=O)OC(C)(C)C",
    isRegulated: true,
    isProtected: true,
    publishedMoleculeCount: 55,
    score: "$0.62",
    isInInventory: true,
  },
];

const nodes1 = [
  {
    id: "06160e59c3ed4901a7fbdc133f34ba79",
    type: "molecule",
    smiles: "CC(=O)NC1=CC=CC=C1CC(=O)Cl",
    // score: "$0.73",
  },
  {
    id: "53edcccb57524c609ced90ec218d175b",
    parentId: "06160e59c3ed4901a7fbdc133f34ba79",
    type: "reaction",
    score: 3,
    name: "Synthesis of acyl chlorides from esters",
    condition: "1. LiOH.H2O.THF 2.SOCl2.DCM or DMF",
    reactionCount: 50,
    doi: "110.1016/j.tet.2007.04.043",
  },
  {
    id: "22e637ae8aba45ddabc630946dc30",
    parentId: "53edcccb57524c609ced90ec218d175b",
    type: "molecule",
    smiles: "O=S(Cl)Cl",
    score: null,
  },
  {
    id: "22e637ae8aba45ddabc630946dc30538",
    parentId: "53edcccb57524c609ced90ec218d175b",
    type: "molecule",
    smiles: "CCOC(=O)CC1=CC=CC=C1NC(C)=O",
    score: null,
  },
  {
    id: "64d24e2b84ad4cb8961bf458e8adf72a",
    parentId: "22e637ae8aba45ddabc630946dc30538",
    type: "reaction",
    score: 3,
    name: "Photoredox Cross-Electrophile Coupling of alpha-Chloro Carbonyls with Aryl Halides",
    condition: "S[Ir]-photocat.[Ni]-cat.silane reagent.base.blue light",
    reactionCount: 50,
    doi: "10.1002/anie.201909072",
  },
  {
    id: "ac7824333d054cb090fbd3449a85e164",
    parentId: "64d24e2b84ad4cb8961bf458e8adf72a",
    type: "molecule",
    smiles: "CCOC(=O)CCl",
    //score: "$2.256",
  },
  {
    id: "8277ec4940274546af6e605544c26439",
    parentId: "64d24e2b84ad4cb8961bf458e8adf72a",
    type: "molecule",
    smiles: "CC(=O)Nc1ccccc1Br",
    isRegulated: true,
    isProtected: true,
    // publishedMoleculeCount: 55,
    // score: "$0.62",
    isInInventory: true,
  },
];

export default function Pathway() {
  // const pathRef = useRef(null);

  useEffect(() => {
    defineCustomElements(window); // This defines the custom elements globally
    console.log("Stencil components initialized");
    console.log(customElements.get("reaction-pathway"));
  }, []);

  useEffect(() => {
    const element = document.querySelector("reaction-pathway");
    console.log("elementaa", element, element.shadowRoot);

    element.nodes = nodes1;

    element.addEventListener("reaction-pathway-click", (e) => {
      console.log("pathway-object-clicked");
      console.log(e);
    });

    const zoomInButton = document.querySelector("#zoom-in");
    zoomInButton.onclick = () => element.zoomIn();

    const zoomoutButton = document.querySelector("#zoom-out");
    zoomoutButton.onclick = () => element.zoomOut();

    const zoomReset = document.querySelector("#zoom-reset");
    zoomReset.onclick = () => element.zoomReset();
  }, []);

  return (
    <>
      <div>Pathway</div>
      <reaction-pathway
        // ref={pathRef}
        nodes="display-score"
        display-reaction-reference="true"
        display-reaction-name="true"
        display-reaction-condition="false"
        display-honeycomb="true"
        // style={{
        //   display: "block",
        //   width: "100%",
        //   height: "100%" /* or any value appropriate for the component */,
        //   background: "#f0f0f0",
        // }}
      ></reaction-pathway>
      <div>
        <button id="zoom-in" style={{ position: "fixed", top: 10, left: 10 }}>
          zoom in
        </button>
        <button id="zoom-out" style={{ position: "fixed", top: 10, left: 75 }}>
          zoom out
        </button>
        <button
          id="zoom-reset"
          style={{ position: "fixed", top: 10, left: 155 }}
        >
          reset
        </button>
      </div>
      {/* <reaction-pathway
      nodes="display-score"
      ="true"
      display-reaction-reference="true"
      display-reaction-name="true"
      display-reaction-condition="false"
      display-honeycomb="true"
    ></reaction-pathway> */}
    </>
  );
}
