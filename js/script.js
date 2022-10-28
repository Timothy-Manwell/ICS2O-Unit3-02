// Copyright (c) 2022 Timothy Manwell All rights reserved
//
// Created by: Timothy Manwell
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit3-02/sw.js", {
    scope: "/ICS2O-Unit3-02/",
  })
}

/**
 * This function calculates the area of a pyramid
 */
 function enterClicked() {
  //input
  const length = parseFloat(document.getElementById("length-of-pyramid").value)
  const width = parseFloat(document.getElementById("width-of-pyramid").value)
  const height = parseFloat(document.getElementById("height-of-pyramid").value)

  //process
  const area = (length * width * height) / 3

  //output
  document.getElementById("area-of-pyramid").innerHTML =
    "The area of the pyramid is: " + area.toFixed(2) + " cm²."
}