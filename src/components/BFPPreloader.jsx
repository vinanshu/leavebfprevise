import React, { useState, useEffect, useRef } from "react";
import styles from "./BFPPreloader.module.css";
import { useLocation } from "react-router-dom";

const BFPPreloader = ({
  loading = true,
  progress = 0,
  moduleTitle = "",
  onRetry = () => window.location.reload(),
}) => {
  // Disabled preloader per user request
  return null;
};

export default BFPPreloader;
