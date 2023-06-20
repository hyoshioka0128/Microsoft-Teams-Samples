// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import React, { useEffect, useState } from 'react';
import { app, profile } from "@microsoft/teams-js";
import validator from 'validator';
import './Tab.css';

// function for opening user profile card
function ProfileTab() {
  const [selectedPeople, setSelectedPeople] = useState("");
  const [requiredValidation, setRequiredValidation] = useState(false);

  useEffect(() => {
    app.initialize()
  })

  // set the input Email value to a state variable
  const setPeople = (e: any) => {
    setSelectedPeople(e.target.value)
  }

  // Checks whether the platform supports Profile Module and shows the Profile card
  const showProfile = async () => {
    if (profile.isSupported()) {
      if (selectedPeople === "" || !validator.isEmail(selectedPeople)) {
        setRequiredValidation(true);
        return;
      }
      else {
        setRequiredValidation(false);
      }

      var ShowProfileRequest: profile.ShowProfileRequest =
      {
        modality: "Expanded",
        persona: {
          identifiers: {
            AadObjectId: "", Smtp: "", Upn: selectedPeople
          },
          displayName: ""
        },
        targetElementBoundingRect: {
          bottom: 20, height: 20, left: 20, right: 20, top: 20, width: 20, x: 20, y: 20, toJSON() {
          },
        },
        triggerType: "MouseHover",
      }

      profile.showProfile(ShowProfileRequest)
    }
    else {
      alert("Profile is not Supported!!")
    }
  }

  return (
    <div>
      <h3>Profile Module</h3>
      <br />
      <text>Enter E-mail address to get profile details</text>
      <br /><br />
      <input className="input" name="myInput" onChange={(e) => setPeople(e)} />
      <button className="button" onClick={showProfile}>Show Profile</button><br />
      {requiredValidation ? <text style={{ color: "red" }}>Please enter a valid Email.</text> : <text></text>}
    </div>
  );
}

export default ProfileTab;