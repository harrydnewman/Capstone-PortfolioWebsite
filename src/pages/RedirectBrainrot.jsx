import { useEffect } from "react";

const RedirectBrainrot = () => {
  useEffect(() => {
    window.location.href = "https://brainrot.harrydnewman.com";
  }, []);

  return null; // No UI needed
};

export default RedirectBrainrot;
